import { Link } from "react-router-dom";
import HeroCarousel from "@/components/HeroCarousel";
import ProductCard from "@/components/ProductCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PRODUCTS = [
  {
    image: "https://images.unsplash.com/photo-1787273670681-b1886c2807a3?w=600&h=420&fit=crop&auto=format",
    name: "Spring Rolls",
    description: "Crunchy golden rolls packed with seasoned vegetables and minced chicken.",
    badge: "Popular",
    price: "₦2,500 / dozen",
    bg: "offwhite" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1740993384944-ea1d27d6d0b6?w=600&h=420&fit=crop&auto=format",
    name: "Meat Samosa",
    description: "Flaky pastry triangles filled with well-seasoned minced beef.",
    price: "₦2,200 / dozen",
    bg: "blush" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1714799263348-41c7245cd714?w=600&h=420&fit=crop&auto=format",
    name: "Chicken Puff",
    description: "Buttery puff pastry parcels bursting with herbed chicken filling.",
    badge: "New",
    price: "₦2,800 / dozen",
    bg: "maroon-tint" as const,
  },
];

const FAVORITES = [
  {
    image: "https://images.unsplash.com/photo-1768701544400-dfa8ca509d10?w=600&h=420&fit=crop&auto=format",
    name: "Glazed Spring Rolls",
    description: "Our signature spring rolls with a subtle sweet glaze — irresistibly crunchy.",
    bg: "cream" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1697155836252-d7f969108b5a?w=600&h=420&fit=crop&auto=format",
    name: "Mixed Chops Platter",
    description: "A crowd-favourite mix of all our best sellers, perfect for sharing.",
    badge: "Best Seller",
    bg: "blush" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1732373558574-e30341f7e1a9?w=600&h=420&fit=crop&auto=format",
    name: "Party Combo Box",
    description: "Enough chops for 20 people — curated, packaged, and ready to impress.",
    bg: "offwhite" as const,
  },
];

