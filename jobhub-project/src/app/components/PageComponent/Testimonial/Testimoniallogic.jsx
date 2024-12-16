import React, { useEffect, useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg: px-2 py-2  lg:mb-[7%]">
      <div className="relative grid grid-cols-1 md:grid-cols-2 xs:gap-30 md:gap-20 lg:gap-[23%]">
        {/* Left: Testimonial Image Section */}
        <div>
        <div className="relative h-[20rem] w-full">
  <AnimatePresence>
    {testimonials.map((testimonial, index) => (
      <motion.div
        key={`testimonial-${index}`} // Unique key fix
        initial={{
          opacity: 0,
          scale: 0.9,
          z: -100,
          rotate: randomRotateY(),
        }}
        animate={{
          opacity: isActive(index) ? 1 : 0.7,
          scale: isActive(index) ? 1 : 0.95,
          z: isActive(index) ? 0 : -100,
          rotate: isActive(index) ? 0 : randomRotateY(),
          zIndex: isActive(index) ? 999 : testimonials.length - index,
          y: isActive(index) ? [0, -80, 0] : 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
          z: 100,
          rotate: randomRotateY(),
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="absolute inset-0 origin-bottom"
      >
        <img
          src={testimonial.src}
          alt={testimonial.name}
          draggable={false}
          className="rounded-3xl object-cover object-center w-full h-full 
                     xs:h-[20rem] xs:rounded-lg
                     lg:h-[28rem] lg:rounded-3xl"
        />
      </motion.div>
    ))}
  </AnimatePresence>
</div>

        </div>

        {/* Right: Testimonial Content Section */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active} // Ensure re-render on active change
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-black ">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg text-black mt-8 ">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-green-500  flex items-center justify-center group/button"
            >
              <IconArrowLeft className="h-5 w-5 text-black  group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-green-500 flex items-center justify-center group/button"
            >
              <IconArrowRight className="h-5 w-5 text-black  group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};