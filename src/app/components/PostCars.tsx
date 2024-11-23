import React from 'react';
import { Heebo } from 'next/font/google';


const heebo = Heebo({ subsets: ["latin"] });

const Card = () => {
  return (
    <div>
      <div className="w-[350px] md:w-[483px] h-[356px]  bg-white">
        <div className="m-auto  md:w-[391px] mt-5">
          <h2 className={`${heebo.className} font-bold  text-[26px] p-4 `}>
            Making a design system from scratch
          </h2>
        </div>

        <div className="w-[301.28px] h-[42.12px] flex items-center justify-between ml-7 sm:ml-16 my-6">
          <p
            className={`${heebo.className} text-[14px] md:text-[18px] font-normal text-black/70`}
          >
            12-Feb-2020
          </p>
          <p
            className={`${heebo.className} text-[14px] md:text-[18px] font-normal text-black/70`}
          >
            |
          </p>
          <p
            className={`${heebo.className} text-[14px] md:text-[18px] font-normal text-black/70`}
          >
            Design, Pattern
          </p>
        </div>
        <p className="sm:ml-16 sm:w-[70%] w-[68%] md:ml-16 ml-6">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  )
}

export default Card
