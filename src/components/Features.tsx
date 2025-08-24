"use client";

import Image from "next/image";
import { ReactSVG } from "react-svg";

interface FeaturesProps {
  assetPath: (src: string) => string;
}

const roadmapSvg = `
<svg width="478" height="1789" viewBox="0 0 478 1789" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M404 4.06819C346.727 2.03482 178 -14.431 129 109.462C80.0008 233.354 -12.8795 324.945 4.00077 388.069C34.141 500.779 211 455.048 268.5 575.559C326 696.069 448.225 582.045 420.501 696.069C406.649 753.038 373 772.069 268.5 798.069C164 824.069 8.8732 878.641 44.9996 980.568C73.0001 1059.57 113 996.069 194.5 1070.57C276 1145.07 420.501 1125.57 468 1268.07C493.685 1345.12 461 1399.82 330 1374.82C199 1349.82 69 1430.82 69 1553.57C268 1643.57 207.5 1736.57 397.5 1786.57" stroke="url(#paint0_linear_1931_5129)" stroke-width="3" stroke-linecap="round" stroke-dasharray="19 19"/>
<defs>
<linearGradient id="paint0_linear_1931_5129" x1="152.753" y1="1786.57" x2="1115.07" y2="1084.04" gradientUnits="userSpaceOnUse">
<stop stop-color="#312ED3"/>
<stop offset="1" stop-color="#FACCD0"/>
</linearGradient>
</defs>
</svg>
`;

