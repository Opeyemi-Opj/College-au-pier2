import React from "react";
import Image from "next/image";

const Form = () => {
  return (
    <section className="mt-[5%] mb-[5%] flex flex-col overflow-hidden md:flex-row">

      {/* First Column - Image */}
      <div className="flex w-full items-start justify-center md:w-1/2 md:justify-start">
        <Image
          src="/images/books-graduation.png"
          alt="Students on an education journey"
          width={705}
          height={928}
          className="h-auto w-full max-w-[705px] object-contain"/>
      </div>

      {/* Second Column - Content */}
      <div className="w-full px-[5%] pt-[5%] pb-[5%] md:w-1/2 md:pl-[3%] md:pr-[5%]">

        <h2 className="font-['OpenSauceOne-Black'] text-[28px] font-bold leading-[1.25] text-[#1B1C1E] sm:text-[32px] md:text-[36px]">
          Are you ready for your education journey?
        </h2>

        <form action="" className="mt-8">
          {/* Form fields go here */}
        </form>

      </div>

    </section>
  );
};

export default Form;