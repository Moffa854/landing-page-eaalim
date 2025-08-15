"use client";

import Image from "next/image";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';

type Feature = {
  title: string;
  description: string;
  icon: string;
};

type Course = {
  title: string;
  description: string;
  image: string;
};

type Plan = {
  name: string;
  price: string;
  cta: string;
  features: string[];
  featured?: boolean;
};

const features: Feature[] = [
  {
    title: "Creed",
    description: "Hadith Range 7",
    icon: "Feature Icon (2).svg",
  },
  {
    title: "Faith",
    description: "Hadith Range 5",
    icon: "Feature Icon (1).svg",
  },
  {
    title: "Purity",
    description: "Hadith Range 12",
    icon: "Feature Icon.svg",
  },
  {
    title: "Hadith Story",
    description: "Hadith Range 31",
    icon: "Feature Icon (3).svg",
  },
  {
    title: "Prayer",
    description: "Hadith Range 38",
    icon: "Feature Icon (4).svg",
  },
  {
    title: "Charity",
    description: "Hadith Range 1",
    icon: "Feature Icon (5).svg",
  },
];

const courses: Course[] = [
  {
    title:
      "Morbi eu risus nulla. Aliquam erat volutp nullam vitae ex id justo modo facilisis.",
    description:
      "Aenean interdum arcu sit amet nulla lacinia suscipit. Vivamus at laoreet mi. Fusce pulvinar commodo ligula, et egestas dolor. Ut hendrerit blandit neque in tempor.",
    image: "assets/images/Photo.png",
  },
  {
    title:
      "Morbi eu risus nulla. Aliquam erat volutp nullam vitae ex id justo modo facilisis.",
    description:
      "Aenean interdum arcu sit amet nulla lacinia suscipit. Vivamus at laoreet mi. Fusce pulvinar commodo ligula, et egestas dolor. Ut hendrerit blandit neque in tempor.",
    image: "assets/images/Photo.png",
  },
  {
    title:
      "Morbi eu risus nulla. Aliquam erat volutp nullam vitae ex id justo modo facilisis.",
    description:
      "Aenean interdum arcu sit amet nulla lacinia suscipit. Vivamus at laoreet mi. Fusce pulvinar commodo ligula, et egestas dolor. Ut hendrerit blandit neque in tempor.",
    image: "assets/images/Photo.png",
  },
];

const plans: Plan[] = [
  {
    name: "Standard",
    price: "12",
    cta: "Choose Plan",
    features: [
      "User Dashboard",
      "Post 3 Ads per week",
      "Multiple images & videos",
    ],
  },
  {
    name: "Premium ",
    price: "25",
    cta: "Choose Plan",
    features: [
      "User Dashboard",
      "Post 3 Ads per week",
      "Multiple images & videos",
      "Basic customer support",
      "Featured ads",
    ],
    featured: true,
  },
  {
    name: "Business",
    price: "49",
    cta: "Choose Plan",
    features: [
       "User Dashboard",
      "Post 3 Ads per week",
      "Multiple images & videos",
      "Basic customer support",
      "Featured ads",
      "Special ads badge",
      "Call to Action in Every Ads",
      "Max 12 team members",
    ],
  },
];

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

