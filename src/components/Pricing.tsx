"use client";

import { Button } from "@/components/ui/button";

interface Plan {
  name: string;
  price: string;
  cta: string;
  features: string[];
  featured?: boolean;
}

interface PricingProps {
  handleSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

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

export default function Pricing({ handleSmoothScroll }: PricingProps) {
  return (
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
                  href="#get-in-touch"
                  onClick={(e) => handleSmoothScroll(e, 'get-in-touch')}
                >
                  <Button
                    className={`w-full py-3 text-sm font-medium rounded-lg ${
                      plan.featured
                        ? "bg-red-500 hover:bg-red-600 text-white"
                        : "bg-white hover:bg-red-50 text-red-500 border border-red-500"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
