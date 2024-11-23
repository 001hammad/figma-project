import { Heebo } from "next/font/google";
import Link from "next/link";
import React from "react";
import Card from "./PostCars";
const heebo = Heebo({ subsets: ["latin"] });

const PostSection = () => {
  return (
    <div className="bg-recentbg py-[66px]">
      {/* Header Section */}
      <div className=" w-[92%] md:w-[1040px] mx-auto p-6 flex justify-between items-center">
        <h2 className={`${heebo.className} text-lg md:text-[22px] font-medium`}>
          Recent Post
        </h2>
        <Link
          href={""}
          className={`${heebo.className} text-lg md:text-[22px] font-medium text-mypink`}
        >
          View all
        </Link>
      </div>

      {/* Cards Section */}
      <div className="md:w-[1040px] mx-auto  flex flex-wrap gap-6 justify-center">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default PostSection;
