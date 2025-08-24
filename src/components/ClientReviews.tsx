"use client";

import { Marquee } from "@/components/magicui/marquee";

interface Testimonial {
  name: string;
  handle: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jack",
    handle: "@jack",
    text: "I've never seen anything like this before. It's amazing. I love it.",
  },
  {
    name: "Sara",
    handle: "@sara",
    text: "خدمة ممتازة وتعامل راقٍ. تجربة رائعة وأنصح بها الجميع.",
  },
  {
    name: "Omar",
    handle: "@omar",
    text: "Super smooth onboarding and great support. Highly recommended!",
  },
  {
    name: "Lina",
    handle: "@lina",
    text: "أفضل قرار اتخذته هذا العام. المنصة مفيدة وسهلة الاستخدام.",
  },
  {
    name: "Ahmed",
    handle: "@ahmed",
    text: "Great value for money. The features exceeded my expectations.",
  },
  {
    name: "Mona",
    handle: "@mona",
    text: "واجهة مستخدم جميلة وتجربة سلسة. شكرًا للفريق!",
  },
];

export default function ClientReviews() {
  return (
    <section className="py-12 md:py-16 bg-white w-full overflow-hidden">
      <Marquee pauseOnHover repeat={6} className="border-y bg-white [--duration:28s] [--gap:2rem]">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="mx-4 my-3 w-[320px] sm:w-[360px] rounded-2xl border border-gray-200 bg-white p-6 shadow-md"
          >
            <div className="flex items-center gap-3">
              <span className="inline-block h-10 w-10 rounded-full bg-gradient-to-br from-green-300 via-yellow-300 to-emerald-400" />
              <div className="leading-tight">
                <div className="text-base font-semibold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.handle}</div>
              </div>
            </div>
            <p className="mt-4 text-base text-gray-700 leading-relaxed">
              {t.text}
            </p>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