export default function Features({ assetPath }: FeaturesProps) {
  return (
    <section id="roadmap" className="relative w-full py-12 md:py-16 lg:py-20">
      {/* Mobile/Tablet layout (cards grid) */}
      <div className="md:hidden container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
          Our Learning Path
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                <span className="text-xl">🎯</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Eaalim Meet</h3>
                <p className="mt-1 text-sm text-gray-600">A calm, focused space for live classes with easy access to recordings.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                <span className="text-xl">👨‍🏫</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Al-Azhar Teachers</h3>
                <p className="mt-1 text-sm text-gray-600">Qualified, trusted educators guiding students with care.</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                <span className="text-xl">📚</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Curriculum Library</h3>
                <p className="mt-1 text-sm text-gray-600">Organized, clear, and always available resources.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout (SVG with positioned cards) */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 flex justify-center">
          <ReactSVG
            className="mx-auto block h-[980px] w-auto"
            src={`data:image/svg+xml;utf8,${encodeURIComponent(roadmapSvg)}`}
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="space-y-16 md:space-y-24">
            {/* Milestone 1 (right) */}
            <div className="grid md:grid-cols-2 items-start">
              <div className="md:col-start-2 md:justify-self-start ">
                <div className="relative inline-flex gap-3 -top-[65rem]">
                  <div className="relative">
                    <Image src={assetPath("azhar teacher.svg")} alt="Eaalim Meet" width={200} height={200} className="rounded-xl" />
                  </div>
                </div>
                <div className="relative -top-[65rem]">
                <h3 className="mt-3 text-xl sm:text-2xl font-bold text-gray-900">Eaalim Meet – A Learning Space Built for You</h3>
                <p className="mt-1.5 text-sm text-gray-600 max-w-xl">A calm, focused space for live classes — with easy access and smooth session recordings for anytime review.</p>
                <p className="mt-1.5 text-sm font-semibold text-gray-800 flex items-start gap-2"><span className="mt-0.5">🎯</span>Built to support students, educators, and parents – every step of the way.</p>
                </div>
              </div>
            </div>

            {/* Milestone 2 (left) */}
            <div className="grid md:grid-cols-2 items-start">
              <div className="md:col-start-1 md:justify-self-end">
                <div className="relative inline-flex gap-3 -top-[65rem]">
                  <Image src={assetPath("azhar teacher.svg")} alt="Eaalim Meet" width={200} height={200} className="rounded-xl" />
                </div>
                <div className="relative -top-[65rem] w-96">
                <h3 className="mt-3 text-xl sm:text-2xl font-bold text-gray-900">Al‑Azhar Teachers – Trusted Guidance, Everyday</h3>
                <p className="mt-1.5 text-sm text-gray-600 max-w-xl">Qualified, trusted, and patient — guiding students with clarity and care.</p>
                <p className="mt-1.5 text-sm font-semibold text-gray-800 flex items-start gap-2"><span className="mt-0.5">🧑‍🏫</span>Because meaningful teaching starts with trusted voices.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 items-start">
              <div className="md:col-start-1 md:justify-self-end">
                <div className="relative inline-flex gap-3 -top-[73rem] left-[30rem]">
                  <Image src={assetPath("Curriculum Library.svg")} alt="Eaalim Meet" width={200} height={200} className="rounded-xl" />
                </div>
                <div className="relative -top-[73rem] left-[30rem] w-96">
                <h3 className="mt-3 text-xl sm:text-2xl font-bold text-gray-900">Curriculum Library – Everything in One Place</h3>
                <p className="mt-1.5 text-sm text-gray-600 max-w-xl">Organized, clear, and always available — all your lessons in one place.</p>
                <p className="mt-1.5 text-sm font-semibold text-gray-800 flex items-start gap-2"><span className="mt-0.5">📘</span> Structured. Simple. Always ready when you are.</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 items-start">
              <div className="md:col-start-1 md:justify-self-end">
                <div className="relative inline-flex gap-3 -top-[82rem] left-5">
                  <Image src={assetPath("azhar teacher.svg")} alt="Eaalim Meet" width={200} height={200} className="rounded-xl" />
                </div>
                <div className="relative -top-[82rem]  w-96">
                <h3 className="mt-3 text-xl sm:text-2xl font-bold text-gray-900">Al‑Azhar Teachers – Trusted Guidance, Everyday</h3>
                <p className="mt-1.5 text-sm text-gray-600 max-w-xl">Qualified, trusted, and patient — guiding students with clarity and care.</p>
                <p className="mt-1.5 text-sm font-semibold text-gray-800 flex items-start gap-2"><span className="mt-0.5">🧑‍🏫</span>Because meaningful teaching starts with trusted voices.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 items-start">
              <div className="md:col-start-1 md:justify-self-end">
                <div className="relative inline-flex gap-3 -top-[85rem] left-[30rem]">
                  <Image src={assetPath("Curriculum Library.svg")} alt="Eaalim Meet" width={200} height={200} className="rounded-xl" />
                </div>
                <div className="relative -top-[84rem] left-[32rem] w-96">
                <h3 className="mt-3 text-xl sm:text-2xl font-bold text-gray-900">Curriculum Library – Everything in One Place</h3>
                <p className="mt-1.5 text-sm text-gray-600 max-w-xl">Organized, clear, and always available — all your lessons in one place.</p>
                <p className="mt-1.5 text-sm font-semibold text-gray-800 flex items-start gap-2"><span className="mt-0.5">📘</span> Structured. Simple. Always ready when you are.</p>
                </div>
              </div>
            </div>
             
            <div className="grid md:grid-cols-2 items-start">
              <div className="md:col-start-1 md:justify-self-end">
                <div className="relative inline-flex gap-3 -top-[99rem] left-16">
                  <Image src={assetPath("azhar teacher.svg")} alt="Eaalim Meet" width={200} height={200} className="rounded-xl" />
                </div>
                <div className="relative -top-[99rem]  w-96">
                <h3 className="mt-3 text-xl sm:text-2xl font-bold text-gray-900">Al‑Azhar Teachers – Trusted Guidance, Everyday</h3>
                <p className="mt-1.5 text-sm text-gray-600 max-w-xl">Qualified, trusted, and patient — guiding students with clarity and care.</p>
                <p className="mt-1.5 text-sm font-semibold text-gray-800 flex items-start gap-2"><span className="mt-0.5">🧑‍🏫</span>Because meaningful teaching starts with trusted voices.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 items-start">
              <div className="md:col-start-1 md:justify-self-end">
                <div className="relative inline-flex gap-3 -top-[106rem] left-[30rem]">
                  <Image src={assetPath("Curriculum Library.svg")} alt="Eaalim Meet" width={200} height={200} className="rounded-xl" />
                </div>
                <div className="relative -top-[106rem] left-[32rem] w-96">
                <h3 className="mt-3 text-xl sm:text-2xl font-bold text-gray-900">Curriculum Library – Everything in One Place</h3>
                <p className="mt-1.5 text-sm text-gray-600 max-w-xl">Organized, clear, and always available — all your lessons in one place.</p>
                <p className="mt-1.5 text-sm font-semibold text-gray-800 flex items-start gap-2"><span className="mt-0.5">📘</span> Structured. Simple. Always ready when you are.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
