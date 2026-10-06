import Link from "next/link";
import type { Service } from "@/data/services";

export default function ServiceCard({
  service,
  href,
}: {
  service: Service;
  href: string;
}) {
  return (
    <article className="group relative isolate overflow-hidden rounded-[30px] border border-[#e7dccb] bg-[#fffdf8] shadow-[0_16px_50px_rgba(76,45,18,0.055)] transition-[transform,box-shadow,border-color] duration-700 ease-out hover:-translate-y-2 hover:border-[#d5b06d] hover:shadow-[0_30px_80px_rgba(76,45,18,0.13)]">
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_100%_0%,rgba(220,186,119,0.16),transparent_32%),radial-gradient(circle_at_0%_100%,rgba(245,232,207,0.45),transparent_34%)] opacity-80"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#e9c985]/20 blur-3xl transition-transform duration-1000 ease-out group-hover:scale-[1.35]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-52 w-52 rounded-full bg-[#f2dfbd]/20 blur-3xl transition-transform duration-1000 ease-out group-hover:translate-x-8 group-hover:-translate-y-8"
      />

      {/* Fine heritage texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#5b3b1d_0.7px,transparent_0.7px)] [background-size:7px_7px]"
      />

      {/* =========================================================
          DECORATIVE CORNER
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-32 w-32 overflow-hidden"
      >
        <div className="absolute right-[-38px] top-[20px] h-px w-36 rotate-45 bg-[#bd8c42]/45 transition-all duration-700 group-hover:bg-[#bd8c42]/75" />
        <div className="absolute right-[-38px] top-[29px] h-px w-36 rotate-45 bg-[#bd8c42]/20" />

        <div className="absolute right-5 top-5 h-9 w-9 rounded-full border border-[#d5b06d]/20 transition-transform duration-700 group-hover:rotate-45" />
        <div className="absolute right-[27px] top-[27px] h-5 w-5 rotate-45 border border-[#d5b06d]/25" />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative z-10 p-6 sm:p-7 lg:p-8">
        {/* Top row */}
        <div className="mb-8 flex items-start justify-between gap-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e8ddcb] bg-[#fbf6ed]/90 px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#8b704b] backdrop-blur-sm transition-all duration-500 group-hover:border-[#dcc08c] group-hover:bg-[#fffaf0]">
            <span
              aria-hidden="true"
              className="relative flex h-1.5 w-1.5 items-center justify-center"
            >
              <span className="absolute h-full w-full animate-ping rounded-full bg-[#b8893e]/30" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-[#b8893e]" />
            </span>

            {service.kind}
          </span>

          {/* OM emblem */}
          <div
            aria-hidden="true"
            className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#e2cfaa] bg-[#fffaf1] shadow-[inset_0_0_24px_rgba(184,137,62,0.08),0_8px_25px_rgba(92,57,20,0.05)] transition-all duration-700 ease-out group-hover:rotate-6 group-hover:border-[#cba15d] group-hover:bg-[#fdf4e3] group-hover:shadow-[inset_0_0_28px_rgba(184,137,62,0.12),0_10px_30px_rgba(92,57,20,0.09)]"
          >
            <span className="absolute inset-[5px] rounded-full border border-[#d7b878]/20" />

            <span className="font-serif text-[25px] leading-none text-[#a8782d] transition-transform duration-700 group-hover:scale-110">
              ॐ
            </span>
          </div>
        </div>

        {/* =======================================================
            TITLE AREA
        ======================================================== */}

        <div className="mb-5">
          <div className="mb-4 flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-px w-9 bg-[#bd8d45] transition-all duration-700 ease-out group-hover:w-16"
            />

            <span
              aria-hidden="true"
              className="h-1 w-1 rotate-45 bg-[#bd8d45] transition-transform duration-500 group-hover:rotate-90"
            />

            <span
              aria-hidden="true"
              className="h-px w-4 bg-[#d8bb85]/60 transition-all duration-700 group-hover:w-7"
            />
          </div>

          <h3 className="max-w-[20rem] font-serif text-[26px] font-medium leading-[1.2] tracking-[-0.025em] text-[#2c2118] transition-all duration-500 group-hover:translate-x-0.5 group-hover:text-[#875a20] sm:text-[28px]">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="mb-8 min-h-[84px] max-w-[36rem] text-[14px] leading-[1.9] text-[#756a5f] transition-colors duration-500 group-hover:text-[#66594c]">
          {service.description}
        </p>

        {/* =======================================================
            BOTTOM ACTION
        ======================================================== */}

        <div className="flex items-center justify-between gap-4 border-t border-[#eee5d8] pt-5">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#c49754]"
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#aa9376]">
              वैदिक सेवा
            </span>
          </div>

          <Link
            href={href}
            className="group/link inline-flex items-center gap-2.5 rounded-full py-1 pl-3 text-[12px] font-bold text-[#80541c] transition-all duration-300 hover:bg-[#fbf2e3] hover:pl-4 hover:pr-1 hover:text-[#5f3d15]"
          >
            <span>विस्तार से जानें</span>

            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ddc79f] bg-[#fffaf2] shadow-[0_5px_15px_rgba(104,67,24,0.05)] transition-all duration-500 group-hover/link:translate-x-1 group-hover/link:border-[#c59a55] group-hover/link:bg-[#f8edda] group-hover/link:shadow-[0_7px_18px_rgba(104,67,24,0.1)]"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5"
              >
                <path
                  d="M4 10h11M11 5.5 15.5 10 11 14.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* =========================================================
          PREMIUM HOVER BORDER
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[30px] border border-[#c99b52]/0 transition-colors duration-700 group-hover:border-[#c99b52]/20"
      />

      {/* Bottom accent */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#bd8d45] transition-all duration-700 ease-out group-hover:w-[42%]"
      />
    </article>
  );
}