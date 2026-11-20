// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adityagroupmanpower.co.in"),
  title: "Aditya Group Manpower | Premium Recruitment Consultancy",
  description: "Aditya Group Manpower is a modern recruitment consultancy helping teams hire with clarity and confidence.",
  keywords: [
    "Recruitment in Haridwar", 
    "Job Consultancy", 
    "Hiring agency", 
    "Aditya Group Manpower", 
    "Jobs in Uttarakhand", 
    "Placement agency",
    "Career Opportunities",
    "top placement agency in India",
    "top placement agency in Haridwar",
    "best placement agency in Uttarakhand",
    "Professional hiring agency in India",
    "Most trusted placement agency in India",
    "Recruitment services in Haridwar",
    "Staffing solutions in Uttarakhand",
    "Job placement services in Haridwar",
    "Top HR consultancy in Uttarakhand",
    "Industrial consultancy",
    "sidcul jobs",
    "Haridwar Jobs",
    "Available Sidcul Industrial Jobs",
    "onrole jobs",
    "permanent jobs",

    
  ],
  openGraph: {
    title: "Aditya Group Manpower | Premium Recruitment Consultancy",
    description: "Aditya Group Manpower is a modern recruitment consultancy helping people find jobs.",
    url: "https://adityagroupmanpower.co.in/",
    siteName: "Aditya Group Manpower",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Group Manpower | Premium Recruitment Consultancy",
    description: "Aditya Group Manpower is a modern recruitment consultancy helping people find jobs.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-950 transition-colors dark:bg-zinc-950 dark:text-zinc-50">
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
