import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="font-[var(--font-open-sauce)] bg-[#1B1C1E] px-[5%] py-16">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div>
           <Link href="/">
          <Image
          src="/images/logo.png"
          alt="College Au Pier Logo"
          width={100}
          height={60}
          className="rounded-[16px]"
          />
          </Link>

            <p className="text-[16px] leading-[24px] text-[#E4E7EC] max-w-[500px] mt-6">
              Africa’s top consulting services for all your education needs.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[14px] leading-[20px] text-[#98A2B3] font-semibold mb-[14px]">
              Services
            </h3>

            <div className="space-y-4">
              <p className="text-[16px] leading-[24px] text-[#E4E7EC]">
                Internship Support
              </p>

              <p className="text-[16px] leading-[24px] text-[#E4E7EC]">
                Essay Writing
              </p>

              <p className="text-[16px] leading-[24px] text-[#E4E7EC]">
                Visa Guidance
              </p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[14px] leading-[20px] text-[#98A2B3] font-semibold mb-[14px]">
              Company
            </h3>

            <div className="space-y-4">
              <p className="text-[16px] leading-[24px] text-[#E4E7EC]">
                About Us
              </p>

              <p className="text-[16px] leading-[24px] text-[#E4E7EC]">
                Webinars
              </p>

              <p className="text-[16px] leading-[24px] text-[#E4E7EC]">
                Blogs
                </p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[14px] leading-[20px] text-[#98A2B3] font-semibold mb-[14px]">
              Legal
            </h3>

            <div className="space-y-4">
              <p className="text-[16px] leading-[24px] text-[#E4E7EC]">
                Terms
                </p>

              <p className="text-[16px] leading-[24px] text-[#E4E7EC]">
                Privacy
              </p>

              <p className="text-[16px] leading-[24px] text-[#E4E7EC]">
                Cookies
              </p>

              <p className="text-[16px] leading-[24px] text-[#E4E7EC]">
                Powered by
              </p>

            <Link
            href="https://www.educare.school/"
            target="_blank"
            rel="noopener noreferrer">
            <Image
            src="/images/Educare-Logo.png"
            alt="Educare Logo"
            width={110}
            height={50}/>
            </Link>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#475467] my-10"></div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Side */}
          <p className="text-[16px] leading-[24px] text-[#E4E7EC]">
            © 2026 College Au Pier. All rights reserved.
          </p>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#344054] flex items-center justify-center text-white hover:bg-[#475467] transition" >
              <FaFacebookF size={18} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#344054] flex items-center justify-center text-white hover:bg-[#475467] transition" >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#344054] flex items-center justify-center text-white hover:bg-[#475467] transition" >
              <FaXTwitter size={18} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#344054] flex items-center justify-center text-white hover:bg-[#475467] transition" >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#344054] flex items-center justify-center text-white hover:bg-[#475467] transition" >
              <FaYoutube size={18} />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
