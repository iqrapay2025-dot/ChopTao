import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import contactImage from "@/imports/contact.jpg";

function IconMail() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006 6l1.27-.64a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function IconMap() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconWhatsapp() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const CONTACT_INFO = [
  { icon: <IconMail />, label: "Email", value: "hello@choptao.com", href: "mailto:hello@choptao.com" },
  { icon: <IconPhone />, label: "Phone", value: "+234 815 595 6187", href: "tel:+2348155956187" },
  { icon: <IconWhatsapp />, label: "WhatsApp", value: "Order via WhatsApp", href: "https://wa.me/2348155956187" },
  { icon: <IconMap />, label: "Location", value: "Lagos, Nigeria", href: undefined },
];

export default function Contact() {
  useScrollReveal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 px-4 text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(92, 42, 45, 0.88), rgba(43, 35, 32, 0.55)), url(${contactImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-xl mx-auto">
          <p className="text-white/75 text-xs font-bold uppercase tracking-widest mb-3">We Would Love to Hear From You</p>
          <h1
            className="text-5xl font-black text-white mb-4"
            style={{ fontFamily: '"Nunito", sans-serif' }}
          >
            Get in Touch
          </h1>
          <p className="text-white/80 text-sm leading-relaxed">
            Have questions? Want to discuss an event? We are always happy to chat — reach out via any of the channels below.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 reveal reveal-left">
            <h2
              className="text-2xl font-black text-charcoal mb-6"
              style={{ fontFamily: '"Nunito", sans-serif' }}
            >
              Contact Details
            </h2>
            <div className="flex flex-col gap-4">
              {CONTACT_INFO.map((c) => {
                const content = (
                  <div className="flex items-start gap-4 p-4 bg-offwhite rounded-2xl hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-xl bg-blush flex items-center justify-center text-maroon flex-shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-charcoal/45 uppercase tracking-wide">{c.label}</p>
                      <p className="text-charcoal font-semibold text-sm mt-0.5">{c.value}</p>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer">{content}</a>
                ) : (
                  <div key={c.label}>{content}</div>
                );
              })}
            </div>

            <div className="mt-8 bg-charcoal rounded-2xl p-6">
              <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-2">Business Hours</p>
              <p className="text-white font-semibold text-sm mb-1">Mon – Sat: 8am – 8pm</p>
              <p className="text-white/50 text-xs">Orders placed before 6pm are confirmed same day</p>
            </div>
          </div>

          {/* Contact form — card with image + form side by side */}
          <div className="lg:col-span-3 reveal reveal-right">
            {sent ? (
              <div
                className="rounded-3xl p-10 text-center"
                style={{ border: "1px solid #f0ebe7", background: "#fff" }}
              >
                <div className="w-16 h-16 rounded-full bg-blush flex items-center justify-center mx-auto mb-5">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7a3b3e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-charcoal mb-3" style={{ fontFamily: '"Nunito", sans-serif' }}>
                  Message Sent!
                </h3>
                <p className="text-charcoal/55 text-sm mb-6">We will get back to you within 24 hours. Thanks, {form.name || "friend"}!</p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }} className="btn btn-maroon">
                  Send Another
                </button>
              </div>
            ) : (
              <div
                className="rounded-3xl overflow-hidden flex flex-col md:flex-row"
                style={{ border: "1px solid #f0ebe7" }}
              >
                {/* Left — image panel */}
                <div className="md:w-2/5 relative min-h-[220px] md:min-h-0 flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1709837167676-63c0750c6a4e?w=600&h=800&fit=crop&auto=format"
                    alt="ChopTao chef preparing fresh small chops"
                    className="w-full h-full object-cover"
                    style={{ minHeight: "220px" }}
                  />
                  {/* Overlay with brand message */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent flex flex-col justify-end p-6">
                    <p
                      className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1"
                    >
                      We Read Every Message
                    </p>
                    <p
                      className="text-white text-xl font-black leading-tight"
                      style={{ fontFamily: '"Nunito", sans-serif' }}
                    >
                      We would love to hear from you
                    </p>
                  </div>
                </div>

                {/* Right — form */}
                <form
                  onSubmit={handleSubmit}
                  className="flex-1 p-7 flex flex-col gap-4 bg-white"
                >
                  <h2 className="text-2xl font-black text-charcoal" style={{ fontFamily: '"Nunito", sans-serif' }}>
                    Send a Message
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: "name",  label: "Your Name",     type: "text",  placeholder: "Amara Johnson" },
                      { id: "email", label: "Email Address", type: "email", placeholder: "amara@email.com" },
                    ].map((f) => (
                      <div key={f.id}>
                        <label className="block text-xs font-bold text-charcoal/55 uppercase tracking-wide mb-1.5">{f.label}</label>
                        <input
                          required
                          type={f.type}
                          placeholder={f.placeholder}
                          value={form[f.id as keyof typeof form]}
                          onChange={(e) => setForm((prev) => ({ ...prev, [f.id]: e.target.value }))}
                          className="w-full rounded-xl px-4 py-3 text-sm text-charcoal outline-none"
                          style={{ background: "#f9f7f5", border: "1.5px solid #eddeda" }}
                          onFocus={(e) => (e.target.style.borderColor = "#7a3b3e")}
                          onBlur={(e) => (e.target.style.borderColor = "#eddeda")}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-charcoal/55 uppercase tracking-wide mb-1.5">Subject</label>
                    <input
                      required
                      type="text"
                      placeholder="What is this regarding?"
                      value={form.subject}
                      onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))}
                      className="w-full rounded-xl px-4 py-3 text-sm text-charcoal outline-none"
                      style={{ background: "#f9f7f5", border: "1.5px solid #eddeda" }}
                      onFocus={(e) => (e.target.style.borderColor = "#7a3b3e")}
                      onBlur={(e) => (e.target.style.borderColor = "#eddeda")}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-charcoal/55 uppercase tracking-wide mb-1.5">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your order, event, or enquiry..."
                      value={form.message}
                      onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                      className="w-full rounded-xl px-4 py-3 text-sm text-charcoal resize-none outline-none"
                      style={{ background: "#f9f7f5", border: "1.5px solid #eddeda" }}
                      onFocus={(e) => (e.target.style.borderColor = "#7a3b3e")}
                      onBlur={(e) => (e.target.style.borderColor = "#eddeda")}
                    />
                  </div>
                  <button type="submit" className="btn btn-maroon self-start">
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
