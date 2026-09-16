import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ITEMS = [
  {
    name: "Spring Rolls (Classic)",
    price: 2500,
    unit: "per dozen",
    image: "https://images.unsplash.com/photo-1787273670681-b1886c2807a3?w=900&h=640&fit=crop&auto=format",
    description: "Crunchy golden rolls filled with seasoned vegetables and minced chicken.",
  },
  {
    name: "Glazed Spring Rolls",
    price: 2800,
    unit: "per dozen",
    image: "https://images.unsplash.com/photo-1768701544400-dfa8ca509d10?w=900&h=640&fit=crop&auto=format",
    description: "Our signature sweet-glaze variation for a uniquely crunchy twist.",
  },
  {
    name: "Meat Samosa",
    price: 2200,
    unit: "per dozen",
    image: "https://images.unsplash.com/photo-1740993384944-ea1d27d6d0b6?w=900&h=640&fit=crop&auto=format",
    description: "Flaky pastry triangles bursting with seasoned minced beef and onions.",
  },
  {
    name: "Veggie Samosa",
    price: 2000,
    unit: "per dozen",
    image: "https://images.unsplash.com/photo-1747008624832-e068ee496908?w=900&h=640&fit=crop&auto=format",
    description: "Light and flavourful — seasoned mixed vegetables in a crisp pastry shell.",
  },
  {
    name: "Chicken Puff",
    price: 2800,
    unit: "per dozen",
    image: "https://images.unsplash.com/photo-1714799263348-41c7245cd714?w=900&h=640&fit=crop&auto=format",
    description: "Buttery puff pastry parcels with a generous herbed chicken filling.",
  },
  {
    name: "Puff Puff",
    price: 1800,
    unit: "per dozen",
    image: "https://images.unsplash.com/photo-1668082685577-32968d7b1823?w=900&h=640&fit=crop&auto=format",
    description: "Soft, pillowy West African doughnuts dusted lightly with sugar.",
  },
  {
    name: "Mixed Chops Platter",
    price: 8500,
    unit: "per platter",
    image: "https://images.unsplash.com/photo-1697155836252-d7f969108b5a?w=900&h=640&fit=crop&auto=format",
    description: "A curated selection of all our bestsellers — perfect for sharing.",
  },
  {
    name: "Party Pack Bundle",
    price: 15000,
    unit: "per pack",
    image: "https://images.unsplash.com/photo-1636906227201-f3ec32645129?w=900&h=640&fit=crop&auto=format",
    description: "Everything you need for 20+ guests — spring rolls, samosas, puffs and more.",
  },
];

type FormState = {
  name: string; phone: string; email: string;
  address: string; date: string; notes: string;
  items: Record<string, number>;
};

const EMPTY_FORM: FormState = {
  name: "", phone: "", email: "", address: "", date: "", notes: "", items: {},
};

const TODAY = new Date().toISOString().split("T")[0];
const WHATSAPP_NUMBER = "2348155956187";

const HERO_PHOTOS = [
  "https://images.unsplash.com/photo-1716801559545-8f518d16fa3c?w=400&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1657205937708-0672f0d532a9?w=400&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1732017716897-61ef2b13c59e?w=400&h=300&fit=crop&auto=format",
];

