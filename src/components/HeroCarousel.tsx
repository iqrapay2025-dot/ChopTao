import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1787273670681-b1886c2807a3?w=1600&h=900&fit=crop&auto=format",
    alt: "Golden fried spring rolls on a plate",
    headline: "Delicious Small Chops,",
    accent: "Made With Love",
    sub: "Freshly made, beautifully packaged, delivered to your doorstep.",
  },
  {
    image: "https://images.unsplash.com/photo-1747008624832-e068ee496908?w=1600&h=900&fit=crop&auto=format",
    alt: "Crispy samosas artfully displayed with dipping sauce",
    headline: "Every Bite Tells",
        accent: "A Story",
    sub: "Handcrafted small chops made with premium ingredients and a whole lot of passion.",
  },
  {
    image: "https://images.unsplash.com/photo-1637059395523-d5a35541d544?w=1600&h=900&fit=crop&auto=format",
    alt: "Elegant food spread on a party table",
    headline: "Perfect for Every",
    accent: "Occasion",
    sub: "From intimate birthdays to corporate galas — we have your small chops covered.",
  },
  {
    image: "https://images.unsplash.com/photo-1740047602722-b4993b79e4b7?w=1600&h=900&fit=crop&auto=format",
    alt: "Beautiful catering party food platter",
    headline: "Chop Tao,",
    accent: "Chop Life",
    sub: "Life is too short for average snacks. Order now and taste the difference.",
  },
];

const AVATARS = [
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=48&h=48&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=48&h=48&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=48&h=48&fit=crop&auto=format",
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const advance = useCallback((next: number) => {
    setFading(true);
    setTimeout(() => {
      setActive(next);
      setFading(false);
    }, 350);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      advance((active + 1) % slides.length);
    }, 5200);
    return () => clearInterval(timer);
  }, [active, advance]);

  const slide = slides[active];

  return (
    <section className="relative min-h-[540px] md:h-[calc(100svh-4.5rem)] md:min-h-[560px] overflow-hidden" aria-label="Hero carousel">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="carousel-slide absolute inset-0"
          style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt={s.alt}
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(135deg, rgba(122,59,62,0.68) 0%, rgba(43,35,32,0.35) 60%, transparent 100%)" }} />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

      {/* Content */}
      <div
        className="relative z-20 min-h-0 md:h-full md:min-h-0 flex flex-col justify-center md:justify-end pt-8 pb-16 md:pb-24 px-6 translate-y-6 md:translate-y-0"
        style={{ opacity: fading ? 0 : 1, transition: "opacity 0.35s ease" }}
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="max-w-3xl flex flex-col items-start text-left">
            {/* Tagline pill */}
            <div className={`inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 ${active === 0 ? "mb-4" : "mb-5"}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-blush" />
              <span className="text-white/90 text-xs font-semibold tracking-wide uppercase">Taaooma"s Kitchen</span>
            </div>

            <h1
              className={`${active === 0 ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl" : "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"} font-black text-white leading-[1.08] mb-4`}
              style={{ fontFamily: '"Nunito", sans-serif' }}
            >
              {slide.headline}{" "}
              <span style={{ color: "#f3d9d6" }}>{slide.accent}</span>
            </h1>

            <p className={`text-white/75 text-base md:text-lg ${active === 0 ? "mb-6" : "mb-8"} max-w-md leading-relaxed`}>
              {slide.sub}
            </p>

            <div className={`flex flex-wrap justify-start gap-3 ${active === 0 ? "mb-7" : "mb-10"}`}>
              <Link to="/order" className="btn btn-maroon">
                Order Now
              </Link>
              <Link to="/menu" className="btn btn-outline-white">
                Explore Menu
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center justify-start gap-3">
              <div className="flex -space-x-2.5">
                {AVATARS.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Happy customer"
                    className="w-8 h-8 rounded-full border-2 border-white/60 object-cover"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-amber-300 text-sm leading-none mb-0.5">★★★★★</div>
                <p className="text-white/70 text-xs">500+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-9 right-8 z-20 flex gap-2 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => advance(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-400 ${
              i === active ? "dot-active w-8" : "dot-idle w-2.5 hover:dot-idle"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-9 left-8 z-20 text-white/50 text-xs font-mono">
        <span className="text-white/85 font-bold">{String(active + 1).padStart(2, "0")}</span>
        <span className="mx-1">/</span>
        {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}
