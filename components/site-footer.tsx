import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const links = [
  ["Home", "/#home"],
  ["About", "/#how-it-works"],
  ["Companies", "/#companies"],
  ["Fees", "/#registration"],
  ["Candidates", "/#stories"],
  ["Contact", "/#contact"],
  ["Register", "/register"],
  ["Login", "/login"],
];

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
  </svg>
);

export function SiteFooter() {
  return (
    <footer className="border-t border-white/20 bg-black text-white dark:border-black/20 dark:bg-white dark:text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:py-10">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative h-11 w-20 overflow-hidden rounded-lg bg-white dark:bg-black">
                <Image
                  src="/aditya-group-official.png"
                  alt="Aditya Group"
                  fill
                  unoptimized
                  sizes="80px"
                  className="object-contain p-2"
                  priority
                />
              </div>

              <div>
                <p className="text-base font-extrabold uppercase tracking-[0.1em]">
                  Aditya Group
                </p>

                <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-600">
                  Manpower &amp; Placement Services
                </p>
              </div>
            </Link>

            <p className="mt-3 max-w-sm text-xs leading-5 text-zinc-300 dark:text-zinc-700">
              A candidate-focused recruitment platform helping job seekers
              create professional profiles and explore career opportunities.
            </p>

            <Link
              href="/register"
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-bold text-black transition hover:bg-zinc-200 dark:bg-black dark:text-white dark:hover:bg-zinc-800"
            >
              Create Profile
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600">
              Quick Links
            </h3>

            <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2">
              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center gap-1 text-xs text-zinc-200 transition hover:text-white dark:text-zinc-800 dark:hover:text-black"
                >
                  {label}

                  <ArrowUpRight
                    size={10}
                    className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600">
              Contact
            </h3>

            <div className="mt-3 space-y-2.5">
              <a
                href="https://g.co/kgs/fZ2bX86"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-zinc-300 transition hover:text-white dark:text-zinc-700 dark:hover:text-black"
              >
                <MapPin size={14} />
                Shop No. 9, Hari Market, Denso Chowk, Bahadarabad, Uttarakhand 249402
              </a>

              <a
                href="mailto:adityagroupmanpower@gmail.com"
                className="flex items-center gap-2 text-xs text-zinc-300 dark:text-zinc-700"
              >
                <Mail size={14} />

                <span className="truncate">
                  adityagroupmanpower@gmail.com
                </span>
              </a>

              <a
                href="tel:+919411527513"
                className="flex items-center gap-2 text-xs text-zinc-300 dark:text-zinc-700"
              >
                <Phone size={14} />
                +91 9411527513
              </a>

              <a
                href="tel:+919458127513"
                className="flex items-center gap-2 text-xs text-zinc-300 dark:text-zinc-700"
              >
                <Phone size={14} />
                +91 9458127513
              </a>

              <a
                href="https://wa.me/919458127513"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-zinc-300 transition hover:text-white dark:text-zinc-700 dark:hover:text-black"
              >
                <MessageCircle size={14} />
                WhatsApp: +91 9458127513
              </a>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600">
              Connect With Us
            </h3>

            <div className="mt-3">
              <p className="mb-2 text-[10px] font-semibold text-zinc-500">Official</p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/adityagroupmanpower" target="_blank" rel="noopener noreferrer" aria-label="Aditya Group Instagram" className="text-[#E4405F] transition hover:opacity-80">
                  <InstagramIcon size={16} />
                </a>
                <a href="https://www.facebook.com/share/1CGvtYdhvW/" target="_blank" rel="noopener noreferrer" aria-label="Aditya Group Facebook" className="text-[#1877F2] transition hover:opacity-80">
                  <FacebookIcon size={16} />
                </a>
                <a href="https://youtube.com/@adityagroupmanpowerharidwar?feature=shared" target="_blank" rel="noopener noreferrer" aria-label="Aditya Group YouTube" className="text-[#FF0000] transition hover:opacity-80">
                  <YoutubeIcon size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-2 border-t border-white/20 py-4 text-[10px] text-zinc-400 dark:border-black/20 dark:text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aditya Group Manpower.</p>

          <div className="flex flex-wrap items-center gap-3">

            <p>
              Developed by{" "}
              <a
                href="https://www.yashworks.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white transition hover:text-zinc-300 dark:text-black dark:hover:text-zinc-700"
              >
                www.yashworks.in
              </a>
            </p>

            <Link href="/terms" className="rounded-md border border-white/40 px-2.5 py-1 font-semibold text-white transition hover:bg-white hover:text-black dark:border-black/30 dark:text-black dark:hover:bg-black dark:hover:text-white">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="rounded-md border border-white/40 px-2.5 py-1 font-semibold text-white transition hover:bg-white hover:text-black dark:border-black/30 dark:text-black dark:hover:bg-black dark:hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
