"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import ClientReviews from "@/components/ClientReviews";
import Subscribe from "@/components/Subscribe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function assetPath(src: string): string {
  if (!src) return src;
  let cleaned = src.replace(/\\/g, "/").trim();
  // Allow remote or data URIs as-is
  if (/^(https?:|data:)/.test(cleaned)) return cleaned;
  // Ensure leading slash for public assets
  if (!cleaned.startsWith("/")) cleaned = `/${cleaned}`;
  // Encode path segments (keep the leading empty segment for root)
  cleaned = cleaned
    .split("/")
    .map((segment, index) =>
      index === 0 ? segment : encodeURIComponent(segment)
    )
    .join("/");
  return cleaned;
}

export default function Home() {
  // Smooth scrolling for navigation links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden pt-20">
      <Navigation handleSmoothScroll={handleSmoothScroll} assetPath={assetPath} />
      <Hero handleSmoothScroll={handleSmoothScroll} assetPath={assetPath} />
      <Features assetPath={assetPath} />
      <Courses handleSmoothScroll={handleSmoothScroll} assetPath={assetPath} />
      <Testimonials assetPath={assetPath} />
      <Pricing handleSmoothScroll={handleSmoothScroll} />
      <ClientReviews />
      <Contact />
      <Subscribe handleSmoothScroll={handleSmoothScroll} />
      <Footer assetPath={assetPath} />
    </div>
  );
}