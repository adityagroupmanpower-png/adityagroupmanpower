import type { Metadata } from "next";
import Link from "next/link";
import { Database, Eye, FileCheck2, Home, LockKeyhole, Mail, Share2, ShieldCheck, UserRoundCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Aditya Group Manpower",
  description: "How Aditya Group Manpower collects, uses, protects and shares personal information.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    icon: Database,
    title: "Information we collect",
    items: [
      "Identity and contact details such as your name, email, phone number, date of birth, gender and address.",
      "Candidate details such as education, skills, experience, salary information, preferred roles and locations.",
      "Employer details such as company information, contact person, hiring requirements and business address.",
      "Account, interview, application, communication, payment-status and receipt records.",
      "Technical and security data such as login cookies and IP addresses used for security and rate limiting.",
    ],
  },
  {
    icon: Eye,
    title: "How we use your information",
    items: [
      "To create and manage candidate and employer accounts.",
      "To assess profiles, match candidates with suitable opportunities and arrange interviews.",
      "To communicate through the dashboard, email, phone or WhatsApp about registration, payments, interviews and support.",
      "To verify payments, create receipts, prevent misuse, secure the website and meet legal obligations.",
    ],
  },
  {
    icon: Share2,
    title: "When information is shared",
    items: [
      "Relevant candidate information may be shared with prospective employers for recruitment and interviews.",
      "Service providers may process information for hosting, databases, email delivery and website security.",
      "Razorpay processes payments. We store payment identifiers, status, amount and receipt information, but not your full card, UPI PIN or banking credentials.",
      "Information may be disclosed when legally required or necessary to protect users and our services.",
      "We do not sell personal information.",
    ],
  },
  {
    icon: LockKeyhole,
    title: "Security and retention",
    items: [
      "Passwords are stored in hashed form, and authentication cookies use security controls.",
      "We use reasonable safeguards, but no internet service can guarantee absolute security.",
      "We retain information only as long as needed to provide services, keep business and transaction records, resolve disputes and comply with law. It may then be deleted or anonymised.",
    ],
  },
  {
    icon: UserRoundCheck,
    title: "Your choices and rights",
    items: [
      "You may request access, correction, updating or erasure of your information, subject to applicable legal and record-keeping requirements.",
      "You may withdraw consent for optional processing or raise a grievance. Withdrawal does not affect processing already completed lawfully and may limit some services.",
      "You are responsible for keeping your information accurate and protecting your account credentials.",
    ],
  },
  {
    icon: FileCheck2,
    title: "Cookies, external services and children",
    items: [
      "The website uses essential authentication cookies to keep users signed in and protect restricted areas.",
      "External services, including Razorpay, process information under their own privacy notices.",
      "Our services are not intended for children under 18. Contact us if you believe a child has provided personal information so we can review it.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-white">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-zinc-300 hover:text-black dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:text-white">
          <Home size={16} /> Back to home
        </Link>

        <header className="mt-10 border-b border-zinc-200 pb-10 dark:border-white/10 sm:mt-14 sm:pb-12">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-black"><ShieldCheck size={24} /></div>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Your information matters</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">Privacy Policy</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            This policy explains what personal information Aditya Group Manpower collects, why we use it, when it may be shared, and the choices available to you when using our recruitment and placement services.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            <span className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 font-semibold dark:border-white/10 dark:bg-zinc-900">Effective: 20 November 2026</span>
            <span className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 font-semibold dark:border-white/10 dark:bg-zinc-900">Aditya Group Manpower</span>
          </div>
        </header>

        <section className="grid gap-5 py-10 sm:py-12">
          {sections.map(({ icon: Icon, title, items }) => (
            <article key={title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-black"><Icon size={19} /></span>
                <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>
              </div>
              <ul className="mt-5 space-y-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                {items.map((item) => (
                  <li key={item} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" /><span>{item}</span></li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="rounded-3xl bg-zinc-950 p-7 text-white dark:bg-white dark:text-black sm:p-10">
          <div className="flex items-start gap-4">
            <Mail className="mt-1 shrink-0" size={23} />
            <div>
              <h2 className="text-2xl font-bold">Privacy questions or requests</h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-300 dark:text-zinc-700">
                Contact us to review, correct or delete information, withdraw consent, or raise a grievance. We may verify your identity before acting on a request.
              </p>
              <div className="mt-5 space-y-2 text-base">
                <a className="block font-semibold underline underline-offset-4" href="mailto:adityagroupmanpower@gmail.com">adityagroupmanpower@gmail.com</a>
                <a className="block font-semibold underline underline-offset-4" href="tel:+919458127513">+91 9458127513</a>
                <p className="text-zinc-300 dark:text-zinc-700">Shop No. 9, Hari Market, Denso Chowk, Bahadarabad, Uttarakhand 249402</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          <p>We may update this policy when our services or legal obligations change. Read it together with our <Link href="/terms" className="font-semibold text-zinc-900 underline underline-offset-4 dark:text-white">Terms &amp; Conditions</Link>.</p>
          <p className="mt-3">Payment processing is also subject to the <a href="https://razorpay.com/buyer-privacy-notice/" target="_blank" rel="noopener noreferrer" className="font-semibold text-zinc-900 underline underline-offset-4 dark:text-white">Razorpay Buyer Privacy Notice</a>.</p>
        </section>
      </div>
    </main>
  );
}
