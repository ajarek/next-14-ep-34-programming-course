import React from 'react'
import { ModeToggle } from '@/components/ModeToggle'
import SearchCourse from '@/components/SearchCourse'
import { auth } from '@/app/api/auth/auth'
import Logout from './Logout'
import Links from './Links'

const Header = async () => {
  const session = await auth()
  return (
    <>
      <div className=' min-w-[calc(100vw-272px)] h-[73px] absolute top-0 left-[256px] max-lg:left-0 max-lg:w-full bg-secondary flex justify-between items-center gap-4 pl-8 pr-4'>
        <SearchCourse defaultValue={null} />
        <Logout session={session} />
        <ModeToggle />
      </div>
      <Links />
    </>
  )
}

export default Header