/* ── scroll-in-out observer ── */
function useOrderObserver(submitted: boolean) {
  useEffect(() => {
    const targets = document.querySelectorAll(
      ".o-fade, .o-fade-left, .o-fade-right, .o-fade-scale"
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
          else e.target.classList.remove("in-view");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [submitted]);
}

const PARTY_PACK_IDX = ITEMS.findIndex((i) => i.name === "Party Pack Bundle");

export default function Order() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const jumpToBundle = searchParams.get("item") === "party-pack-bundle";

  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [confirmedName, setConfirmedName] = useState("");
  const [orderCode, setOrderCode] = useState("");
  const [carouselIdx, setCarouselIdx] = useState(jumpToBundle ? PARTY_PACK_IDX : 0);
  const [carouselFading, setCarouselFading] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useOrderObserver(submitted);

  useEffect(() => {
    if (jumpToBundle && carouselRef.current) {
      const timer = setTimeout(() => {
        carouselRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [jumpToBundle]);

  const updateItem = (name: string, qty: number) => {
    setForm((f) => ({
      ...f,
      items: qty > 0
        ? { ...f.items, [name]: qty }
        : (() => { const c = { ...f.items }; delete c[name]; return c; })(),
    }));
  };

  const goCarousel = (next: number) => {
    setCarouselFading(true);
    setTimeout(() => { setCarouselIdx(next); setCarouselFading(false); }, 220);
  };

  const prevSlide = () => goCarousel((carouselIdx - 1 + ITEMS.length) % ITEMS.length);
  const nextSlide = () => goCarousel((carouselIdx + 1) % ITEMS.length);

  const totalItems = Object.values(form.items).reduce((s, v) => s + v, 0);
  const totalPrice = ITEMS.reduce((sum, i) => sum + (form.items[i.name] || 0) * i.price, 0);
  const currentItem = ITEMS[carouselIdx];
  const currentQty = form.items[currentItem.name] || 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newOrderCode = `CHOPT${Date.now().toString(36).toUpperCase()}${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
    const orderLines = ITEMS
      .filter((item) => form.items[item.name])
      .map((item) => `- ${item.name} x${form.items[item.name]}: ₦${(form.items[item.name] * item.price).toLocaleString()}`)
      .join("\n");
    const message = [
      `Hello ChopTao, I would like to place an order.\nOrder code: ${newOrderCode}`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Delivery date: ${form.date}`,
      `Delivery address: ${form.address}`,
      "",
      "Order:",
      orderLines,
      `Estimated total: ₦${totalPrice.toLocaleString()}`,
      `Special notes: ${form.notes || "None"}`,
    ].join("\n");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setConfirmedName(form.name);
    setOrderCode(newOrderCode);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
        <div className="text-center max-w-md o-fade-scale in-view">
          <div className="w-20 h-20 rounded-full bg-blush flex items-center justify-center mx-auto mb-6">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#7a3b3e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="text-4xl font-black text-charcoal mb-3" style={{ fontFamily: '"Nunito", sans-serif' }}>
            Order Received!
          </h2>
          <p className="text-charcoal/60 text-base leading-relaxed mb-6">
            Thank you, {confirmedName || "there"}! We will be in touch within 24 hours to confirm details and payment.
          </p>
          <p className="text-charcoal text-sm font-bold mb-6">
            Order code: <span className="text-maroon tracking-wide">{orderCode}</span>
          </p>
          <button onClick={() => { setForm(EMPTY_FORM); setOrderCode(""); setSubmitted(false); }} className="btn btn-maroon btn-shine">
            Place Another Order
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="pt-28 pb-12 px-4 overflow-hidden relative"
        style={{ background: "linear-gradient(160deg, #f3d9d6 0%, #ffffff 65%)" }}
      >
        {/* Decorative blobs */}
        <div
          className="order-blob-1 absolute -top-16 -left-16 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(243,217,214,0.55) 0%, transparent 70%)" }}
        />
        <div
          className="order-blob-2 absolute top-10 right-10 w-40 h-40 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(122,59,62,0.1) 0%, transparent 70%)" }}
        />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
          {/* Text */}
          <div>
            <p className="text-maroon text-xs font-bold uppercase tracking-widest mb-3 o-fade">Fresh to Order</p>
            <h1
              className="text-5xl md:text-6xl font-black text-charcoal mb-4 leading-tight o-fade-left o-d1"
              style={{ fontFamily: '"Nunito", sans-serif' }}
            >
              Place Your<br />Order
            </h1>
            <p className="text-charcoal/55 text-sm leading-relaxed max-w-sm mb-6 o-fade o-d2">
              Browse our menu below, pick your favourites, fill in your details — and we will confirm within 24 hours. Minimum 48hrs notice required.
            </p>
            <div className="flex flex-wrap gap-3 o-fade o-d3">
              {["Freshly Handmade", "Minimum 48hr Notice", "Lagos Delivery"].map((b) => (
                <span key={b} className="trust-badge px-3 py-1.5 rounded-full text-xs font-semibold bg-white text-charcoal/70 border border-blush/60 cursor-default">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Photo collage */}
          <div className="grid grid-cols-3 gap-2 h-52 md:h-64 o-fade-right o-d2">
            {HERO_PHOTOS.map((src, i) => (
              <div
                key={i}
                className={`collage-photo rounded-2xl overflow-hidden ${i === 1 ? "mt-4" : ""}`}
              >
                <img src={src} alt="ChopTao food" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sticky cart bar ── */}
      {totalItems > 0 && (
        <div
          className="cart-bar-enter sticky top-[4.4rem] z-40 px-4 py-2.5 flex items-center justify-between gap-4 shadow-md"
          style={{ background: "#2b2320" }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-maroon flex items-center justify-center flex-shrink-0">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6" />
              </svg>
            </div>
            <div>
              <p className="text-white text-sm font-bold leading-none">
                {totalItems} {totalItems === 1 ? "item" : "items"} in cart
              </p>
              <p className="text-white/50 text-xs mt-0.5">₦{totalPrice.toLocaleString()} estimated</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => detailsRef.current?.scrollIntoView({ behavior: "smooth" })}
            className="btn btn-maroon btn-shine"
            style={{ padding: "0.45rem 1.1rem", fontSize: "0.75rem" }}
          >
            Fill Details ↓
          </button>
        </div>
      )}

      {/* ── Main form ── */}
      <section className="py-10 px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* ── Left col ── */}
            <div className="lg:col-span-2 flex flex-col gap-8">

              {/* Item Carousel */}
              <div ref={carouselRef} className="o-fade">
                <h2 className="text-xl font-black text-charcoal mb-4" style={{ fontFamily: '"Nunito", sans-serif' }}>
                  Select Items
                </h2>

                <div className="carousel-card form-card rounded-3xl overflow-hidden shadow-sm" style={{ border: "1px solid #f0ebe7" }}>
                  {/* Image */}
                  <div className="relative h-56 sm:h-72 overflow-hidden bg-blush/20">
                    <img
                      src={currentItem.image}
                      alt={currentItem.name}
                      className="w-full h-full object-cover"
                      style={{ opacity: carouselFading ? 0 : 1, transition: "opacity 0.25s ease" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Arrows */}
                    <button
                      type="button"
                      onClick={prevSlide}
                      className="carousel-arrow absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-charcoal shadow"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={nextSlide}
                      className="carousel-arrow absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-charcoal shadow"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>

                    {/* Counter */}
                    <div className="absolute bottom-3 right-4 text-white/80 text-xs font-mono">
                      <span className="font-bold text-white">{carouselIdx + 1}</span> / {ITEMS.length}
                    </div>
                  </div>

                  {/* Item info + qty */}
                  <div
                    className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white"
                    style={{ opacity: carouselFading ? 0 : 1, transition: "opacity 0.22s ease" }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-black text-charcoal text-lg" style={{ fontFamily: '"Nunito", sans-serif' }}>
                          {currentItem.name}
                        </h3>
                        {form.items[currentItem.name] && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-maroon text-white">
                            ×{form.items[currentItem.name]}
                          </span>
                        )}
                      </div>
                      <p className="text-charcoal/50 text-sm leading-snug mb-1">{currentItem.description}</p>
                      <p className="text-maroon font-black text-sm">₦{currentItem.price.toLocaleString()} {currentItem.unit}</p>
                    </div>

                    {/* Qty stepper */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => updateItem(currentItem.name, Math.max(0, currentQty - 1))}
                        className="qty-dec w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-charcoal transition-all"
                        style={{ background: "#f5efe6" }}
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-lg font-black text-charcoal" style={{ fontFamily: '"Nunito", sans-serif' }}>
                        {currentQty}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateItem(currentItem.name, currentQty + 1)}
                        className="qty-inc w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-white transition-all"
                        style={{ background: "#7a3b3e" }}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Dots */}
                  <div className="flex justify-center gap-1.5 pb-4 bg-white">
                    {ITEMS.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => goCarousel(i)}
                        className="carousel-dot rounded-full"
                        style={{
                          width: i === carouselIdx ? "1.6rem" : "0.5rem",
                          height: "0.5rem",
                          background: i === carouselIdx ? "#7a3b3e" : "#e0ccc9",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Added items tag strip */}
                {totalItems > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {ITEMS.filter((i) => form.items[i.name]).map((item) => (
                      <span
                        key={item.name}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-blush text-maroon transition-all hover:bg-maroon hover:text-white"
                      >
                        {item.name} ×{form.items[item.name]}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Details form */}
              <div ref={detailsRef} className="o-fade o-d1">
                <h2 className="text-xl font-black text-charcoal mb-4" style={{ fontFamily: '"Nunito", sans-serif' }}>
                  Your Details
                </h2>
                <div
                  className="form-card grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-3xl p-6 bg-white"
                  style={{ border: "1px solid #f0ebe7" }}
                >
                  {[
                    { id: "name",  label: "Full Name",    type: "text",  placeholder: "Amara Johnson" },
                    { id: "phone", label: "Phone Number", type: "tel",   placeholder: "+234 815 595 6187" },
                    { id: "email", label: "Email Address",type: "email", placeholder: "amara@email.com" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label className="block text-xs font-bold text-charcoal/55 mb-1.5 uppercase tracking-wide">{field.label}</label>
                      <input
                        required
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.id as keyof FormState] as string}
                        onChange={(e) => setForm((f) => ({ ...f, [field.id]: e.target.value }))}
                        className="order-input w-full rounded-xl px-4 py-3 text-sm text-charcoal outline-none"
                        style={{ background: "#f9f7f5", border: "1.5px solid #eddeda" }}
                        onFocus={(e) => (e.target.style.borderColor = "#7a3b3e")}
                        onBlur={(e) => (e.target.style.borderColor = "#eddeda")}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-xs font-bold text-charcoal/55 mb-1.5 uppercase tracking-wide">Preferred Delivery Date</label>
                    <input
                      required
                      type="date"
                      min={TODAY}
                      value={form.date}
                      onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                      className="order-input w-full rounded-xl px-4 py-3 text-sm text-charcoal outline-none"
                      style={{ background: "#f9f7f5", border: "1.5px solid #eddeda" }}
                      onFocus={(e) => (e.target.style.borderColor = "#7a3b3e")}
                      onBlur={(e) => (e.target.style.borderColor = "#eddeda")}
                    />
                    <p className="text-charcoal/35 text-xs mt-1">Past dates cannot be selected.</p>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-charcoal/55 mb-1.5 uppercase tracking-wide">Delivery Address</label>
                    <input
                      required
                      type="text"
                      placeholder="Street, area, Lagos"
                      value={form.address}
                      onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
                      className="order-input w-full rounded-xl px-4 py-3 text-sm text-charcoal outline-none"
                      style={{ background: "#f9f7f5", border: "1.5px solid #eddeda" }}
                      onFocus={(e) => (e.target.style.borderColor = "#7a3b3e")}
                      onBlur={(e) => (e.target.style.borderColor = "#eddeda")}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-charcoal/55 mb-1.5 uppercase tracking-wide">Special Notes</label>
                    <textarea
                      rows={3}
                      placeholder="Special requests, dietary requirements, event details..."
                      value={form.notes}
                      onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                      className="order-input w-full rounded-xl px-4 py-3 text-sm text-charcoal resize-none outline-none"
                      style={{ background: "#f9f7f5", border: "1.5px solid #eddeda" }}
                      onFocus={(e) => (e.target.style.borderColor = "#7a3b3e")}
                      onBlur={(e) => (e.target.style.borderColor = "#eddeda")}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right col — summary ── */}
            <div className="lg:col-span-1 o-fade-right o-d2">
              <div
                className="form-card rounded-3xl p-6 bg-white"
                style={{ position: "sticky", top: totalItems > 0 ? "8.5rem" : "6rem", border: "1px solid #f0ebe7" }}
              >
                <h2 className="text-lg font-black text-charcoal mb-4" style={{ fontFamily: '"Nunito", sans-serif' }}>
                  Order Summary
                </h2>

                {totalItems === 0 ? (
                  <div className="text-center py-8">
                    <div className="w-12 h-12 rounded-full bg-blush/40 flex items-center justify-center mx-auto mb-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7a3b3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6" />
                      </svg>
                    </div>
                    <p className="text-charcoal/40 text-sm">No items yet.<br />Browse the carousel above.</p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-1 mb-4">
                    {ITEMS.filter((i) => form.items[i.name]).map((item) => (
                      <div key={item.name} className="summary-item flex items-start justify-between gap-2 text-sm">
                        <div className="flex items-start gap-2 flex-1">
                          <img src={item.image} alt={item.name} className="w-8 h-8 rounded-lg object-cover flex-shrink-0 mt-0.5" />
                          <span className="text-charcoal/65 leading-snug">{item.name} ×{form.items[item.name]}</span>
                        </div>
                        <span className="font-semibold text-charcoal whitespace-nowrap">
                          ₦{(form.items[item.name] * item.price).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex justify-between items-center py-4" style={{ borderTop: "1px solid #f3d9d6" }}>
                  <span className="font-bold text-charcoal text-sm">Estimated Total</span>
                  <span className="font-black text-maroon text-lg" style={{ fontFamily: '"Nunito", sans-serif' }}>
                    ₦{totalPrice.toLocaleString()}
                  </span>
                </div>
                <p className="text-charcoal/35 text-xs mb-5 leading-relaxed">
                  Final price confirmed after review. Delivery fee calculated separately.
                </p>
                <button
                  type="submit"
                  disabled={totalItems === 0}
                  className="btn btn-maroon btn-shine w-full"
                  style={{ opacity: totalItems === 0 ? 0.45 : 1, cursor: totalItems === 0 ? "not-allowed" : "pointer" }}
                >
                  Submit Order
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
