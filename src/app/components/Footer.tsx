import { Heebo } from 'next/font/google'
import Link from 'next/link';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const heeboFont = Heebo({subsets:["latin"]})
const Footer = () => {
  return (
    <div className='bg-footerbg flex flex-col items-center gap-5 justify-center h-[300px] md:h-[243px]'>
      <div className='flex space-x-7'>
        <Link href={''}><FaFacebookSquare className='h-[30px] w-[30px]' /> </Link>
        <Link href={''}><FaInstagram  className='h-[30px] w-[30px]'/></Link>
        <Link href={''}><FaTwitter  className='h-[30px] w-[30px]'/></Link>
        <Link href={''}><FaLinkedin  className='h-[30px] w-[30px]'/></Link>
      </div>
      <p className={`${heeboFont.className} space-x-7 text-[22px] font-medium text-center`}>Copyright ©2020 All rights reserved</p>
    </div>
  )
}

export default Footer
