"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

interface Course {
  title: string;
  description: string;
  image: string;
}

interface CoursesProps {
  handleSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  assetPath: (src: string) => string;
}

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

export default function Courses({ handleSmoothScroll, assetPath }: CoursesProps) {
  return (
    <section id="courses" className="py-12 md:py-16 w-full bg-white lg:-mt-[100rem]">
      <div className="container mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Our Courses"
          subtitle="Comprehensive Online Learning for Quran and Islamic Studies"
        />
        <div className="mt-10">
          {/* Course cards alternating layout */}
          <div className="grid gap-8">
            {courses.map((c, index) => (
              <div
                key={`course-${index}`}
                className="rounded-2xl p-6 sm:p-8 shadow-sm bg-white grid lg:grid-cols-2 gap-6 items-center"
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
                    href="#get-in-touch"
                    onClick={(e) => handleSmoothScroll(e, 'get-in-touch')}
                  >
                    <Button className="group bg-red-500 hover:bg-red-700 text-white px-10 py-6 text-base font-medium">
                      Read More
                      <ArrowRightIcon
                        className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5 w-4 h-4"
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
      </div>
    </section>
  );
}
