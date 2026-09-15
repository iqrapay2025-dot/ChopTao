import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import taoImage from "@/imports/tao.jpg";
import aboutImage from "@/imports/about.jpeg";

const VALUES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: "Made With Love",
    text: "Every batch is seasoned, rolled, and fried by hand. No shortcuts, no compromises.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Premium Quality",
    text: "We source only fresh, high-quality ingredients because the taste speaks for itself.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "On Time, Every Time",
    text: "We respect your event schedule. Orders are ready when promised — always.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M16 8h-6a2 2 0 100 4h4a2 2 0 010 4H8" />
        <path d="M12 6v2m0 8v2" />
      </svg>
    ),
    title: "Fair Pricing",
    text: "Premium small chops should not break the bank. Our pricing reflects that belief.",
  },
];

export default function About() {
  useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(92, 42, 45, 0.88), rgba(43, 35, 32, 0.5)), url('" + aboutImage + "')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-4">The Story Behind</p>
          <h1
            className="text-5xl md:text-6xl font-black text-white mb-5 leading-tight"
            style={{ fontFamily: '"Nunito", sans-serif' }}
          >
            Born From a Love of Feeding People
          </h1>
          <p className="text-white/75 text-base leading-relaxed max-w-xl mx-auto">
            ChopTao is more than a snack brand — it is a labour of love, built one perfectly seasoned spring roll at a time.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="reveal reveal-left">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={taoImage}
                  alt="Taaooma, founder of ChopTao"
                  className="w-full h-[460px] object-cover"
                />
              </div>
              <div
                className="absolute -bottom-5 right-4 bg-offwhite rounded-2xl px-5 py-4 shadow-lg"
                style={{ border: "1px solid #f3d9d6" }}
              >
                <p className="text-3xl font-black text-maroon" style={{ fontFamily: '"Nunito", sans-serif' }}>2020</p>
                <p className="text-charcoal/55 text-xs font-medium">Founded</p>
              </div>
            </div>
          </div>

          <div className="reveal reveal-right">
            <p className="text-maroon text-xs font-bold uppercase tracking-widest mb-3">Our Founder</p>
            <h2
              className="text-4xl font-black text-charcoal mb-5"
              style={{ fontFamily: '"Nunito", sans-serif' }}
            >
              Meet Taaooma
            </h2>
            <div className="flex flex-col gap-4 text-charcoal/65 text-base leading-relaxed">
              <p>
                ChopTao was founded by Maryam Apaokagi — better known as Taaooma — whose infectious energy and passion for authentic Nigerian flavours is baked (and fried!) into everything we make.
              </p>
              <p>
                What started as late-night kitchen experiments and word-of-mouth orders from friends and family quickly grew into a trusted brand across Lagos. Today, ChopTao serves hundreds of families, event planners, and snack lovers who refuse to settle for average.
              </p>
              <p>
                "I wanted every box we sent out to feel like love. Not just food — an experience that made people smile before they even took a bite."
              </p>
            </div>
            <div className="mt-8">
              <Link to="/order" className="btn btn-maroon">Order From Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-blush/25">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="text-royal text-xs font-bold uppercase tracking-widest mb-3">What We Stand For</p>
            <h2
              className="text-4xl font-black text-charcoal"
              style={{ fontFamily: '"Nunito", sans-serif' }}
            >
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className={`reveal reveal-d${i + 1} bg-offwhite rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow`}
              >
                <div className="w-11 h-11 rounded-xl bg-blush flex items-center justify-center text-maroon">
                  {v.icon}
                </div>
                <div>
                  <h3
                    className="font-black text-charcoal mb-2"
                    style={{ fontFamily: '"Nunito", sans-serif' }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-charcoal/55 text-sm leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "500+", label: "Happy Customers" },
            { value: "12+", label: "Menu Items" },
            { value: "4.9★", label: "Average Rating" },
            { value: "2020", label: "Year Founded" },
          ].map((stat, i) => (
            <div key={stat.label} className={`reveal reveal-d${i + 1}`}>
              <p
                className="text-4xl font-black text-maroon mb-1"
                style={{ fontFamily: '"Nunito", sans-serif' }}
              >
                {stat.value}
              </p>
              <p className="text-charcoal/55 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-8" />
    </>
  );
}
