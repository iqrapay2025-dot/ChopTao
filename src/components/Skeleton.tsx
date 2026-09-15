interface SkProps {
  w?: string;
  h?: string;
  rounded?: string;
  className?: string;
}

export function Sk({ w = "100%", h = "1rem", rounded = "0.5rem", className = "" }: SkProps) {
  return (
    <div
      className={`sk ${className}`}
      style={{ width: w, height: h, borderRadius: rounded, flexShrink: 0 }}
    />
  );
}
