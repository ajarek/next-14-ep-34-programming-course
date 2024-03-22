import React from 'react'
import { ModeToggle } from '@/components/ModeToggle'
import SearchCourse from '@/components/SearchCourse'
import Image from 'next/image'
import Link from 'next/link'
import { auth } from '@/app/api/auth/auth'
import Logout from './Logout'

const Header = async () => {
  const session = await auth()
  return (
    <>
      <div className=' min-w-[calc(100vw-272px)] h-[73px] absolute top-0 left-[256px] max-lg:left-0 max-lg:w-full bg-secondary flex justify-between items-center gap-4 px-4'>
        <SearchCourse defaultValue={null} />
        <Logout session={session} />
        <ModeToggle />
      </div>
      <div className='min-h-screen flex flex-col w-[256px]   gap-6 absolute top-0 left-0 max-lg:left-[-256px]  p-4 border-r-2  bg-secondary'>
        <Link
          href='/'
          className='flex items-center gap-2'
        >
          <Image
            src='/images/Logo.png'
            alt='Next.js Logo'
            width={70}
            height={70}
          />
          <h1 className='font-bold'>
            Online <br /> Programming <br /> Courses 
          </h1>
        </Link>
        <Link href='/my-courses' className='font-bold px-4'>My Courses</Link>
      </div>
      
    </>
  )
}

export default Header
