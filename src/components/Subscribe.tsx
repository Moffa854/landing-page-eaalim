"use client";

interface SubscribeProps {
  handleSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

export default function Subscribe({ handleSmoothScroll }: SubscribeProps) {
  return (
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
              href="#get-in-touch"
              onClick={(e) => handleSmoothScroll(e, 'get-in-touch')}
              className="rounded-md bg-red-600 text-white px-8 sm:px-16 py-3 text-sm hover:bg-red-700 w-full sm:w-auto text-center"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
