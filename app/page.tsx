import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";


const Page = () => {
  return (
    <section >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className=" text-center text-[#1B1C1E] font-extrabold text-4xl md:text-5xl lg:text-[70px] leading-tight lg:leading-[90px] mb-12">
          Unlock your Academic Potential with Expert Guidance
        </h1>

        {/* Content Section */}
<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr_1fr] gap-8 items-center">

  {/* Left Column */}
  <div>
    <Image src="/images/’’.png"
      alt="College Au Pier"
      width={80}
      height={80}
      className="mb-6"/>

    <p className=" text-[#474849] text-lg leading-8 ">
      College Au Pier is Africa’s leading college
      consulting partner in academic success,
      offering an all-inclusive mentoring service
      customized to meet every student’s needs
      and goals.
    </p>
  </div>

  {/* Middle Column */}
  <div className=" mx-auto w-full max-w-[650px] ">
    <div className=" relative h-[350px] md:h-[450px] lg:h-[500px] rounded-[40px] overflow-hidden ">
      <Image
        src="/images/Image.png"
        alt="Students"
        fill
        className="object-cover"/>

      {/* Buttons */}
      <div className=" absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#fff] w-85 rounded-full p-3 flex flex-col sm:flex-row gap-3 shadow-lg">

        <Link
          href="/contact" className=" group inline-flex items-center gap-2
            bg-[#2379F4]
            text-white
            px-6
            py-3
            rounded-full
            font-medium
            transition-colors
            duration-300">
          <span>Get Started</span>

          <FiArrowUpRight
            className="
              transition-transform
              duration-300
              rotate-[-10deg]
              group-hover:rotate-45
            "/>
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
          Contact Us
        </Link>
      </div>
    </div>
  </div>

  {/* Right Column */}
  <div className="">
    {/* Statistics */}
  </div>
</div>
 </div>

<div className="bg-cover bg-center bg-no-repeat  bg-blue-500 py-[0%] px-[5%] md:px-10 lg:px-16 pt-16 md:pt-24 pb-10 relative"
  style={{
    backgroundColor: "#b87f2f",
    backgroundImage: "url('/images/34183288_gel71.png')",
  }}>
  {/* Top Section */}
  <div className="flex flex-col md:flex-row gap-8 mb-12">

    {/* Left Column */}
    <div className="flex-1">
      <h2 className="text-3xl font-semibold text-[#1B1E1C] mb-6">
        Our Services
      </h2>

      <button className="bg-white text-[#2379F4] border border-gray-500 rounded-full px-6 py-3 font-medium hover:bg-[#2379F4] hover:text-white transition">
        Explore all services
      </button>
    </div>

    {/* Right Column */}
    <div className="flex-[2]">
      <h1 className="text-3xl md:text-5xl font-bold text-[#1B1C1E] leading-tight">
        “There is nothing like being over Prepared”
      </h1>
    </div>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Card 1 */}
   <div className="bg-white rounded-2xl pt-[30%] pb-[12%] px-10">
  <Image
    src="/images/CTA.png"
    alt="University Admissions"
    width={64}
    height={64}
    className="w-16 h-16"
  />

  <h3 className="text-2xl font-semibold text-[#1B1C1E] mt-5 mb-5">
    University Admissions Consulting
  </h3>

  <p className="text-[#515355] text-base leading-7">
    Our team of experienced consultants will work with you one-on-one to
    understand your unique aspirations and background, helping you present
    a compelling narrative to admissions committees.
  </p>
</div>

    {/* Card 2 */}
    <div className="bg-white rounded-2xl pt-[30%] pb-[12%] px-10">
      <Image src="/images/CTA(1).png" alt="University Admissions" width={64} height={64} className="w-16 h-16"/>
     

      <h3 className="text-2xl font-semibold text-[#1B1C1E] mt-5 mb-5">
        Passion Project Development
      </h3>

      <p className="text-[#515355] text-base leading-7">
        Whether it's a community service project, a technological innovation,
        or research, we guide you through the process of executing a project
        that aligns with your passions and enhances your academic profile.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-2xl pt-[30%] pb-[12%] px-10">
      <Image src="/images/CTA(2).png" alt="University Admissions" width={64} height={64} className="w-16 h-16"/>

      <h3 className="text-2xl font-semibold text-[#1B1C1E] mt-5 mb-5">
        Portfolio Building
      </h3>

      <p className="text-[#515355] text-base leading-7">
        Starting as early as Year 9 allows for thoughtful development and
        refinement of your portfolio, ensuring that it stands out to admissions
        committees by demonstrating proficiency, innovation, and depth.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-white rounded-2xl pt-[30%] pb-[12%] px-10">
      <Image src="/images/CTA(3).png" alt="University Admissions" width={64} height={64} className="w-16 h-16"/>

      <h3 className="text-2xl font-semibold text-[#1B1C1E] mt-5 mb-5">
        Scholarship Application Support
      </h3>

      <p className="text-[#515355] text-base leading-7">
        Our advisors provide detailed guidance on finding and applying for
        scholarships that can significantly reduce your financial burdens.
      </p>
    </div>

    {/* Image Card */}
    <div className="rounded-2xl overflow-hidden">
      <Image src="/images/logo(2).png" alt="Students" width={600} height={500} className="w-full h-full object-cover"/>
    </div>

  </div>
</div>


    </section>
  );
};

export default Page;