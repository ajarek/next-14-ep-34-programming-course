import React from 'react'
import {ModeToggle} from "@/components/ModeToggle"
import SearchCourse from "@/components/SearchCourse"
import Image from "next/image"
const Header = () => {
  return (
    <>
    <div className=' min-w-[calc(100vw-256px)] h-[73px] absolute top-0 left-[256px] bg-secondary flex justify-between items-center gap-4 px-4' >
      <SearchCourse />
    <ModeToggle  />
    </div>
    <div className='w-[256px] min-h-screen flex items-start gap-2 absolute top-0 left-0  p-4 border-r-2 bg-secondary'>
    <Image
      src="/images/Logo.png"
      alt="Next.js Logo"
      width={70}
      height={70}
     />
     <h1 className='font-bold'>Online <br /> Programming <br /> Courses</h1>
    </div>
    </>
  )
}

export default Header