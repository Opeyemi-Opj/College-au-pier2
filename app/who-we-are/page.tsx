import React from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
const Page = () => {
  return (
    <main>
  <section className="flex w-full flex-col items-center justify-center py-[5%]">

  {/* Heading */}
  <h2 className="text-center font-['OpenSauceOne-Black'] text-[40px] font-extrabold leading-[1.2] text-[#1B1C1E] sm:text-[50px] md:text-[60px] lg:text-[70px] lg:leading-[20px]">
    About us
  </h2>
  {/* Full-width Hero Image */}
  <div className="mt-8 w-full sm:mt-10 md:mt-12">
    <Image
      src="/images/Imagaes.png"
      alt="About us"
      width={1920}
      height={1080}
      className="h-auto w-full object-contain"/>
  </div>

</section>

<section className="mx-[5%] bg-[#FFFFFF]">
  <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">

    {/* Text Content */}
    <div className="w-full">
      
      {/* Mission */}
      <div>
        <h2 className="font-['OpenSauceOne-Medium'] text-[30px] font-bold leading-[1.25] text-black sm:text-[34px] lg:text-[38px] lg:leading-[47px]">
          Our Mission
        </h2>

        <p className="mt-4 font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-[1.8] text-black sm:text-[17px] lg:text-[18px] lg:leading-8">
          To empower African students to achieve their dreams of gaining admission into
          top universities globally by providing them with individualized expert
          educational advice that considers their unique strengths, interests, and
          aspirations.
        </p>
      </div>

      {/* Vision */}
      <div className="mt-10 sm:mt-12">
        <h2 className="font-['OpenSauceOne-Medium'] text-[30px] font-bold leading-[1.25] text-black sm:text-[34px] lg:text-[38px] lg:leading-[47px]">
          Our Vision
        </h2>

        <p className="mt-4 font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-[1.8] text-black sm:text-[17px] lg:text-[18px] lg:leading-8">
          We envision a future where African students are well-represented in the Ivy
          League and other top-tier universities globally, and where they can leverage
          their education to make a positive impact in their communities and beyond.
        </p>
      </div>

    </div>

    {/* Image */}
    <div className="flex w-full justify-center md:justify-end">
      <Image src="/images/our-mission.png"
        alt="Our mission"
        width={522}
        height={537.64}
        className="h-auto w-full max-w-[522px] object-contain" />
    </div>

  </div>
</section>

<section className="w-full bg-[#F9F9F9] px-[5%] py-[10%] md:py-[8%]">
  <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">

    {/* Left Column */}
   <div className="flex w-full flex-col items-center justify-center text-center">
  <h2 className="font-['OpenSauceOne-Medium'] text-[30px] font-bold leading-[1.25] text-black sm:text-[34px] md:text-[38px] md:leading-[47px]">
    Our Story
  </h2>

  <p className="mt-5 max-w-[600px] font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-[1.8] text-black sm:text-[17px] md:text-[18px] md:leading-8">
    Achieve your best scores with our comprehensive test preparation programs.
    We provide courses and materials for the SAT, ACT, TOEFL, IELTS, and more,
    designed to meet
  </p>
</div>

    {/* Right Column - Video */}
    <div className="flex w-full items-center justify-center">
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
        {/* Video goes here */}
        <div className="flex h-full items-center justify-center">
          <span className="text-gray-500">Video here</span>
        </div>
      </div>
    </div>

  </div>
</section>

<section className="relative flex min-h-[600px] w-full items-center justify-center bg-cover bg-center bg-no-repeat px-[5%] py-20 sm:min-h-[650px] md:min-h-[700px]"
  style={{ backgroundImage: "url('/images/high-angle-view-buildings-city 1(1).png')",}}>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 flex w-full max-w-[1100px] flex-col items-center justify-center text-center">
    
    <h2 className="font-['OpenSauceOne-Black'] text-[26px] font-semibold italic leading-[1.4] text-white sm:text-[32px] md:text-[38px] md:leading-[53px]">
      Did you know that the black student enrollment for most of the Ivy League
      universities ranges between 7-8%? This is inclusive of all those who
      identify as black Americans, blacks and Africans.
    </h2>

    <p className="mt-6 max-w-[850px] font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-[1.8] text-white sm:text-[17px] md:text-[18px] md:leading-8">
      We are driven by the belief that we can increase African representation
      at Top Universities globally. We are dedicated to using our skills and
      experience to make a difference.
    </p>
  </div>
</section>

<section className="bg-cover bg-center bg-no-repeat px-[5%] py-[10%]"
  style={{ backgroundImage: "url('/images/promise.png')",}}>
  <div className="mx-auto max-w-[1200px]">

    <p className=" font-['OpenSauceOne-Medium'] text-[18px]
        font-medium
        leading-[28px]
        text-[#FFFFFF]
        sm:text-[20px]
        sm:leading-[32px]">
      Promise Statement
    </p>

    <h2 className="mt-4 font-['OpenSauceOne-Medium']
        text-[28px]
        font-extrabold
        leading-[38px]
        text-white
        sm:text-[34px]
        sm:leading-[46px]
        lg:text-[38px]
        lg:leading-[53px]">
      We are committed to increasing a student’s chance of admission to any
      university of their choice by 100%
    </h2>
  </div>
</section>

<section className="w-full bg-[#FFFAF4] px-5 py-16 sm:px-8 md:px-12 lg:px-16">
  
  {/* Heading Section */}
  <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
    
    <p className="font-['OpenSauceOne-Regular'] text-[15px] font-semibold text-[#2379F4]">
      Our values
    </p>

    <h2 className="mt-3 font-['OpenSauceOne-Regular'] text-[28px] font-semibold leading-[38px] text-[#101828] sm:text-[32px] sm:leading-[42px] md:text-[36px] md:leading-[44px]">
      College Au Pier Value System: Empowering Dreams, Enriching Futures
    </h2>

    <p className="mt-4 max-w-2xl font-['OpenSauceOne-Regular'] text-[17px] font-normal leading-7 text-[#667085] sm:text-[18px] sm:leading-8 md:text-[20px] md:leading-9">
      Our shared values keep us connected and guide us as one team.
    </p>

  </div>
{/* Values */}
<div className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 gap-x-8 gap-y-12 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14">

  {/* Value 1 */}
  <div className="flex flex-col items-center text-center">
    <Image
      src="/images/Featuredicon.png"
      alt="Expertise and Experience"
      width={48}
      height={48}
      className="h-12 w-12 object-contain"/>

    <h2 className="mt-5 text-center font-['OpenSauceOne-Regular'] text-[20px] font-medium leading-[30px] text-[#101828]">
      Expertise and Experience
    </h2>

    <p className="mt-3 max-w-[360px] text-center font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-[24px] text-[#667085]">
      Our team comprises seasoned educators, industry professionals, and academic
      mentors with years of experience in helping students excel. Their in-depth
      knowledge and hands-on approach ensure you receive the best guidance possible.
    </p>
  </div>


  {/* Value 2 */}
  <div className="flex flex-col items-center text-center">
    <Image
      src="/images/Featuredicon2.png"
      alt=" Personalized Attention"
      width={48}
      height={48}
      className="h-12 w-12 object-contain"/>

    <h2 className="mt-5 text-center font-['OpenSauceOne-Regular'] text-[20px] font-medium leading-[30px] text-[#101828]">
      Personalized Attention
    </h2>

    <p className="mt-3 max-w-[360px] text-center font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-[24px] text-[#667085]">
   We believe in the power of individual attention. Our consultants take the time to understand your 
   unique strengths, challenges, and goals, providing customized support that truly makes a difference.
    </p>
  </div>


  {/* Value 3 */}
  <div className="flex flex-col items-center text-center">
    <Image
      src="/images/Featuredicon3.png"
      alt="Diverse Backgrounds"
      width={48}
      height={48}
      className="h-12 w-12 object-contain"/>

    <h2 className="mt-5 text-center font-['OpenSauceOne-Regular'] text-[20px] font-medium leading-[30px] text-[#101828]">
      Diverse Backgrounds
    </h2>

    <p className="mt-3 max-w-[360px] text-center font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-[24px] text-[#667085]">
      Our team members come from diverse educational backgrounds and specialties, 
      bringing a wealth of perspectives and insights to address a wide range of academic needs.
    </p>
  </div>


  {/* Value 4 */}
  <div className="flex flex-col items-center text-center">
    <Image
      src="/images/Featuredicon4.png"
      alt=" Commitment to Excellence"
      width={48}
      height={48}
      className="h-12 w-12 object-contain"/>

    <h2 className="mt-5 text-center font-['OpenSauceOne-Regular'] text-[20px] font-medium leading-[30px] text-[#101828]">
      Commitment to Excellence
    </h2>

    <p className="mt-3 max-w-[360px] text-center font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-[24px] text-[#667085]">
     Our team is dedicated to your success. We go above and beyond to ensure that you have the tools, 
     resources, and confidence needed to achieve your academic goals.
    </p>
  </div>


  {/* Value 5 */}
  <div className="flex flex-col items-center text-center">
    <Image
      src="/images/Featuredicon5.png"
      alt="Innovative Approach"
      width={48}
      height={48}
      className="h-12 w-12 object-contain"/>

    <h2 className="mt-5 text-center font-['OpenSauceOne-Regular'] text-[20px] font-medium leading-[30px] text-[#101828]">
      Innovative Approach
    </h2>

    <p className="mt-3 max-w-[360px] text-center font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-[24px] text-[#667085]">
     Staying ahead of educational trends, our team continuously updates their strategies and 
     tools to provide the most current and effective support.
    </p>
  </div>


  {/* Value 6 */}
  <div className="flex flex-col items-center text-center">
    <Image
      src="/images/Featuredicon6.png"
      alt="Proven Track Record"
      width={48}
      height={48}
      className="h-12 w-12 object-contain"/>

    <h2 className="mt-5 text-center font-['OpenSauceOne-Regular'] text-[20px] font-medium leading-[30px] text-[#101828]">
      Proven Track Record
    </h2>

    <p className="mt-3 max-w-[360px] text-center font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-[24px] text-[#667085]">
     Our consultants have helped countless students gain admissions to top universities, 
     achieve high test scores, and build impressive portfolios. 
     Your success story could be next!
    </p>
  </div>
</div>
</section>

<section className="flex w-full flex-col items-center gap-10 bg-white px-6 py-12 sm:px-8 md:px-12 lg:flex-row lg:gap-16 lg:px-[5%] lg:py-16">

  {/* Left Content */}
  <div className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">

    <h2 className="font-['OpenSauceOne-Medium'] text-[30px] font-semibold leading-[38px] text-[#1B1C1E] sm:text-[34px] sm:leading-[43px] lg:text-[38px] lg:leading-[47.01px]">
      Join Our Team
    </h2>

    <p className="mt-4 max-w-[550px] font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-7 text-[#474849] sm:text-[17px] sm:leading-8 lg:text-[18px] lg:leading-[32px]">
      Join the global team of professionals working to help
      students make the most on their education journey.
    </p>

    <button className="group mt-6 flex items-center justify-center gap-3 rounded-[40px] bg-[#2379F4] px-6 py-3 font-['OpenSauceOne-Medium'] text-[16px] font-medium text-white transition duration-300 hover:bg-[#2379F4]">
      <span>Join the Team</span>

      <FiArrowUpRight className="h-7 w-8 rotate-[-10deg] transition-transform duration-300 group-hover:rotate-[45deg]"/>
    </button>

  </div>


  {/* Right Image */}
  <div className="relative h-[280px] w-full overflow-hidden rounded-2xl sm:h-[350px] lg:h-[420px] lg:w-1/2">

    <Image
      src="/images/join-out-timg.png"
      alt="Students"
      fill
      className="object-cover"
      sizes="(max-width: 806px) 100vw, 50vw"/>

  </div>

</section>

    </main>
  );
};

export default Page;