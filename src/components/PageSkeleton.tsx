import { Sk } from "./Skeleton";

function CardSk({ bg }: { bg: string }) {
  return (
    <div className="rounded-3xl overflow-hidden" style={{ background: bg }}>
      <Sk h="13rem" rounded="0" />
      <div className="p-5 flex flex-col gap-3">
        <Sk h="1.1rem" w="65%" />
        <Sk h="0.8rem" w="90%" />
        <Sk h="0.8rem" w="75%" />
        <Sk h="2rem" w="7rem" rounded="9999px" />
      </div>
    </div>
  );
}

export default function PageSkeleton() {
  return (
    <div className="min-h-screen" style={{ background: "#fff" }}>

      {/* ── Header ── */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6"
        style={{ height: "4.5rem", borderBottom: "1px solid #f0ebe7", background: "#fff" }}
      >
        <Sk w="7rem" h="1.4rem" rounded="0.4rem" />
        <div className="hidden md:flex items-center gap-7">
          {[5, 4.5, 4, 4.5, 4].map((w, i) => (
            <Sk key={i} w={`${w}rem`} h="0.8rem" />
          ))}
          <Sk w="6.5rem" h="2.2rem" rounded="9999px" />
        </div>
        <Sk className="md:hidden" w="1.5rem" h="1.5rem" rounded="0.25rem" />
      </div>

      {/* ── Hero ── */}
      <div
        className="relative flex flex-col justify-end pb-28 px-6 pt-20"
        style={{ height: "100vh", background: "linear-gradient(135deg, #ede8e4 0%, #e0d9d5 100%)" }}
      >
        {/* Shimmer over the hero "image" */}
        <div className="absolute inset-0 sk" style={{ borderRadius: 0 }} />

        {/* Text overlay */}
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="max-w-2xl flex flex-col gap-4">
            <Sk w="10rem" h="1rem" />
            <Sk w="85%" h="3.8rem" rounded="0.75rem" />
            <Sk w="65%" h="3.8rem" rounded="0.75rem" />
            <Sk w="75%" h="1.1rem" />
            <Sk w="60%" h="1.1rem" />
            <div className="flex gap-3 mt-2">
              <Sk w="8rem" h="2.8rem" rounded="9999px" />
              <Sk w="8rem" h="2.8rem" rounded="9999px" />
            </div>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <Sk key={i} w="2rem" h="2rem" rounded="9999px" />
                ))}
              </div>
              <Sk w="9rem" h="0.8rem" />
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 right-8 flex gap-2 z-10">
          <Sk w="2rem" h="0.6rem" rounded="9999px" />
          {[0, 1, 2].map((i) => (
            <Sk key={i} w="0.6rem" h="0.6rem" rounded="9999px" />
          ))}
        </div>
      </div>

      {/* ── Promo banner ── */}
      <div className="py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <Sk h="22rem" rounded="1.5rem" />
        </div>
      </div>

      {/* ── Featured Products ── */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-12 flex flex-col items-center gap-3">
            <Sk w="8rem" h="0.8rem" />
            <Sk w="14rem" h="2rem" rounded="0.6rem" />
            <Sk w="22rem" h="0.8rem" />
          </div>
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CardSk bg="#ffffff" />
            <CardSk bg="#f3d9d6" />
            <CardSk bg="#f0e4e4" />
          </div>
          {/* CTA */}
          <div className="flex justify-center mt-10">
            <Sk w="10rem" h="2.8rem" rounded="9999px" />
          </div>
        </div>
      </div>

      {/* ── Favorites ── */}
      <div className="py-16 px-4" style={{ background: "#faf8f6" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div className="flex flex-col gap-3">
              <Sk w="7rem" h="0.8rem" />
              <Sk w="16rem" h="2rem" rounded="0.6rem" />
            </div>
            <Sk w="5rem" h="2.4rem" rounded="9999px" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CardSk bg="#f7f4f1" />
            <CardSk bg="#f3d9d6" />
            <CardSk bg="#ffffff" />
          </div>
        </div>
      </div>
    </div>
  );
}
