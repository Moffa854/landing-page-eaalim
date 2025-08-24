"use client";

import Image from "next/image";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

interface HeroProps {
  handleSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  assetPath: (src: string) => string;
}

export default function Hero({ handleSmoothScroll, assetPath }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative overflow-hidden w-full min-h-screen flex items-center"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-red-50/30 to-white" />
      </div>
      <div className="container mx-auto grid lg:grid-cols-2 items-center gap-6 lg:gap-10 py-8 lg:py-16 px-4">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-gray-900">
            Make everything 
            <br /> simple with{" "}
            <span className="font-bold text-red-600">Eaalim.</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-xl mx-auto lg:mx-0">
            Provide a network for all your needs with ease and fun using our platform.
            Discover interesting features from us.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#get-in-touch"
              onClick={(e) => handleSmoothScroll(e, 'get-in-touch')}
              className="group relative inline-block rounded-lg bg-red-600 text-white px-14 py-4 text-base font-medium hover:bg-red-700 w-full sm:w-auto text-center transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-[1]">Get Started</span>
              <span className="pointer-events-none absolute inset-0 -z-0 rounded-full shadow-lg shadow-red-600/30" />
            </a>
          </div>
        </div>
        <div className="relative order-first lg:order-last">
          <div className="relative z-10">
            <HeroVideoDialog
              videoSrc={assetPath("assets/vid/video5857150380202268335.mp4")}
              thumbnailSrc={assetPath("assets/images/Hero image vid.png")}
              className="relative mx-auto w-full max-w-lg lg:max-w-2xl"
            />
          </div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        </div>
      </div>
    </section>
  );
}
