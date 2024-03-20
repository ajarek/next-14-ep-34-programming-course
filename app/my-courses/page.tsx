import {getCourseUser} from '@/lib/action'
import { auth } from '@/app/api/auth/auth'
import Image from 'next/image'
const myCourse = async () => {
  const session = await auth()
 const courses = await getCourseUser(session.user.email)
  return (
    <div className=' min-h-screen  pl-[280px]  py-24 flex flex-col justify-start items-center gap-4 '>
    {courses.map((course) => (
      <div key={course._id} className='flex flex-col items-center gap-8 text-xl mb-4'>
        <div>
          <Image
            src={course.image}
            alt={course.title}
            width={80}
            height={50}
          />
        </div>
        <div>{course.title}</div>
        
      </div>
    ))}
    </div>
  )
}

export default myCourse
