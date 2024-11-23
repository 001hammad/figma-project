import { Heebo } from "next/font/google";
import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const heebo = Heebo({ subsets: ["latin"] });
const interFont = Inter({ subsets: ["latin"] });

const Hero = () => {
  const navItems = [
    {
      name: "Works",
      link: "#",
    },
    {
      name: "Blog",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    },
  ];

  return (
    <div className=" w-full min-h-screen flex flex-col justify-start">
      {/* Navbar */}
      <div className="w-full">
        <ul
          className={`${interFont.className} font-medium text-[20px] space-x-7 flex items-center justify-end h-[120px] md:h-[90px] px-[94px] md:px-[50px]`}
        >
          {navItems.map((item, i) => (
            <li key={i}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Hero Section */}
      <div className="flex-grow my-[66px] md:w-[1030px] mx-auto flex md:flex-row flex-col-reverse items-center justify-between p-6">
        <div className="w-[95%] md:w-[521px] h-[305px] flex flex-col md:justify-between items-start justify-evenly">
          <h1
            className={`${heebo.className} text-[27px] md:text-[48px] font-black text-myblack`}
          >
            Hi, I am John, <br /> Creative Technologist
          </h1>
          <p
            className={`${heebo.className} text-myblack font-normal text-[16px]`}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button
            className={`${heebo.className} text-[18px] font-medium w-[205px] h-[50px] bg-mypink text-white rounded-sm shadow-md shadow-black/55`}
          >
            Download Resume
          </button>
        </div>
        <div className="w-[292px] h-[299px] relative">
          <Image
            src={"/assets/hero-image.png"}
            alt="hero-image"
            width={292}
            height={299}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
