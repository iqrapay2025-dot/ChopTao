import { Link } from "react-router-dom";

type CardBg = "offwhite" | "blush" | "maroon-tint" | "cream";

interface ProductCardProps {
  image: string;
  name: string;
  description?: string;
  badge?: string;
  price?: string;
  bg?: CardBg;
  compact?: boolean;
}

const bgMap: Record<CardBg, string> = {
  offwhite: "#ffffff",
  blush: "#f3d9d6",
  "maroon-tint": "#f0e4e4",
  cream: "#f7f4f1",
};

export default function ProductCard({
  image,
  name,
  description,
  badge,
  price,
  bg = "offwhite",
  compact = false,
}: ProductCardProps) {
  return (
    <div
      className="product-card rounded-3xl overflow-hidden flex flex-col"
      style={{ backgroundColor: bgMap[bg] }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: compact ? "10rem" : "13rem" }}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {badge && (
          <span
            className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white"
            style={{ background: "#2b2320" }}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3
          className="font-bold text-charcoal mb-1"
          style={{ fontFamily: '"Nunito", sans-serif', fontSize: compact ? "1rem" : "1.125rem" }}
        >
          {name}
        </h3>
        {description && (
          <p className="text-charcoal/60 text-sm leading-relaxed mb-3 flex-1">{description}</p>
        )}
        {price && (
          <p className="font-extrabold text-maroon text-sm mb-3">{price}</p>
        )}
        <Link
          to="/order"
          className="btn btn-charcoal self-start"
          style={{ padding: "0.5rem 1.2rem", fontSize: "0.78rem" }}
        >
          Order Now
        </Link>
      </div>
    </div>
  );
}
