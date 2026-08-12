import Link from "next/link";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[100px]">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="College Au Pier Logo"
              width={85}
              height={73}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">

            <Link
              href="/"
              className="text-[14px] font-medium text-[#1E1E1E]">
              Home
            </Link>

            <Link
              href="/our-service"
              className="text-[14px] font-medium text-[#1E1E1E]">
              Our Services
            </Link>

            {/* About Us Dropdown */}
            <div className="relative group">

              <button
                className="
                  flex
                  items-center
                  gap-1
                  text-[14px]
                  font-medium
                  text-[#1E1E1E]">
                About Us
                <FaAngleDown
                  size={20}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-180"/>
              </button>

              <div
                className="
                  absolute
                  top-full
                  left-0
                  mt-4
                  w-[230px]
                  bg-white
                  rounded-[8px]
                  shadow-xl
                  opacity-0
                  invisible
                  group-hover:opacity-100
                  group-hover:visible
                  transition-all
                  duration-300">

                <Link href="/who-we-are" className=" flex items-center gap-5 p-4
                    hover:bg-[#2379F4]
                    hover:text-white
                    rounded-t-[8px]
                    transition">
                  <Image
                    src="/images/Group.png"
                    alt="Who We Are"
                    width={30}
                    height={30}/>
                  <span>Who We Are</span>
                </Link>

                <Link
                  href="/aboutus/success-stories"
                  className="
                    flex items-center gap-5
                    p-4
                    hover:bg-[#2379F4]
                    hover:text-white
                    transition">
                  <Image
                    src="/images/fairytale_6358301 1.png"
                    alt="Success Stories"
                    width={30}
                    height={30}
                  />
                  <span>Success Stories</span>
                </Link>

                <Link
                  href="/aboutus/careers"
                  className="
                    flex items-center gap-5
                    p-4
                    hover:bg-[#2379F4]
                    hover:text-white
                    rounded-b-[8px]
                    transition">
                  <Image
                    src="/images/Group2.png"
                    alt="Careers"
                    width={30}
                    height={30}/>
                  <span>Careers</span>
                </Link>
              </div>
            </div>

            <Link
              href="/resources"
              className="text-[14px] font-medium text-[#1E1E1E]">
              Resources
            </Link>

            <Link
              href="/contact"
              className="text-[14px] font-medium text-[#1E1E1E]">
              Contact Us
            </Link>

          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="
                bg-[#2379F4]
                text-white
                px-6
                py-[10px]
                rounded-[40px]
                text-[14px]
                font-medium
                hover:bg-blue-600
                transition
              ">
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button className="lg:hidden text-[#1E1E1E]">
            ☰
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;