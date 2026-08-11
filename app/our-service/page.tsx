import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Form from "../components/Form";
import { FiArrowUpRight } from "react-icons/fi";

const page = () => {
  return (
    <div>
    <section className="grid grid-cols-1 items-center gap-8 bg-cover bg-center bg-no-repeat px-[5%] py-[8%] md:gap-10 lg:grid-cols-2 lg:px-[6%] lg:py-[6%]"
    style={{backgroundImage: "url('/images/Our-Service-bk.png')",}}>
    <div>
    <h2 className="font-['OpenSauceOne-Black'] text-[42px] font-bold leading-[52px] text-[#1B1C1E] sm:text-[52px] sm:leading-[65px] md:text-[60px] md:leading-[75px] lg:text-[70px] lg:leading-[90.02px]">
      Our Services
    </h2>
    </div>

    <div>
    <Image
      src="/images/Image(our-s).png"
      alt="University Admissions"
      width={800}
      height={800}
      className="h-auto w-full object-contain"/>
  </div>
</section>

<section className="flex flex-col gap-10 px-[5%] py-12 md:flex-row md:items-center md:gap-12 lg:gap-16">
  
  {/* Left Column - Image */}
  <div className="w-full md:w-1/2">
    <Image
      src="/images/Images.png"
      alt="University Admissions"
      width={522}
      height={537}
    className="h-auto w-full max-w-[522px] object-contain"/> 
  </div>

  {/* Right Column - Content */}
  <div className="w-full md:w-1/2">
    <h2 className="font-['OpenSauceOne-Medium'] text-[30px] font-bold leading-[1.25] text-[#1B1C1E] sm:text-[34px] md:text-[36px] lg:text-[38px]">
      University Admissions Consulting
    </h2>

    <p className="mt-5 font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-8 text-[#474849]">
      Unlock your potential with our bespoke admissions consulting services.
      We offer tailored strategies to enhance your application and increase your
      chances of acceptance to top universities worldwide. Our team of
      experienced consultants will work with you one-on-one to understand your
      unique aspirations and background, helping you to present a compelling
      narrative to admissions committees.
    </p>

    <button className="group mt-6 flex items-center justify-center gap-3 rounded-[40px] bg-[#2379F4] px-6 py-3 font-['OpenSauceOne-Medium'] text-[16px] font-medium text-[#FFFFFF] transition duration-300 hover:bg-[#2379F4]">
      <span>Book a consultant</span>

      <FiArrowUpRight
        className="h-7 w-8 rotate-[-10deg] transition-transform duration-300 group-hover:rotate-[45deg]"/>
    </button>
  </div>
</section>



<section className="flex flex-col gap-[10%] bg-[#F9F9F9] px-[5%] py-12 sm:py-16 md:flex-row md:items-center md:gap-12 md:py-20 lg:gap-16">
  
  {/* Left Column - Content */}
  <div className="w-full md:w-1/2">
    <h2 className="font-['OpenSauceOne-Medium'] text-[30px] font-bold leading-[1.25] text-[#1B1C1E] sm:text-[34px] md:text-[36px] lg:text-[38px]">
      Test Preparation
    </h2>
    <p className="mt-5 font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-8 text-[#474849]">
      Achieve your best scores with our comprehensive test preparation
      programs. We provide courses and materials for the SAT, ACT, TOEFL,
      IELTS, and more, designed to meet or exceed the entry requirements of
      prestigious universities. Our expert instructors use the latest teaching
      methodologies and personalized learning approaches to ensure you grasp
      the material effectively and perform confidently on test day.
    </p>
     <button className="group mt-6 flex items-center justify-center gap-3 rounded-[40px] bg-[#2379F4] px-6 py-3 font-['OpenSauceOne-Medium'] text-[16px] font-medium text-[#FFFFFF] transition duration-300 hover:bg-[#2379F4]">
      <span>Prepare for your test</span>

      <FiArrowUpRight
        className="h-7 w-8 rotate-[-10deg] transition-transform duration-300 group-hover:rotate-[45deg]"/>
    </button>
  </div>

  {/* Right Column - Image */}
  <div className="w-full md:w-1/2">
    <Image
      src="/images/Images2.png"
      alt="Test Preparation"
      width={522}
      height={537}
      className="h-auto w-full object-contain"
    />
  </div>

</section>

<section className="flex flex-col gap-10 px-[5%] py-12 md:flex-row md:items-center md:gap-12 lg:gap-16">
  
  {/* Left Column - Image */}
  <div className="w-full md:w-1/2">
    <Image
      src="/images/Passionimg.png"
      alt="University Admissions"
      width={598}
      height={710}
      className="h-auto w-full object-contain"/>
  </div>

  {/* Right Column - Content */}
  <div className="w-full md:w-1/2">
    <h2 className="font-['OpenSauceOne-Medium'] text-[30px] font-bold leading-[1.25] text-[#1B1C1E] sm:text-[34px] md:text-[36px] lg:text-[38px]">
      Passion Project Development
    </h2>

    <p className="mt-5 font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-8 text-[#474849]">
     Cultivate your interests into impactful projects. Our Passion Project Development service is 
     designed to help students from Year 9 onwards transform their interests and hobbies into structured, 
     impactful projects that demonstrate initiative, creativity, and dedication.
    </p>

    <p className="mt-5 font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-8 text-[#474849]">
     Whether it's a community service project, a technological innovation, an artistic endeavor, or a research study, we guide you through the process of ideating, planning, and executing a project that aligns with your passions and enhances your academic profile.
    </p>

     <p className="mt-5 font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-8 text-[#474849]">
     These projects not only enrich your personal growth but also strengthen your university applications by showcasing your commitment to your interests and your ability to achieve meaningful results.
    </p>

    

    <button className="group mt-6 flex items-center justify-center gap-3 rounded-[40px] bg-[#2379F4] px-6 py-3 font-['OpenSauceOne-Medium'] text-[16px] font-medium text-[#FFFFFF] transition duration-300 hover:bg-[#2379F4]">
      <span>Develop your project</span>

      <FiArrowUpRight
        className="h-7 w-8 rotate-[-10deg] transition-transform duration-300 group-hover:rotate-[45deg]"
      />
    </button>
  </div>

</section>

<section className="flex flex-col gap-[10%] bg-[#FFFFFF] px-[5%] py-12 sm:py-16 md:flex-row md:items-center md:gap-12 md:py-20 lg:gap-16">
  
  {/* Left Column - Content */}
  <div className="w-full md:w-1/2">
    <h2 className="font-['OpenSauceOne-Medium'] text-[30px] font-bold leading-[1.25] text-[#1B1C1E] sm:text-[34px] md:text-[36px] lg:text-[38px]">
   Portfolio Building
    </h2>

    <p className="mt-5 font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-8 text-[#474849]">
      Starting as early as Year 9 allows for thoughtful development and refinement of your portfolio, 
      ensuring that it stands out to admissions committees 
      by demonstrating not only proficiency but also 
      innovation and depth in your field of choice.
    </p>

     <button className="group mt-6 mb-[5%] flex items-center justify-center gap-3 rounded-[40px] bg-[#2379F4] px-6 py-3 font-['OpenSauceOne-Medium'] text-[16px] font-medium text-[#FFFFFF] transition duration-300 hover:bg-[#2379F4]">
      <span>Build your portfolio now</span>

      <FiArrowUpRight
        className="h-7 w-8 rotate-[-10deg] transition-transform duration-300 group-hover:rotate-[45deg]"
      />
    </button>
  </div>

  {/* Right Column - Image */}
  <div className="w-full md:w-1/2">
    <Image
      src="/images/Strategypln.png"
      alt="Test Preparation"
      width={441}
      height={532}
      className="h-auto w-full max-w-[441px] object-contain"
    />
  </div>

</section>

<section className="flex flex-col gap-10 bg-[#FFFAF4] px-[5%] py-12 sm:py-16 md:flex-row md:items-center md:gap-12 md:py-20 lg:gap-16">
  
  {/* Left Column - Image */}
  <div className="flex w-full justify-center md:w-1/2 md:justify-start">
    <Image
      src="/images/Essay-Writting.png"
      alt="Essay Writing Development"
      width={495}
      height={406}
      className="h-auto w-full max-w-[495px] object-contain"
    />
  </div>

  {/* Right Column - Content */}
  <div className="w-full md:w-1/2">
    <h2 className="font-['OpenSauceOne-Medium'] text-[30px] font-bold leading-[1.25] text-[#1B1C1E] sm:text-[34px] md:text-[36px] lg:text-[38px]">
      Essay Writing Development
    </h2>

    <p className="mt-5 font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-8 text-[#474849]">
      Stand out with stellar essays. In our expert-led workshops, you’ll master
      the art of writing personal statements and application essays that
      resonate with admissions officers. From structuring your narrative to
      polishing your final draft, our workshops cover all aspects of essay
      writing, providing you with the tools to express your unique voice and
      story compellingly.
    </p>

    <button className="group mt-6 flex items-center justify-center gap-3 rounded-[40px] bg-[#2379F4] px-6 py-3 font-['OpenSauceOne-Medium'] text-[16px] font-medium text-white transition duration-300 hover:bg-[#2379F4]">
      <span>Build your portfolio now</span>

      <FiArrowUpRight className="h-7 w-8 rotate-[-10deg] transition-transform duration-300 group-hover:rotate-[45deg]"/>
    </button>
  </div>

</section>


<section className="flex flex-col gap-10 bg-[#FFFFFF] px-[5%] py-12 sm:py-16 md:flex-row md:items-center md:gap-12 md:py-20 lg:gap-16">
  
  {/* Left Column - Image */}
  <div className="flex w-full justify-center md:w-1/2 md:justify-start">
    <Image
      src="/images/Scholarship.png"
      alt="Scholarship Application Support"
      width={522}
      height={537.64}
      className="h-auto w-full max-w-[522px] object-contain"
    />
  </div>

  {/* Right Column - Content */}
  <div className="w-full md:w-1/2">
    <h2 className="font-['OpenSauceOne-Medium'] text-[30px] font-bold leading-[1.25] text-[#1B1C1E] sm:text-[34px] md:text-[36px] lg:text-[38px]">
      Scholarship Application Support
    </h2>

    <p className="mt-5 font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-8 text-[#474849]">
   Minimize your educational expenses with our scholarship application support. Our advisors provide detailed guidance on finding and applying for
   scholarships that can significantly reduce your financial burdens. We help you identify opportunities, tailor your applications, 
   and craft essays that highlight your qualifications and fit with the scholarship's goals, maximizing your chances of award success.
    </p>

    <button className="group mt-6 flex items-center justify-center gap-3 rounded-[40px] bg-[#2379F4] px-6 py-3 font-['OpenSauceOne-Medium'] text-[16px] font-medium text-[#FFFFFF] transition duration-300 hover:bg-[#2379F4]">
      <span>Build your portfolio now</span>

      <FiArrowUpRight className="h-7 w-8 rotate-[-10deg] transition-transform duration-300 group-hover:rotate-[45deg]"/>
    </button>
  </div>

</section>

<section className="flex flex-col gap-[10%] bg-[#F9F9F9] px-[5%] py-12 sm:py-16 md:flex-row md:items-center md:gap-12 md:py-20 lg:gap-16">
  
  {/* Left Column - Content */}
  <div className="w-full md:w-1/2">
    <h2 className="font-['OpenSauceOne-Medium'] text-[30px] font-bold leading-[1.25] text-[#1B1C1E] sm:text-[34px] md:text-[36px] lg:text-[38px]">
     Academic Support
    </h2>

    <p className="mt-5 font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-8 text-[#474849]">
      In addition to boosting student performance on the (Digital) SAT, ACT, and AP/IB exams, 
      our academic tutors offer advice on strategic course selection. This guidance ensures that students fulfill the primary admission criterion for top colleges: academic excellence
    </p>

     <button className="group mt-6 mb-[5%] flex items-center justify-center gap-3 rounded-[40px] bg-[#2379F4] px-6 py-3 font-['OpenSauceOne-Medium'] text-[16px] font-medium text-[#FFFFFF] transition duration-300 hover:bg-[#2379F4]">
      <span>Get academic support now</span>

      <FiArrowUpRight
      className="h-7 w-8 rotate-[-10deg] transition-transform duration-300 group-hover:rotate-[45deg]"/>
    </button>
  </div>

  {/* Right Column - Image */}
  <div className="w-full md:w-1/2">
    <Image
      src="/images/Academic.png"
      alt="Test Preparation"
      width={536}
      height={380}
      className="h-auto w-full max-w-[536px] object-contain"/>
  </div>

</section>

<section className="flex flex-col gap-10 bg-[#FFFAF4] px-[5%] py-12 sm:py-16 md:flex-row md:items-center md:gap-12 md:py-20 lg:gap-16">
  
  {/* Left Column - Image */}
  <div className="flex w-full justify-center md:w-1/2 md:justify-start">
    <Image
      src="/images/Academic.png"
      alt="Internship Sourcing"
      width={536}
      height={380}
      className="h-auto w-full max-w-[536px] object-contain"
    />
  </div>

  {/* Right Column - Content */}
  <div className="w-full md:w-1/2">
    <h2 className="font-['OpenSauceOne-Medium'] text-[30px] font-bold leading-[1.25] text-[#1B1C1E] sm:text-[34px] md:text-[36px] lg:text-[38px]">
     Internship Sourcing
    </h2>

    <p className="mt-5 font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-8 text-[#474849]">
     At College Au Pier, we understand that the path to a successful college application begins with gaining invaluable real-world experience. 
     That's why we offer comprehensive internship sourcing services tailored to help students secure the opportunities they need to thrive.
    </p>

    <p className="mt-5 font-['OpenSauceOne-Regular'] text-[16px] font-normal leading-8 text-[#474849]">
     Our team of experienced professionals works tirelessly to connect aspiring talents with top-tier internship positions across a wide range of industries. 
     Whether you're seeking hands-on experience in finance, tech, marketing, or beyond, we've got you covered.
    </p>

    <button className="group mt-6 flex items-center justify-center gap-3 rounded-[40px] bg-[#2379F4] px-6 py-3 font-['OpenSauceOne-Medium'] text-[16px] font-medium text-white transition duration-300 hover:bg-[#2379F4]">
      <span>Get Intern positions</span>

      <FiArrowUpRight className="h-7 w-8 rotate-[-10deg] transition-transform duration-300 group-hover:rotate-[45deg]"/>
    </button>
  </div>

</section>

<section>
  <Form />
</section>

    </div>
  )
}

export default page