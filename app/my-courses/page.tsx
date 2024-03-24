import { getCourseUser } from '@/lib/action'
import DeleteMyCourse from '@/components/DeleteMyCourse'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import { Play } from 'lucide-react'
const myCourse = async () => {
  const session = await auth()
  if (!session) {
    redirect('/register')
  }
  const courses = await getCourseUser(session.user?.email || '')
  return (
    <div className=' min-h-screen  pl-[260px] max-lg:pl-0 py-24 flex flex-col justify-start items-center gap-4 '>
      <h1 className='text-3xl font-bold'>My Courses</h1>
      {courses.length > 0 ? (
        courses.map((course) => (
          <div
            key={course._id}
            className=' w-full grid grid-cols-4  gap-2 place-items-center text-xl mb-4 px-8 max-lg:px-1'
          >
            <div>
              <Image
                src={course.image}
                alt={course.title}
                width={160}
                height={100}
              />
            </div>
            <div>{course.title}</div>
            <div className='w-10 h-10 flex items-center justify-center border-2 border-blue-700 rounded-full'>
              <Play
                size={24}
                color='blue'
                fill='blue'
              />
            </div>
            <DeleteMyCourse idCourse={course._id.toString()} />
          </div>
        ))
      ) : (
        <div className='text-3xl'>No courses!</div>
      )}
    </div>
  )
}

export default myCourse
