import data from '@/public/data/data.json'
import Image from 'next/image'

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
      <p className='place-self-start px-24'>{course?.watch}</p>
      <p className='place-self-start px-24'>{course?.price}</p>
      <p className='place-self-start px-24'>{course?.type}</p>
      
      </div>
  )
}

export default CourseId