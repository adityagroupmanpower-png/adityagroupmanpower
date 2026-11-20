import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Aditya Group - Home"
      className="group flex items-center gap-3"
    >
      <div className="relative h-11 w-20 shrink-0 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition duration-300 group-hover:shadow-md dark:border-white/10 dark:bg-zinc-900">
        <Image
          src="/aditya-group-official.png"
          alt="Aditya Group"
          fill
          priority
          unoptimized
          sizes="80px"
          className="object-contain p-2"
        />
      </div>

      <div className="hidden sm:block">
        <div className="leading-none">
          <p className="text-[13px] font-bold tracking-[0.18em] text-zinc-950 dark:text-white">
            ADITYA GROUP
          </p>

          <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
            Manpower &amp; Placement Services
          </p>
        </div>
      </div>
    </Link>
  );
}
