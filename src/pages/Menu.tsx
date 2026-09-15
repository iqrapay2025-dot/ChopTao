import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CATEGORIES = ["All", "Spring Rolls", "Samosa", "Puff Puff", "Pies & Puffs", "Platters"];

const ITEMS = [
  {
    image: "https://images.unsplash.com/photo-1787273670681-b1886c2807a3?w=600&h=420&fit=crop&auto=format",
    name: "Spring Rolls (Classic)",
    description: "Golden, crunchy rolls filled with seasoned vegetables and minced chicken.",
    badge: "Popular",
    price: "₦2,500 / dozen",
    bg: "offwhite" as const,
    category: "Spring Rolls",
  },
  {
    image: "https://images.unsplash.com/photo-1768701544400-dfa8ca509d10?w=600&h=420&fit=crop&auto=format",
    name: "Glazed Spring Rolls",
    description: "Our signature sweet-glaze variation for a unique crunchy twist.",
    badge: "New",
    price: "₦2,800 / dozen",
    bg: "blush" as const,
    category: "Spring Rolls",
  },
  {
    image: "https://images.unsplash.com/photo-1740993384944-ea1d27d6d0b6?w=600&h=420&fit=crop&auto=format",
    name: "Meat Samosa",
    description: "Flaky pastry triangles bursting with well-seasoned minced beef and onions.",
    price: "₦2,200 / dozen",
    bg: "maroon-tint" as const,
    category: "Samosa",
  },
  {
    image: "https://images.unsplash.com/photo-1747008624832-e068ee496908?w=600&h=420&fit=crop&auto=format",
    name: "Veggie Samosa",
    description: "Light and flavourful — seasoned mixed vegetables in a crisp pastry shell.",
    price: "₦2,000 / dozen",
    bg: "cream" as const,
    category: "Samosa",
  },
  {
    image: "https://images.unsplash.com/photo-1714799263348-41c7245cd714?w=600&h=420&fit=crop&auto=format",
    name: "Chicken Puff",
    description: "Buttery puff pastry parcels with a generous herbed chicken filling.",
    badge: "New",
    price: "₦2,800 / dozen",
    bg: "offwhite" as const,
    category: "Pies & Puffs",
  },
  {
    image: "https://images.unsplash.com/photo-1697155836252-d7f969108b5a?w=600&h=420&fit=crop&auto=format",
    name: "Mixed Chops Platter",
    description: "A curated selection of our bestsellers — great for sharing at any event.",
    badge: "Best Seller",
    price: "₦8,500 / platter",
    bg: "blush" as const,
    category: "Platters",
  },
  {
    image: "https://images.unsplash.com/photo-1636906227201-f3ec32645129?w=600&h=420&fit=crop&auto=format",
    name: "Party Pack Bundle",
    description: "Everything you need for 20+ guests — spring rolls, samosas, puffs, and more.",
    badge: "Popular",
    price: "From ₦15,000",
    bg: "maroon-tint" as const,
    category: "Platters",
  },
  {
    image: "https://images.unsplash.com/photo-1732373558574-e30341f7e1a9?w=600&h=420&fit=crop&auto=format",
    name: "Puff Puff",
    description: "Soft, pillowy West African doughnuts dusted lightly with sugar.",
    price: "₦1,800 / dozen",
    bg: "cream" as const,
    category: "Puff Puff",
  },
];

export default function Menu() {
  useScrollReveal();
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? ITEMS : ITEMS.filter((i) => i.category === active);

  return (
    <>
      {/* Page Hero */}
      <section
        className="relative pt-32 pb-16 px-4 text-center overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(92, 42, 45, 0.9), rgba(43, 35, 32, 0.55)), url('https://images.unsplash.com/photo-1787273670681-b1886c2807a3?w=1600&h=700&fit=crop&auto=format')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-white/75 text-xs font-bold uppercase tracking-widest mb-3">Freshly Made Daily</p>
          <h1
            className="text-5xl md:text-6xl font-black text-white mb-4"
            style={{ fontFamily: '"Nunito", sans-serif' }}
          >
            Our Menu
          </h1>
          <p className="text-white/80 text-base leading-relaxed">
            Every item is handmade fresh to order. Minimum order quantities apply. Contact us to discuss custom or bulk orders.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="sticky top-[4.5rem] z-30 bg-white/95 backdrop-blur-sm border-b border-blush/30 px-4 py-4">
        <div className="max-w-6xl mx-auto flex gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                active === cat
                  ? "bg-maroon text-white shadow-md"
                  : "bg-offwhite text-charcoal/65 hover:text-charcoal hover:bg-blush"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((item, i) => (
              <div key={item.name} className={`reveal reveal-d${Math.min(i + 1, 5)}`}>
                <ProductCard {...item} compact />
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-charcoal/40 text-sm py-16">No items in this category yet.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 px-4 pb-12">
        <div
          className="max-w-3xl mx-auto rounded-3xl px-8 py-10 text-center reveal"
          style={{ background: "#2b2320" }}
        >
          <h3
            className="text-3xl font-black text-white mb-3"
            style={{ fontFamily: '"Nunito", sans-serif' }}
          >
            Need a Custom Order?
          </h3>
          <p className="text-white/50 text-sm mb-6">We cater for events of all sizes. Reach out and we will create something special for you.</p>
          <Link to="/contact" className="btn btn-maroon">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
