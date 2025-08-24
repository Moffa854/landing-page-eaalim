"use client";

import Image from "next/image";
import { Marquee } from "@/components/magicui/marquee";

interface TestimonialsProps {
  assetPath: (src: string) => string;
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

export default function Testimonials({ assetPath }: TestimonialsProps) {
  return (
    <section className="py-14 bg-gray-50 w-full overflow-hidden">
      <SectionHeading title="Our Testimonials" />
      <div className="mt-10 w-full overflow-hidden">
        <Marquee pauseOnHover repeat={4} className="[--duration:30s] [--gap:1.5rem]">
          {[
            "assets/images/Ira-01-01-01 1.png",
            "assets/images/Ira-01-01-01 1.png",
            "assets/images/Ira-01-01-01 1.png",
            "assets/images/Ira-01-01-01 1.png",
          ].map((src, index) => (
            <div
              key={`certificate-${index}`}
              className={`mx-2 sm:mx-3 my-2 w-[540px] md:w-[580px] lg:w-[600px] rounded-xl border bg-white p-3 shadow-sm transform-gpu ${index % 2 === 0 ? "cert-animate-a scale-105" : "cert-animate-b scale-95"}`}
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
        </Marquee>
      </div>
    </section>
  );
}
