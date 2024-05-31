import React, { useState } from "react";
import TestimonialCard from "./testimonial-card";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
  ];

  const cardsPerView = () => {
    if (window.innerWidth >= 1024) return 4; // Desktop view
    if (window.innerWidth >= 768) return 2; // Tablet view
    return 1; // Mobile view
  };

  const [cardsVisible, setCardsVisible] = useState(cardsPerView());

  const handleResize = () => {
    setCardsVisible(cardsPerView());
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrev = () => {
    const newIndex =
      currentIndex === 0
        ? testimonials.length - cardsVisible
        : currentIndex - cardsVisible;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex === testimonials.length - cardsVisible
        ? 0
        : currentIndex + cardsVisible;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full p-12 ">
      <div className="w-full flex pt-12 pb-12 lg:pb-20 items-center lg:flex-row flex-col gap-4">
        <h2 className="text-[24px] md:text-[36px] lg:text-[90px] text-[#0B280D] font-bold leading-[1] lg:leading-[0.9] lg:w-[80%]">
          What Our Customers Are Saying
        </h2>
        <div className="flex h-fit gap-4 lg:w-[20%] justify-center">
          <button
            className=" bg-[#C4EEC4] p-2 rounded-full"
            onClick={handlePrev}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            className="bg-[#C4EEC4] p-2 rounded-full"
            onClick={handleNext}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="relative w-full">
        <div className="flex overflow-hidden w-full">
          <div
            className="flex transition-transform duration-300 w-full"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsVisible}%)`,
              gap: "12px",
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0"
              >
                <div className="p-4 bg-green-100 rounded-lg shadow-md">
                  <TestimonialCard />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({
          length: Math.ceil(testimonials.length / cardsVisible),
        }).map((_, index) => (
          <div
            key={index}
            className={`w-2 lg:w-3 h-2 lg:h-3 mx-1 rounded-full ${
              index === Math.floor(currentIndex / cardsVisible)
                ? "bg-gray-800"
                : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
