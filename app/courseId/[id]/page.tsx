import data from '@/public/data/data.json'
import Image from 'next/image'
import {Youtube, DollarSign  } from 'lucide-react'
import Link from 'next/link'

const CourseId = ({params}:{params:{id:string}}) => {
  const id = params.id
  const course = data.find((item) => item.id === Number(id))
  return (
    <div  className=' min-h-screen  pl-[280px] pr-[24px] py-24 flex flex-col justify-start items-center gap-4 '>
      <h1 className='text-3xl font-bold place-self-start px-24'>{course?.title}</h1>
      <Image
        src={course?.image||''}
        alt={course?.title||''}
        width={645}
        height={405}
      />
      <p className='place-self-start px-24'>{course?.description}</p>
      <p className='flex gap-2 place-self-start px-24'><Youtube color="red" />watch {course?.watch}</p>
      <p className='flex place-self-start px-24 items-center'>price: <span className='font-semibold'>{course?.price}</span>  <DollarSign size={16} /></p>
      <p className='place-self-start px-24'>{course?.type}</p>
       <Link className='ml-24 place-self-start bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50' href={`/paid/?id=${course?.id}`}>I'm ordering</Link>
      </div>
  )
}

export default CourseId