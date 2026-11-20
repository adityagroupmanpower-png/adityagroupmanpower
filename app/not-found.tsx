import Image from "next/image";
import Link from "next/link";
import { Home, MessageCircle, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-5 py-16 text-zinc-950 dark:bg-zinc-950 dark:text-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-lime-400 to-blue-600" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-orange-100 blur-3xl dark:bg-orange-500/10" />
      <div className="absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-emerald-100 blur-3xl dark:bg-emerald-500/10" />

      <section className="relative w-full max-w-2xl rounded-3xl border border-zinc-200 bg-white/90 p-7 text-center shadow-2xl shadow-zinc-200/60 backdrop-blur sm:p-12 dark:border-white/10 dark:bg-zinc-900/90 dark:shadow-black/30">
        <Link href="/" aria-label="Aditya Group home" className="mx-auto block w-fit">
          <Image src="/aditya-group-official.png" alt="Aditya Group" width={210} height={126} priority className="h-auto w-40 object-contain sm:w-48" />
        </Link>
        <div className="mx-auto mt-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-black">
          <SearchX size={27} />
        </div>
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Error 404</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">Page not found</h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-zinc-600 dark:text-zinc-400">
          The page may have moved, the address may be incorrect, or the content is no longer available.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
            <Home size={17} /> Return home
          </Link>
          <Link href="/#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-zinc-300 px-6 py-3 text-sm font-bold transition hover:bg-zinc-100 dark:border-white/15 dark:hover:bg-white/10">
            <MessageCircle size={17} /> Contact support
          </Link>
        </div>
      </section>
    </main>
  );
}
