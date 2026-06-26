import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <section className="px-6 lg:px-12 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1
          className="
            text-center
            text-[#1B1C1E]
            font-extrabold
            text-4xl
            md:text-5xl
            lg:text-[70px]
            leading-tight
            lg:leading-[90px]
            mb-12
          ">
          Unlock your Academic Potential with Expert Guidance
        </h1>

        {/* Content Section */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            gap-8
            items-center
          "
        >
          {/* Left Column */}
          <div className="flex-1">
            <Image
              src="/images/’’.png"
              alt="College Au Pier"
              width={80}
              height={80}
              className="mb-6"
            />

            <p
              className="
                text-[#474849]
                text-lg
                leading-8
              "
            >
              College Au Pier is Africa’s leading college
              consulting partner in academic success,
              offering an all-inclusive mentoring service
              customized to meet every student’s needs
              and goals.
            </p>
          </div>

          {/* Middle Column */}
          <div className="flex-[2] w-full">
            <div
              className="
                relative
                h-[350px]
                md:h-[450px]
                lg:h-[500px]
                rounded-[40px]
                overflow-hidden
              ">
              <Image
                src="/images/Image.png"
                alt="Students"
                fill
                className="object-cover"
              />

              {/* Button Container */}
              <div
                className="
                  absolute
                  bottom-6
                  left-1/2
                  -translate-x-1/2
                  bg-white
                  rounded-full
                  p-3
                  flex
                  flex-col
                  sm:flex-row
                  gap-3
                  shadow-lg
                "
              >
                <Link
                  href="/contact"
                  className="
                    bg-[#2379F4]
                    text-white
                    px-6
                    py-3
                    rounded-full
                    font-medium
                  "
                >
                  Get Started →
                </Link>

                <Link
                  href="/contact"
                  className="
                    border
                    border-gray-400
                    text-[#1E1E1E]
                    px-6
                    py-3
                    rounded-full
                    font-medium
                  "
                >
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1">
            {/* Add statistics, testimonials, or leave empty */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;