export default function Home() {
  useScrollReveal();

  return (
    <>
      {/* 1. Hero */}
      <HeroCarousel />

      {/* 2. Secondary Promo Banner */}
      <section className="py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{ background: "linear-gradient(135deg, #f3d9d6 0%, #1e4a8c 100%)", minHeight: "360px" }}
          >
            {/* Decorative circles */}
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-10 bg-white" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full opacity-10 bg-white" />

            {/* Badge */}
            <div className="absolute top-5 right-5">
              <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-maroon shadow-md">Popular</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 relative z-10">
              {/* Text */}
              <div className="flex-1 reveal reveal-left">
                <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-3">Weekend Special</p>
                <h2
                  className="text-4xl md:text-5xl font-black text-white leading-tight mb-4"
                  style={{ fontFamily: '"Nunito", sans-serif' }}
                >
                  Party Pack Bundle
                </h2>
                <p className="text-white/80 text-base mb-6 max-w-sm leading-relaxed">
                  Feed your whole crew with our carefully curated Party Pack — spring rolls, samosas, puffs, and more, all in one beautiful box.
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <Link to="/order?item=party-pack-bundle" className="btn btn-outline-white">View Bundle</Link>
                  <span className="text-white/60 text-sm">From ₦15,000</span>
                </div>
              </div>

              {/* Image */}
              <div className="flex-shrink-0 reveal reveal-right reveal-d2">
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1636906227201-f3ec32645129?w=580&h=580&fit=crop&auto=format"
                    alt="Party Pack bundle of small chops"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="text-maroon text-xs font-bold uppercase tracking-widest mb-3">Our Signature Items</p>
            <h2
              className="text-4xl font-black text-charcoal"
              style={{ fontFamily: '"Nunito", sans-serif' }}
            >
              Featured Products
            </h2>
            <p className="text-charcoal/55 mt-3 max-w-md mx-auto text-sm leading-relaxed">
              Every item is made fresh to order using premium ingredients sourced with care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p, i) => (
              <div key={p.name} className={`reveal reveal-d${i + 1}`}>
                <ProductCard {...p} />
              </div>
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <Link to="/menu" className="btn btn-outline-maroon">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* 4. This Week's Favorites */}
      <section className="py-16 px-4" style={{ background: "#faf8f6" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div className="reveal reveal-left">
              <p className="text-royal text-xs font-bold uppercase tracking-widest mb-2">Updated weekly</p>
              <h2
                className="text-4xl font-black text-charcoal"
                style={{ fontFamily: '"Nunito", sans-serif' }}
              >
                This Week's Favorites
              </h2>
            </div>
            <Link to="/menu" className="btn btn-outline-maroon reveal reveal-right" style={{ padding: "0.55rem 1.3rem", fontSize: "0.8rem" }}>
              See All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FAVORITES.map((f, i) => (
              <div key={f.name} className={`reveal reveal-d${i + 1}`}>
                <ProductCard {...f} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Story / Feature Split */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="reveal reveal-left order-2 lg:order-1">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1720786913573-a4006333d2c7?w=800&h=620&fit=crop&auto=format"
                    alt="ChopTao kitchen — handcrafting small chops"
                    className="w-full h-[420px] object-cover"
                  />
                </div>
                {/* Floating stat */}
                <div
                  className="absolute -bottom-6 -right-4 bg-offwhite rounded-2xl px-6 py-4 shadow-lg"
                  style={{ border: "1px solid #f3d9d6" }}
                >
                  <p className="text-3xl font-black text-maroon" style={{ fontFamily: '"Nunito", sans-serif' }}>500+</p>
                  <p className="text-charcoal/60 text-xs font-medium mt-0.5">Orders Delivered</p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="reveal reveal-right order-1 lg:order-2 lg:pl-8">
              <p className="text-maroon text-xs font-bold uppercase tracking-widest mb-3">Our Story</p>
              <h2
                className="text-4xl md:text-5xl font-black text-charcoal leading-tight mb-5"
                style={{ fontFamily: '"Nunito", sans-serif' }}
              >
                Every Box, Made With Intention
              </h2>
              <p className="text-charcoal/65 leading-relaxed text-base mb-4">
                ChopTao was born from Taaooma's love of feeding people well. What started as late-night kitchen experiments became a brand that hundreds of families, event planners, and snack lovers now trust for their most special moments.
              </p>
              <p className="text-charcoal/65 leading-relaxed text-base mb-8">
                We use only fresh, quality ingredients, season every batch by hand, and package each order with the care it deserves. Because when you choose ChopTao, you deserve more than a snack — you deserve an experience.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/about" className="btn btn-maroon">Learn Our Story</Link>
                <Link to="/menu" className="btn btn-outline-maroon">See Full Menu</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Blog Teaser */}
      <section className="py-16 px-4" style={{ background: "#faf8f6" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 reveal">
            <p className="text-royal text-xs font-bold uppercase tracking-widest mb-2">Behind the Brand</p>
            <h2
              className="text-3xl font-black text-charcoal"
              style={{ fontFamily: '"Nunito", sans-serif' }}
            >
              From the ChopTao Kitchen
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                img: "https://images.unsplash.com/photo-1621241441637-ea2d3f59db32?w=700&h=420&fit=crop&auto=format",
                tag: "Catering",
                title: "How We Handled a 300-Person Event in Lagos",
                excerpt: "Our biggest order yet — here is what we learned about volume, quality, and keeping our cool.",
                delay: "reveal-d1",
              },
              {
                img: "https://images.unsplash.com/photo-1615887087343-6a32f45f27a4?w=700&h=420&fit=crop&auto=format",
                tag: "Behind the Scenes",
                title: "Why Packaging Is Just as Important as the Food",
                excerpt: "Every ChopTao box tells a story before you even lift the lid — we think about presentation as much as flavour.",
                delay: "reveal-d2",
              },
            ].map((post) => (
              <div key={post.title} className={`reveal ${post.delay} group cursor-pointer`}>
                <div className="bg-offwhite rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="overflow-hidden" style={{ height: "220px" }}>
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-blush text-maroon">{post.tag}</span>
                    <h3
                      className="font-black text-charcoal text-lg mt-3 mb-2 group-hover:text-maroon transition-colors"
                      style={{ fontFamily: '"Nunito", sans-serif' }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="text-maroon text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Dark CTA Banner */}
      <section className="py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-3xl px-8 md:px-16 py-14 relative overflow-hidden"
            style={{ background: "#2b2320" }}
          >
            {/* Decorative blob */}
            <div
              className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-10"
              style={{ background: "#7a3b3e" }}
            />
            <div
              className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full opacity-8"
              style={{ background: "#1e4a8c" }}
            />

            <div className="relative z-10 text-center reveal">
              <p
                className="text-blush/70 text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ fontFamily: '"Pacifico", cursive' }}
              >
                Chop Tao, Chop Life
              </p>
              <h2
                className="text-4xl md:text-5xl font-black text-white mb-4"
                style={{ fontFamily: '"Nunito", sans-serif' }}
              >
                Craving Something Delicious?
              </h2>
              <p className="text-white/50 text-base mb-8 max-w-lg mx-auto leading-relaxed">
                Order your favourite small chops or reach out to discuss catering for your next event. We are always ready.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/order" className="btn btn-maroon">Order Now</Link>
                <Link to="/menu" className="btn btn-outline-white">View Menu</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacing for footer */}
      <div className="h-8" />
    </>
  );
}
