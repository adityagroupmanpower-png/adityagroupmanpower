import { FeaturedJobs } from "@/components/home/FeaturedJobs";
import HowItWorks from "@/components/home/HowItWorks";
import { HeroSection } from "@/components/hero-section";
import RegistrationCTA from "@/components/home/RegistrationCTA";
import WhyCandidatesChooseUs from "@/components/home/WhyCandidatesChooseUs";
import CompaniesSection from "@/components/home/CompaniesSection";
import ContactSection from "@/components/home/ContactSection";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EmploymentAgency',
    name: 'Aditya Group Manpower',
    url: 'https://adityagroupmanpower.co.in/',
    description: 'Aditya Group Manpower is a modern recruitment consultancy helping people find jobs.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop No. 9, Hari Market, Denso Chowk',
      addressLocality: 'Bahadarabad',
      addressRegion: 'Uttarakhand',
      postalCode: '249402',
      addressCountry: 'IN'
    },
    telephone: ['+919411527513', '+919458127513'],
    email: 'adityagroupmanpower@gmail.com'
  };

  return (
    <div
      className="
        flex
        min-h-screen
        flex-col
        bg-white
        text-zinc-950
        transition-colors
        duration-200
        dark:bg-[#0f0f10]
        dark:text-zinc-50
      "
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <SiteNavbar />

      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="flex-1">
        {/* ===================================================
            HERO
        ==================================================== */}

        <HeroSection />

        {/* ===================================================
            FEATURED OPPORTUNITIES
        ==================================================== */}

        <FeaturedJobs />

        {/* ===================================================
            HOW IT WORKS
        ==================================================== */}

        <HowItWorks />

        {/* ===================================================
            COMPANIES
        ==================================================== */}

        <CompaniesSection />

        {/* ===================================================
            REGISTRATION CTA
            + ₹999 (NON-REFUNDABLE)
        ==================================================== */}

        <RegistrationCTA />


        {/* ===================================================
            OUR CANDIDATES
            + BENEFITS
        ==================================================== */}

        <WhyCandidatesChooseUs />

        {/* ===================================================
            CONTACT
        ==================================================== */}

        <ContactSection />
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <SiteFooter />
    </div>
  );
}
