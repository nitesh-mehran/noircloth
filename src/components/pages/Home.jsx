import { useState, useEffect } from "react";
import { ShieldCheck, Truck, Undo2 } from "lucide-react";
import Products from "./Products";

const sliderImages = [
  "/images/11.webp",
  "/images/22.jpg",
  "/images/33.jpg",
];

const MadeInIndiaIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#059669"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v20M2 12h20" />
    <path d="M5 7l7 5 7-5" />
    <path d="M5 17l7-5 7 5" />
  </svg>
);

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Responsive Slider */}
      <div className="relative w-full overflow-hidden h-[350px] sm:h-[450px] lg:h-[100vh]">
        <img
          src={sliderImages[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          loading="lazy"
        />

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 z-20">
          {sliderImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer border ${
                idx === currentIndex
                  ? "bg-emerald-600 border-emerald-600"
                  : "bg-slate-300 border-slate-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              onMouseEnter={(e) => {
                if (idx !== currentIndex) {
                  e.currentTarget.style.backgroundColor = "#065f46";
                  e.currentTarget.style.borderColor = "#065f46";
                }
              }}
              onMouseLeave={(e) => {
                if (idx !== currentIndex) {
                  e.currentTarget.style.backgroundColor = "#cbd5e1";
                  e.currentTarget.style.borderColor = "#cbd5e1";
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* Products Section */}
      <Products />

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Made in India */}
          <div className="bg-yellow-100 border border-gray-300 rounded-lg p-6 text-center hover:shadow-md transition duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
              <MadeInIndiaIcon />
            </div>
            <h3 className="text-black font-semibold text-xl mb-1">
              Made in India
            </h3>
            <p className="text-gray-600 text-sm">
              Proudly crafted in India, supporting local artisans and sustainable fashion.
            </p>
          </div>

          {/* Premium Quality */}
          <div className="bg-yellow-100 border border-gray-300 rounded-lg p-6 text-center hover:shadow-md transition duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-black font-semibold text-xl mb-1">
              Premium Quality
            </h3>
            <p className="text-gray-600 text-sm">
              Only the finest fabrics and craftsmanship go into every piece we create.
            </p>
          </div>

          {/* Fast Shipping */}
          <div className="bg-yellow-100  border border-gray-300 rounded-lg p-6 text-center hover:shadow-md transition duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
              <Truck className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-black font-semibold text-xl mb-1">
              Fast Shipping
            </h3>
            <p className="text-gray-600 text-sm">
              We deliver your orders quickly and reliably — because you deserve the best experience.
            </p>
          </div>

          {/* Easy Returns */}
          <div className="bg-yellow-100 border border-gray-300 rounded-lg p-6 text-center hover:shadow-md transition duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
              <Undo2 className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-black font-semibold text-xl mb-1">
              Easy Returns
            </h3>
            <p className="text-gray-600 text-sm">
              Not satisfied? Return your items hassle-free within 30 days of purchase.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
