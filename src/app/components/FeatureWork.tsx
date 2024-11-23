import React from "react";
import Image from "next/image";
import { Heebo } from "next/font/google";

const heebo = Heebo({subsets:["latin"]})

const FeatureWork = () => {
  return (
    <div>
      <div className="md:ml-[20%] font-medium sm:my-9 my-5 sm:ml-0 ml-11">
        <h2 className={`${heebo.className} text-[22px]`}>Feature works</h2>
      </div>
      <div className="flex flex-col md:flex-row space-x-9 justify-center">
    
        <Image
          src="/assets/pic1.png"
          alt="pic1"
          width={246}
          height={180}
          className="md:mb-[6%] md:ml-0 ml-11 "
        />
        <div className=" h-[272.1px]">
        <h2 className={`${heebo.className} text-[30px] font-[700] md:w-[304px] h-[44px] md:ml-0 ml-3 `}>Designing Dashboards</h2>
        <div className="flex gap-4 items-center">
          <p className="bg-mypink text-white rounded-[50px] h-7 p-1 w-16 text-center md:ml-0 ml-3 my-3">2020</p>
          <p className={`${heebo.className} md:w-[97px] h-[29px] text-[20px] `}>Dashboard</p>
        </div>
        <p className={`${heebo.className} text-[18px] w-[300px] font-light md:w-[622px] h-[170px] my-1 md:ml-0 ml-3`}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
        </div>
      <div className="flex flex-col md:flex-row space-x-9 justify-center">
    
        <Image
          src="/assets/pic3.png"
          alt="pic1"
          width={246}
          height={180}
          className="md:mb-[6%] md:ml-0 ml-11"
        />
        <div className="md:w-[623.46px] h-[272.1px]">
        <h2 className={`${heebo.className} text-[30px] font-[700] w-[304px] h-[44px] md:ml-0 ml-3`}>Designing Dashboards</h2>
        <div className="flex gap-4 items-center">
          <p className="bg-mypink text-white rounded-[50px] h-7 p-1 w-16 text-center md:ml-0 ml-3 my-3">2020</p>
          <p className={`${heebo.className} w-[97px] h-[29px] text-[20px]`}>Dashboard</p>
        </div>
        <p className={`${heebo.className} text-[18px] w-[300px] md:w-[622px] h-[170px] md:ml-0 ml-3 my-3 font-light`}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
        </div>
      <div className="flex flex-col md:flex-row space-x-9 justify-center">
    
        <Image
          src="/assets/pic2.png"
          alt="pic1"
          width={246}
          height={180}
          className="md:mb-[6%] md:ml-0 ml-11"
        />
        <div className="md:w-[623.46px] h-[272.1px]">
        <h2 className={`${heebo.className} text-[30px] font-[700] w-[304px] h-[44px] md:ml-0 ml-3`}>Designing Dashboards</h2>
        <div className="flex gap-4 items-center">
          <p className="bg-mypink text-white rounded-[50px] h-7 p-1 w-16 text-center md:ml-0 ml-3 my-3">2020</p>
          <p className={`${heebo.className} w-[97px] h-[29px] text-[20px]`}>Dashboard</p>
        </div>
        <p className={`${heebo.className} text-[18px] md:ml-0 ml-3 w-[300px] my-3 md:w-[622px] h-[170px] font-light`}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
        </div>
      
    </div>
  );
};

export default FeatureWork;
