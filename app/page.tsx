"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Form from "./components/Form";
import { FiArrowUpRight } from "react-icons/fi";



const Page = () => {

const [openItem, setOpenItem] = useState("0");

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
          href="/contact" className=" border border-gray-400 text-[#1E1E1E]px-6 py-3 rounded-full font-medium">
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

 <div className="px-5 md:px-[5%] pt-8 md:pt-[3%]">
      {/* Heading */}
      <div className="pb-2 md:pb-[1%]">
        <h1 className="text-[#1B1C1E] font-['OpenSauceOne-Medium',sans-serif] font-bold text-3xl sm:text-4xl md:text-[46px] leading-tight">
          Who you would work with?
        </h1>
      </div>

      {/* Button */}
      <div className="flex justify-center items-center pb-10 md:pb-[5%]">
        <button className="group flex items-center justify-center gap-3 rounded-full bg-[#2379F4] px-8 py-4 text-white transition-all duration-300 hover:bg-blue-700">
          <span>Book consultation now</span>     

          <FiArrowUpRight className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
         </button>
      </div>
    </div>

  <section className="bg-[#f9f9f9] px-5 py-16 lg:px-20">
  {/* Title */}
  <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-[#1b1c1e]">
    Why College Au Pier
  </h2>

  {/* First Row */}
  <div className="mt-12 grid grid-cols-1 lg:grid-cols-4 gap-6">

    {/* Large Image */}
    <div className="lg:col-span-2 h-[280px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-2xl border border-gray-300">
      <Image
        src="/images/people-working-office1.png"
        alt="Expert Guidance"
        width={574}
        height={322}
        className="w-full h-full object-cover"/>
    </div>

    {/* Card */}
    <div className="bg-white border border-gray-300 rounded-2xl p-6 lg:pt-24">
      <h2 className="text-2xl font-bold text-[#1b1c1e] mb-5">
        Expert Guidance
      </h2>

      <p className="text-[#474849] leading-7">
        Receive personalized consultation from experts who understand the
        nuances of international admissions processes.
      </p>
    </div>

    {/* Card */}
    <div className="bg-white border border-gray-300 rounded-2xl p-6 lg:pt-24">
      <h2 className="text-2xl font-bold text-[#1b1c1e] mb-5">
        Scholarship Assistance
      </h2>

      <p className="text-[#474849] leading-7">
        We don’t just aim for admission; we strive to secure financial aid and
        scholarships that make your educational journey affordable.
      </p>
    </div>
  </div>

  {/* Second Row */}
  <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">

    {/* Card */}
    <div className="bg-white border border-gray-300 rounded-2xl p-6 lg:pt-24">
      <h2 className="text-2xl font-bold text-[#1b1c1e] mb-5">
        Comprehensive Preparation
      </h2>

      <p className="text-[#474849] leading-7">
        From standardized test preparation to crafting compelling personal
        statements, we provide all the tools you need for success.
      </p>
    </div>

    {/* Large Image */}
    <div className="lg:col-span-2 h-[280px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-2xl border border-gray-300">
      <Image
        src="/images/Image8.png"
        alt="Portfolio Building"
        width={574}
        height={322}
        className="w-full h-full object-cover"/>
    </div>

    {/* Card */}
    <div className="bg-white border border-gray-300 rounded-2xl p-6 lg:pt-24">
      <h2 className="text-2xl font-bold text-[#1b1c1e] mb-5">
        Portfolio Building
      </h2>

      <p className="text-[#474849] leading-7">
        We guide students from Year 9 with the resources and professional
        guidance needed to improve their chances of getting admitted to the
        university of their dream.
      </p>
    </div>
  </div>
</section>

 
{/* Testimonial Section */}
<section className="bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/images/Blackbgimg.png')",
  }}>
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:px-8 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">

    {/*  LEFT CONTENT */}
    <div className="flex flex-col">

      <p className="font-['OpenSauceOne-Regular'] text-[18px] font-semibold leading-[27px] text-[#F9E2C5] sm:text-[20px] lg:text-[22px]">
        Testimonial
      </p>

      <h2 className="mt-3 font-['OpenSauceOne-Medium'] text-[32px] font-bold leading-[40px] text-[#F68F08] sm:text-[38px] sm:leading-[47px] lg:text-[46px] lg:leading-[56.9px]">
        Students
      </h2>

      <h2 className="font-['OpenSauceOne-Medium'] text-[32px] font-bold leading-[40px] text-white sm:text-[38px] sm:leading-[47px] lg:text-[46px] lg:leading-[56.9px]">
        Feedback
      </h2>

      <div className="mt-8">
        <button
          className="
            rounded-[40px]
            bg-white
            px-6
            py-3
            font-['OpenSauceOne-Regular']
            text-[16px]
            font-medium
            leading-[19.79px]
            text-[#1E1E1E]
            transition-colors
            duration-200
            hover:bg-gray-100
          ">
          View More
        </button>
      </div>

    </div>


    {/*RIGHT TESTIMONIALS*/}
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">

      {/* Testimonial 1 */}
      <article className="min-h-[322px] w-full rounded-[16px] bg-[#2B2C2D] p-6 sm:p-7 lg:p-8">

      </article>


      {/* Testimonial 2 */}
      <article className="min-h-[322px] w-full rounded-[16px] bg-[#2B2C2D] p-6 sm:p-7 lg:p-8">

      </article>


      {/* Testimonial 3 */}
      <article className="min-h-[322px] w-full rounded-[16px] bg-[#FFFFFF] p-6 sm:p-7 lg:p-8">

        <p className="font-['OpenSauceOne-Regular'] text-[14px] font-medium leading-[24px] text-[#1E1E1E]">
          “The team was helpful throughout my application and relocation
          journey. Their support gave me confidence every step of the way.”
        </p>

        <div className="mt-16 flex items-center gap-4 sm:mt-10">

          <div className="shrink-0">
            <Image
              src="/images/image.png"
              alt="University Admissions"
              width={40}
              height={40}
              className="h-16 w-16 rounded-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <h3 className="font-['OpenSauceOne-Regular'] text-[16px] font-semibold leading-[19.79px] text-[#1E1E1E]">
              Elekwa Ikechi Ibe
            </h3>

            <p className="mt-2 font-['OpenSauceOne-Regular'] text-[12px] font-normal leading-[14.84px] text-[#474849]">
              Student
            </p>

            <p className="mt-1 font-['OpenSauceOne-Regular'] text-[10px] font-normal leading-[12.37px] text-[#939090]">
              Thompson Rivers University
            </p>
          </div>

        </div>
      </article>

      {/* Testimonial 4 */}
      <article className="min-h-[322px] w-full rounded-[16px] bg-[#FFFFFF] p-6 sm:p-7 lg:p-8">

        <p className="font-['OpenSauceOne-Regular'] text-[14px] font-medium leading-[24px] text-[#1E1E1E]">
          “With the support of College Au Pier, I was able to secure a 50% scholarship to the University of Toronto 
          where I would be pursuing a degree in architecture.”
        </p>

        <div className="mt-16 flex items-center gap-4 sm:mt-10">

          <div className="shrink-0">
            <Image
              src="/images/image2.png"
              alt="University Admissions"
              width={40}
              height={40}
              className="h-16 w-16 rounded-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <h3 className="font-['OpenSauceOne-Regular'] text-[16px] font-semibold leading-[19.79px] text-[#1E1E1E]">
              Faridah Alfa
            </h3>

            <p className="mt-2 font-['OpenSauceOne-Regular'] text-[12px] font-normal leading-[14.84px] text-[#474849]">
              Student
            </p>

            <p className="mt-1 font-['OpenSauceOne-Regular'] text-[10px] font-normal leading-[12.37px] text-[#939090]">
             University of Toronto
            </p>
          </div>

        </div>
      </article>


      {/* Testimonial 5 */}
      <article className="min-h-[322px] w-full rounded-[16px] bg-[#2B2C2D] p-6 sm:p-7 lg:p-8">

      </article>


      {/* Testimonial 6 */}
      <article className="min-h-[322px] w-full rounded-[16px] bg-[#FFFFFF] p-6 sm:p-7 lg:p-8">

        <p className="font-['OpenSauceOne-Regular'] text-[14px] font-medium leading-[24px] text-[#1E1E1E]">
          “The team was helpful throughout my application and relocation
          journey. Their support gave me confidence every step of the way.”
        </p>

        <div className="mt-16 flex items-center gap-4 sm:mt-10">

          <div className="shrink-0">
            <Image
              src="/images/image3.png"
              alt="University Admissions"
              width={40}
              height={40}
              className="h-16 w-16 rounded-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <h3 className="font-['OpenSauceOne-Regular'] text-[16px] font-semibold leading-[19.79px] text-[#1E1E1E]">
              Elekwa Ikechi Ibe
            </h3>

            <p className="mt-2 font-['OpenSauceOne-Regular'] text-[12px] font-normal leading-[14.84px] text-[#474849]">
              Student
            </p>

            <p className="mt-1 font-['OpenSauceOne-Reg <Form />ular'] text-[10px] font-normal leading-[12.37px] text-[#939090]">
              Thompson Rivers University
            </p>
          </div>

        </div>
      </article>

    </div>

  </div>
</section>

<section className="m-[5%] bg-white">
  <h2 className="font-['OpenSauceOne-Medium'] text-[32px] font-bold leading-[40px] text-[#1B1C1E] md:text-[46px] md:leading-[56.9px]">
    How College Au Pier helps your child
  </h2>

  <div className="mt-8 w-full overflow-hidden rounded- <Form />2xl">
    <Image
      src="/images/the cahrt.png"
      alt="University Admissions"
      width={1200}
      height={700}
      className="h-auto w-full object-cover"/>
      
  </div>
</section>

<section className="bg-[#FFF8EE] px-[5%] pb-[10%] pt-[5%]">
  <h1 className="font-['OpenSauceOne-Medium'] text-[32px] font-semibold leading-[40px] text-[#1B1C1E] md:text-[46px] md:leading-[56.9px]">
    Webinars 
  </h1>

  <div className="mt-[5%] flex w-full flex-col gap-5 md:flex-row">

    <div className="w-full rounded-[16px] border border-[#a7a7a7] bg-white p-5 md:w-1/3">
      <div className="mb-[50px] flex items-center justify-between">
        <h3 className="font-['OpenSauceOne-Regular'] text-[14px] font-normal leading-[17.32px] text-[#474849]">
          May 12th, 2024
        </h3>

        <h3 className="font-['OpenSauceOne-Regular'] text-right text-[20px] font-medium leading-[24.74px] text-[#474849]">
          ₦ 5,000
        </h3>
      </div>

      <h2 className="mb-5 font-['OpenSauceOne-Medium'] text-[22px] font-bold leading-[28px] text-[#1B1C1E] md:text-[26px] md:leading-[32.16px]">
        Holistic Approach
      </h2>

      <p className="pr-0 font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-[26px] text-[#474849] md:pr-5">
        From essay brainstorming to test-taking strategies, we cover every aspect of your academic journey.
      </p>

      <div className="mt-5 flex items-center justify-between">
        <Image src="/images/Iconwrap.png" alt="" width={100} height={100} className="h-auto w-[15%] object-contain"/>

        <button className="rounded-[50px] border-none bg-[#FFF2E1] px-[15px] py-[5px] font-['OpenSauceOne-Regular'] text-[14px] font-medium leading-[17.32px] text-[#F68F08]">
          Essay writing
        </button>
      </div>
    </div>


    <div className="w-full rounded-[16px] border border-[#a7a7a7] bg-white p-5 md:w-1/3">
      <div className="mb-[50px] flex items-center justify-between">
        <h3 className="font-['OpenSauceOne-Regular'] text-[14px] font-normal leading-[17.32px] text-[#474849]">
          May 12th, 2024
        </h3>

        <h3 className="font-['OpenSauceOne-Regular'] text-right text-[20px] font-medium leading-[24.74px] text-[#474849]">
          ₦ 5,000
        </h3>
      </div>

      <h2 className="mb-5 font-['OpenSauceOne-Medium'] text-[22px] font-bold leading-[28px] text-[#1B1C1E] md:text-[26px] md:leading-[32.16px]">
        Holistic Approach
      </h2> 

      <p className="pr-0 font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-[26px] text-[#474849] md:pr-5">
        From essay brainstorming to test-taking strategies, we cover every aspect of your academic journey.
      </p>

      <div className="mt-5 flex items-center justify-between">
        <Image src="/images/Iconwrap.png" alt="" width={100} height={100} className="h-auto w-[15%] object-contain"/>

        <button className="rounded-[50px] border-none bg-[#E6F1FF] px-[15px] py-[5px] font-['OpenSauceOne-Regular'] text-[14px] font-medium leading-[17.32px] text-[#2379F4]">
          Test Preparation
        </button>
      </div>
    </div>


    <div className="w-full rounded-[16px] border border-[#a7a7a7] bg-white p-5 md:w-1/3">
      <div className="mb-[50px] flex items-center justify-between">
        <h3 className="font-['OpenSauceOne-Regular'] text-[14px] font-normal leading-[17.32px] text-[#474849]">
          May 12th, 2024 
        </h3>

        <h3 className="font-['OpenSauceOne-Regular'] text-right text-[20px] font-medium leading-[24.74px] text-[#474849]">
          ₦ 5,000
        </h3>
      </div>

      <h2 className="mb-5 font-['OpenSauceOne-Medium'] text-[22px] font-bold leading-[28px] text-[#1B1C1E] md:text-[26px] md:leading-[32.16px]">
        Holistic Approach
      </h2>

      <p className="pr-0 font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-[26px] text-[#474849] md:pr-5">
        From essay brainstorming to test-taking strategies, we cover every aspect of your academic journey.
      </p>
      <div className="mt-5 flex items-center justify-between">
       <Image src="/images/Iconwrap.png" alt="" width={100} height={100} className="h-auto w-[15%] object-contain"/>

        <button className="rounded-[50px] border-none bg-[#FCF0FF] px-[15px] py-[5px] font-['OpenSauceOne-Regular'] text-[14px] font-medium leading-[17.32px] text-[#C608F6]">
          General Consulting
        </button>
      </div>
    </div>

  </div>
</section>

<section className="px-[5%] py-[5%]">
  <h2 className="mb-[5%] pr-0 font-['OpenSauceOne-Medium'] text-[32px] font-bold leading-[40px] text-[#1B1C1E] md:pr-[10%] md:text-[46px] md:leading-[56.9px]">
    Parents’ Frequently Asked Questions
  </h2>

  <div className="flex flex-col gap-10 lg:flex-row lg:gap-[50px]">

    <div className="w-full lg:w-[65%]">

      {/* First Accordion Item */}
      <div className="mb-[15px] overflow-hidden rounded-[16px] border border-[#DDDDDD]">
        <button
          onClick={() => setOpenItem(openItem === "0" ? "" : "0")}
          className="flex w-full items-center justify-between bg-[#F9FAFB] px-5 py-4 text-left font-['OpenSauceOne-Medium'] text-[18px] font-medium leading-7 text-[#101828]"
        >
          <span>Do you offer SAT and ACT tutoring?</span>

          <span className="ml-4 text-2xl">
            {openItem === "0" ? "−" : "+"}
          </span>
        </button>

        {openItem === "0" && (
          <div className="bg-[#F9FAFB] px-5 pb-5 font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-6 text-[#667085]">
            Yes, we offer standardized test tutoring in addition to our college consulting services. Students begin the tutoring process by taking SAT and ACT diagnostic exams. Our tutors then assess students’ academic strengths and weaknesses based on diagnostic test results and create personalized learning plans designed to help students reach their standardized testing score goals.
          </div>
        )}
      </div>

      {/* Second Accordion Item */}
      <div className="mb-[15px] overflow-hidden rounded-[16px] border border-[#DDDDDD]">
        <button
          onClick={() => setOpenItem(openItem === "1" ? "" : "1")}
          className="flex w-full items-center justify-between bg-[#F9FAFB] px-5 py-4 text-left font-['OpenSauceOne-Medium'] text-[18px] font-medium leading-7 text-[#101828]"
        >
          <span>What is the admissions consulting process like?</span>

          <span className="ml-4 text-2xl">
            {openItem === "1" ? "−" : "+"}
          </span>
        </button>

        {openItem === "1" && (
          <div className="bg-[#F9FAFB] px-5 pb-5 font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-6 text-[#667085]">
            Our admissions consulting process is tailored to the unique needs of each student. We begin with an initial assessment to understand the student’s academic background, strengths, and interests. Based on this, we develop a personalized strategy that includes selecting appropriate schools, preparing for standardized tests, and crafting standout applications. We guide students through every step, from initial strategy to final submission, ensuring they are well-prepared to meet the specific requirements of international universities.
          </div>
        )}
      </div>

      {/* Third Accordion Item */}
      <div className="mb-[15px] overflow-hidden rounded-[16px] border border-[#DDDDDD]">
        <button
          onClick={() => setOpenItem(openItem === "2" ? "" : "2")}
          className="flex w-full items-center justify-between bg-[#F9FAFB] px-5 py-4 text-left font-['OpenSauceOne-Medium'] text-[18px] font-medium leading-7 text-[#101828]">
          <span>Can you help with finding scholarships?</span>

          <span className="ml-4 text-2xl">
            {openItem === "2" ? "−" : "+"}
          </span>
        </button>

        {openItem === "2" && (
          <div className="bg-[#F9FAFB] px-5 pb-5 font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-6 text-[#667085]">
            Absolutely. We provide detailed guidance on finding and applying for scholarships that are available to our students. Our services include identifying scholarship opportunities that match the student’s profile, assisting with the application process, and offering advice on how to write compelling essays and prepare for interviews, if required. Our goal is to help families minimize the financial burden of international education.
          </div>
        )}
      </div>

      {/* Fourth Accordion Item */}
      <div className="mb-[15px] overflow-hidden rounded-[16px] border border-[#DDDDDD]">
        <button
          onClick={() => setOpenItem(openItem === "3" ? "" : "3")}
          className="flex w-full items-center justify-between bg-[#F9FAFB] px-5 py-4 text-left font-['OpenSauceOne-Medium'] text-[18px] font-medium leading-7 text-[#101828]"
        >
          <span>
            Can you provide examples of passion projects your students have developed?
          </span>

          <span className="ml-4 text-2xl">
            {openItem === "3" ? "−" : "+"}
          </span>
        </button>

        {openItem === "3" && (
          <div className="bg-[#F9FAFB] px-5 pb-5 font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-6 text-[#667085]">
            Certainly! Our students have engaged in a variety of passion projects, such as developing eco-friendly packaging solutions, organizing community health fairs, creating digital art portfolios, and conducting independent research on renewable energy solutions. Each project is chosen to align with the student’s interests and to demonstrate their initiative and impact in their chosen area.
          </div>
        )}
      </div>

      {/* Fifth Accordion Item */}
      <div className="mb-[15px] overflow-hidden rounded-[16px] border border-[#DDDDDD]">
        <button
          onClick={() => setOpenItem(openItem === "4" ? "" : "4")}
          className="flex w-full items-center justify-between bg-[#F9FAFB] px-5 py-4 text-left font-['OpenSauceOne-Medium'] text-[18px] font-medium leading-7 text-[#101828]">
          <span>
            What specific strategies do you use to enhance a student's university application?
          </span>

          <span className="ml-4 text-2xl">
            {openItem === "4" ? "−" : "+"}
          </span>
        </button>

        {openItem === "4" && (
          <div className="bg-[#F9FAFB] px-5 pb-5 font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-6 text-[#667085]">
            We focus on several key areas to strengthen applications, including refining personal statements, optimizing the list of extracurricular activities, and advising on strategic course selection. We also provide mock interviews and help students leverage any unique aspects of their background to create a compelling narrative that stands out to admissions officers.
          </div>
        )}
      </div>

    </div>

    <div className="w-full lg:w-[40%]">
    <img src="/images/Image(1).png" alt="" className="w-full md:w-[70%]"/>

    <img src="/images/Image(2).png" alt="" className="mt-5 w-full md:ml-[130px] md:mt-[-30px] md:w-[70%]"/>

    <img src="/images/Image(3).png" alt="" className="mt-5 w-full md:mt-[-30px] md:w-[70%]"/>
    </div>

  </div>
</section>

<section>
  <Form />
</section>

<section className="mb-[5%] bg-[#F9F9F9] px-[5%] text-center">
  <div className="rounded-[32px] bg-[#2379F4] px-5 py-[10%] md:px-[10%] md:py-[5%]">
    <h1 className="font-['OpenSauceOne-Medium'] text-[30px] font-bold leading-[38px] text-white sm:text-[34px] sm:leading-[43px] md:text-[38px] md:leading-[47.01px]">
      Join our WhatsApp Group!
    </h1>

    <p className="mx-auto px-0 font-['OpenSauceOne-Regular'] text-[15px] font-normal leading-[26px] text-white sm:text-[16px] sm:leading-7 md:px-[9%]">
      Stay up-to-date with the latest university admissions trends, receive exclusive alerts to events and opportunities, and connect with a community of African students aiming to gain admission to the world’s top universities
    </p>

    <button className="group mx-auto mt-6 flex items-center justify-center gap-3 rounded-[40px] bg-white px-6 py-3 font-['OpenSauceOne-Medium'] text-[16px] font-medium text-[#2379F4] transition duration-300 hover:bg-[#F9F9F9]">
      <span>Join Group</span>

      <FiArrowUpRight className="h-7 w-8 rotate-[-10deg] transition-transform duration-300 group-hover:rotate-[45deg]"/>
    </button>
  </div>
</section>



    </section>
  );
};

export default Page;