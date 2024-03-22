'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Menu,X } from 'lucide-react'
import { useState } from 'react'
const Links = () => {
  const [menu, setMenu] = useState(false)
  return (
    <>
      <div
        className='absolute left-1 top-6 lg:hidden cursor-pointer z-10'
        onClick={() => setMenu(!menu)}
      >
        {menu?<X size={24} color='red' />:<Menu size={24} />}
      </div>
      <div className='min-h-screen flex flex-col w-[256px]   gap-6 absolute top-0 left-0 max-lg:left-[-256px]  py-4 px-8 border-r-2  bg-secondary transition-all' style={menu?{left:'0px',zIndex:'1'}:{left:'-256px'}}>
        <Link
          href='/'
          className='flex items-center gap-2'
        >
          <Image
            src='/images/Logo.png'
            alt='Next.js Logo'
            width={60}
            height={60}
          />
          <h1 className='font-bold'>
            Online <br /> Programming <br /> Courses
          </h1>
        </Link>
        <Link
          href='/my-courses'
          className='font-bold px-4'
        >
          My Courses
        </Link>
      </div>
    </>
  )
}

export default Links