function SectionHeading({
  title,
  subtitle,
}: {
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#333333]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 text-sm sm:text-base text-[#333333]">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Auto-hide status messages after 3 seconds
  React.useEffect(() => {
    if (submitStatus === 'success' || submitStatus === 'error') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      // Using hardcoded values temporarily
      const publicKey = "YsTTcrXqzaFu5zrv6";
      const serviceId = "service_c13pa1d";
      const templateId = "template_0zi101m";

      console.log('Using hardcoded values:', {
        publicKey,
        serviceId,
        templateId
      });

      // إعداد EmailJS
      emailjs.init(publicKey);

      console.log('Sending email with:', {
        serviceId,
        templateId,
        formData
      });

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: "mustafamoffa@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      console.log('EmailJS result:', result);

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');

      
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden pt-20">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <nav className="container mx-auto flex items-center justify-between px-4 py-0 max-w-full">
          <div className="flex items-center gap-3">
            <Image
              src={assetPath("assets/images/eaalim-logo-2 1.png")}
              alt="Eaalim logo"
              width={120}
              height={66}
              className="w-24 md:w-auto"
              priority
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a 
              href="#hero" 
              className="hover:text-red-600 cursor-pointer"
              onClick={(e) => handleSmoothScroll(e, 'hero')}
            >
              Home
            </a>
            <a 
              href="#pricing" 
              className="hover:text-red-600 cursor-pointer"
              onClick={(e) => handleSmoothScroll(e, 'pricing')}
            >
              Pricing
            </a>
            <a 
              href="#features" 
              className="hover:text-red-600 cursor-pointer"
              onClick={(e) => handleSmoothScroll(e, 'features')}
            >
              About Us
            </a>
            <a 
              href="#get-in-touch" 
              className="hover:text-red-600 cursor-pointer"
              onClick={(e) => handleSmoothScroll(e, 'get-in-touch')}
            >
              Help
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Desktop Free Trial Button */}
            <a
              href="https://eaalim.com/free-trial/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block rounded-3xl hover:text-[#ffffff] text-[#F53855] border border-[#F53855] px-8 py-2 text-sm shadow-sm hover:bg-red-700"
            >
              Free Trial
            </a>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-4">
              <a 
                href="#hero" 
                className="block hover:text-red-600 cursor-pointer"
                onClick={(e) => {
                  handleSmoothScroll(e, 'hero');
                  setIsMobileMenuOpen(false);
                }}
              >
                Home
              </a>
              <a 
                href="#pricing" 
                className="block hover:text-red-600 cursor-pointer"
                onClick={(e) => {
                  handleSmoothScroll(e, 'pricing');
                  setIsMobileMenuOpen(false);
                }}
              >
                Pricing
              </a>
              <a 
                href="#features" 
                className="block hover:text-red-600 cursor-pointer"
                onClick={(e) => {
                  handleSmoothScroll(e, 'features');
                  setIsMobileMenuOpen(false);
                }}
              >
                About Us
              </a>
              <a 
                href="#get-in-touch" 
                className="block hover:text-red-600 cursor-pointer"
                onClick={(e) => {
                  handleSmoothScroll(e, 'get-in-touch');
                  setIsMobileMenuOpen(false);
                }}
              >
                Help
              </a>
              <a
                href="https://eaalim.com/free-trial/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl hover:text-[#ffffff] text-[#F53855] border border-[#F53855] px-6 py-2 text-sm shadow-sm hover:bg-red-700 text-center"
              >
                Free Trial
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden w-full">
        <div className="container mx-auto grid lg:grid-cols-2 items-center gap-6 lg:gap-10 py-8 lg:py-16 px-4">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-gray-900">
            Make everything 
              <br /> simple with{" "}
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                Eaalim.
              </span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
              Provide a network for all your needs with ease and fun using{" "}
              <span className="text-sm sm:text-base font-medium">LaslesVPN</span>{" "}
              discover interesting features from us.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://eaalim.com/free-trial/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block rounded-md bg-[#F53838] text-white px-8 sm:px-16 py-3 sm:py-4 text-sm sm:text-base font-medium hover:bg-red-700 w-full sm:w-auto text-center"
              >
                <span className="relative z-[1]">Get Started</span>
                <span className="pointer-events-none absolute inset-0 -z-0 rounded-md shadow-[0_12px_30px_-10px_rgba(245,56,56,0.9),0_8px_16px_-12px_rgba(245,56,56,0.6)]" />
              </a>
            </div>
          </div>
          <div className="relative order-first lg:order-last overflow-hidden">
            <div className="absolute -bottom-16 -left-16 right-0 top-0 bg-red-50 opacity-60 blur-3xl rounded-full" />
            <HeroVideoDialog
              videoSrc={
                "https://www.youtube.com/embed/ntZq0wIo2ds?si=V6Q7vxeBVMXnWDgk"
              }
              thumbnailSrc={assetPath("assets/images/Hero Image.png")}
              className="relative mx-auto w-full max-w-lg lg:max-w-xl"
            />
          </div>
        </div>
      </section>

      {/* Thematic Hadith Cards */}
      <section id="features" className="py-14 w-full overflow-hidden">
        <SectionHeading
          title="Thematic Hadith"
          subtitle="Thematic Hadith is a compilation of Hadiths organized not by narrators or chains of transmission, but by topics. This allows for easy acquisition of knowledge on specific aspects of Islam. This compilation can also be helpful for scholars and teachers who wish to provide education on specific topics."
        />
        {/* Video cards */}
        <div className="mt-8 container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {[
            "assets/images/Feature Image.png",
            "assets/images/Feature Image.png",
            "assets/images/Feature Image.png",
          ].map((thumb, index) => (
            <div
              key={`feature-${index}`}
              className="rounded-2xl border max-h-[500px] P-2 bg-white shadow-sm overflow-hidden"
            >
                <HeroVideoDialog
                videoSrc={
                  "https://www.youtube.com/embed/ntZq0wIo2ds?si=V6Q7vxeBVMXnWDgk"
                }
                  thumbnailSrc={assetPath(thumb)}
                className="rounded-xl overflow-hidden p-2 justify-center items-center flex"
                imageClassName="w-[600px] h-[270px] object-cover rounded-xl mx-auto"
                />
                <p className="p-4 pt-3 text-sm text-gray-600">
                <span className="font-semibold text-gray-900">
                  You can explore
                </span>{" "}
                the features that we provide with fun and have their own
                functions each feature.
                </p>
              </div>
          ))}
        </div>
        <div className="mt-16 container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[#FF7979] p-6 shadow-sm hover:shadow-md transition-shadow bg-[#FFFCFC] flex items-center gap-4"
            >
              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
              </div>
              <Image src={assetPath(item.icon)} alt="" width={64} height={64} />
            </div>
          ))}
        </div>
        <div className="mt-10 flex  justify-center">
            <a
              href="https://eaalim.com/free-trial/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block rounded-md bg-[#F53838] text-white  px-16 py-4 text-md font-medium hover:bg-red-700"
            >
              <span className="relative z-[1]">Get Started</span>
              <span className="pointer-events-none absolute inset-0 -z-0 rounded-md shadow-[0_12px_30px_-10px_rgba(245,56,56,0.9),0_8px_16px_-12px_rgba(245,56,56,0.6)]" />
            </a>
          </div>
      </section>

      {/* Testimonials (Certificates) */}
      <section className="py-14 bg-gray-50 w-full overflow-hidden">
        <SectionHeading title="Our Testimonials" />
        <div className="mt-10 container mx-auto grid md:grid-cols-2 gap-6 px-4">
          {[
            "assets/images/Ira-01-01-01 1.png",
            "assets/images/Ira-01-01-01 1.png",
          ].map((src, index) => (
            <div
              key={`certificate-${index}`}
              className="rounded-xl border bg-white p-3 shadow-sm"
            >
                <Image
                  src={assetPath(src)}
                  alt="Certificate"
                  width={820}
                  height={580}
                  className="w-full h-auto rounded-lg"
                />
              </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-14 w-full overflow-hidden">
        <SectionHeading
          title="Our Courses"
          subtitle="Comprehensive Online Learning for Quran and Islamic Studies"
        />
        <div className="mt-10 container mx-auto max-w-6xl px-4">
          {/* Highlighted course */}

          {/* Course cards alternating layout */}
          <div className="grid gap-8">
            {courses.map((c, index) => (
              <div
                key={`course-${index}`}
                className="rounded-2xl  p-8 shadow-sm bg-white grid lg:grid-cols-2 gap-8 items-center"
              >
                <div
                  className={`${index % 2 === 0
                      ? "order-2 lg:order-2"
                      : "order-2 lg:order-1"
                    }`}
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    {c.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                    {c.description}
                  </p>
                  <a
                    href="https://eaalim.com/free-trial/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="group bg-red-500 hover:bg-red-700 text-white px-10 py-6 text-base font-medium">
                      Read More
                      <ArrowRightIcon
                        className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
                        size={16}
                        aria-hidden="true"
                      />
                    </Button>
                  </a>
                </div>
                <Image
                  src={assetPath(c.image)}
                  alt={c.title}
                  width={800}
                  height={600}
                  className={`${index % 2 === 0
                      ? "order-1 lg:order-1"
                      : "order-1 lg:order-2"
                    } w-full h-auto rounded-xl`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-14 bg-gray-50 w-full overflow-hidden">
        <SectionHeading
          title={
            <>
              Choose the plans that&apos;s
              <br />
              perfect for your business.
            </>
          }
          subtitle="Donec ligula ligula, porta at urna non, faucibus congue urna. Nullam nulla purus, facilisis vitae odio ac, tempus aliquet dolor."
        />
        <div className="mt-10 container mx-auto max-w-6xl px-4">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center w-full">
            {plans.map((plan) => (
              <div
                key={plan.name}
                  className={`w-full max-w-sm lg:max-w-[396px] min-h-[632px] rounded-2xl p-4 lg:p-6 shadow-sm bg-white flex flex-col ${plan.name === "Premium " ? "" : "border border-[#FF7979]"
                }`}
              >
                {/* Plan Name in colored box */}
                <div className="bg-[#FF797933] rounded-3xl w-fit mx-auto px-4 py-1 mb-4">
                  <h3 className="text-sm font-semibold text-[#F53838] text-center">
                    {plan.name}
                  </h3>
                </div>
                
                {/* Pricing */}
                <div className="text-center mb-6 flex items-center justify-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#F53838]">
                    ${plan.price}
                  </div>
                  <div className="text-xs sm:text-sm font-light text-[#42526B]">
                    /Per Month
                  </div>
                </div>
                
                {/* Separator Line */}
                <div className="w-full h-px bg-[#F5383859] mb-6"></div>
                
                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-1">
                        <svg
                          className="w-3 h-3 text-red-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-600">{f}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Button */}
                <div className="mt-6">
                  <a
                    href="https://eaalim.com/free-trial/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className={`group w-full px-10 py-6 text-base font-medium ${plan.name === "Premium "
                          ? "bg-red-700 hover:bg-red-800 text-white"
                          : "bg-red-100 text-red-700 hover:bg-red-200"
                  }`}
                >
                  {plan.cta}
                      <ArrowRightIcon
                        className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
                        size={16}
                        aria-hidden="true"
                      />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-14 w-full overflow-hidden">
        <div className="container mx-auto grid lg:grid-cols-2 items-center gap-6 lg:gap-10 px-4">
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#061C3D]">
              WHY CHOOSE US?
            </h3>
            <p className="mt-3 text-sm sm:text-base font-medium text-[#061C3D]">
              &ldquo;This guy is true professional and very experienced in <br className="hidden sm:block" />{" "}
              migration and server configuration. He was able to <br className="hidden sm:block" /> complete
              my order in time and as per agreed scope. <br className="hidden sm:block" /> Highly
              recommend!&rdquo;
            </p>
          </div>
          <Image
            src={assetPath("assets/images/ph.png")}
            alt="Student studying"
            width={536}
            height={496}
            className="w-full h-[300px] sm:h-[400px] lg:h-[496px] rounded-xl object-cover"
          />
        </div>
      </section>

      {/* Get in Touch */}
      <section id="get-in-touch" className="py-14 w-full overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Get in Touch
              </h3>
                              <p className="text-sm sm:text-base text-gray-600 mb-8">We&apos;d love to hear from you</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-gray-50"
                  />
            </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
              <input
                type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none bg-gray-50"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    Your message has been sent successfully! We&apos;ll contact you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    An error occurred while sending the message. Please try again.
                  </div>
                )}

                                  <Button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-red-700 hover:bg-red-800 text-white px-8 py-6 text-base font-medium disabled:opacity-50"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Visit Us */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                         <svg
                       xmlns="http://www.w3.org/2000/svg"
                       fill="none"
                       viewBox="0 0 24 24"
                       strokeWidth="1.5"
                       stroke="currentColor"
                       className="size-6 text-red-600"
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                       />
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                       />
                     </svg>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                      Visit Us
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">100 Business Avenue</p>
                    <p className="text-xs sm:text-sm text-gray-600">Suite 500</p>
                    <p className="text-xs sm:text-sm text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
              </div>

              {/* Call Us */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                         <svg
                       xmlns="http://www.w3.org/2000/svg"
                       fill="none"
                       viewBox="0 0 24 24"
                       strokeWidth="1.5"
                       stroke="currentColor"
                       className="size-6 text-red-600"
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                       />
                     </svg>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                      Call Us
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Main: +1 (555) 123-4567
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Toll Free: 1-800-123-4567
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Us */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                         <svg
                       xmlns="http://www.w3.org/2000/svg"
                       fill="none"
                       viewBox="0 0 24 24"
                       strokeWidth="1.5"
                       stroke="currentColor"
                       className="size-6 text-red-600"
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                       />
                     </svg>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                      Email Us
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Support: support@company.com
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Business: business@company.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Follow Us */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                         <svg
                       xmlns="http://www.w3.org/2000/svg"
                       fill="none"
                       viewBox="0 0 24 24"
                       strokeWidth="1.5"
                       stroke="currentColor"
                       className="size-6 text-red-600"
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                       />
                     </svg>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                      Follow Us
                    </h4>
                    <div className="flex gap-3 mt-2">
                      <div className="w-8 h-8 bg-red-500 rounded-full">
                        <Image src={assetPath("Vector.svg")} alt="Facebook" width={32} height={32} className="" />
                      </div>
                      <div className="w-8 h-8 bg-red-500 rounded-full">
                        <Image src={assetPath("twitter.svg")} alt="Facebook" width={32} height={32} className="" />
                      </div>
                      <div className="w-8 h-8 bg-red-500 rounded-full">
                        <Image src={assetPath("insta.svg")} alt="Facebook" width={32} height={32} className="" />
                      </div>
                      <div className="w-8 h-8 bg-red-500 rounded-full">
                        <Image src={assetPath("Vector.svg")} alt="Facebook" width={32} height={32} className="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14 w-full overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="rounded-md bg-white p-4 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Subscribe Now for <br className="hidden sm:block" /> Get Special Features!
              </h3>
              <p className="text-sm text-gray-600 mt-1">
              Let&apos;s subscribe with us and find the fun.
              </p>
            </div>
            <div className="flex w-full sm:w-auto items-center gap-3">
              
              <a
                href="https://eaalim.com/free-trial/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-red-600 text-white px-8 sm:px-16 py-3 text-sm hover:bg-red-700 w-full sm:w-auto text-center"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-gray-100 py-6 w-full overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Image
              src={assetPath("assets/images/eaalim-logo-2 1.png")}
              alt="Eaalim"
              width={120}
              height={28}
            />
            <span className="text-xs text-gray-500 text-center sm:text-left">
              © {new Date().getFullYear()} Eaalim Institute. All rights reserved.
            </span>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            {/* Twitter/X */}
            <a href="#" className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            {/* YouTube */}
            <a href="#" className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a href="#" className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
