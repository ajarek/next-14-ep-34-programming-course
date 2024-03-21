import {getCourseUser} from '@/lib/action'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
import Image from 'next/image'
const myCourse = async () => {
  const session = await auth()
  if (!session) {
    redirect('/register')
  }
 const courses = await getCourseUser(session.user?.email || '')
  return (
    <div className=' min-h-screen  pl-[260px]  py-24 flex flex-col justify-start items-center gap-4 '>
    <h1 className='text-3xl font-bold'>My Courses</h1>  
    {courses.length>0? courses.map((course) => (
      <div key={course._id} className=' w-full flex justify-start items-center gap-8 text-xl mb-4 px-8'>
        <div>
          <Image
            src={course.image}
            alt={course.title}
            width={160}
            height={100}
          />
        </div>
        <div>{course.title}</div>
        <div>🎞️▶️</div>
        <div>❌</div>

        
      </div>
    )):<div className='text-3xl'>No courses!</div>}
    </div>
  )
}

export default myCourse
