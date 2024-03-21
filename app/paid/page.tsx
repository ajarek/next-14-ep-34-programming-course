import data from '@/public/data/data.json'
import Image from 'next/image'
import { Youtube, DollarSign } from 'lucide-react'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
import Payment from '@/components/Payment'

type Course = {
  id: number
  title: string
  description: string
  image: string
  watch: string
  price: number
  type: string
}
const Paid = async ({ searchParams }: { searchParams: { id: string } }) => {
  const searchId = searchParams.id
  const session = await auth()
  if (!session) {
    redirect('/register')
  }
  
  
  const course: Course | undefined = data.find(
    (item) => item.id === Number(searchId)
  )
  if (!course) {
    return <div className='pl-[280px] py-24 text-3xl'>Course not found</div>
  }
  return (
    
    <div className='flex flex-col items-center pl-[280px] py-20'>
      <h1 className=' text-2xl font-bold mb-4'>Paid</h1>
      <div className='flex items-center gap-8 text-xl mb-4'>
        <div>
          <Image
            src={course.image}
            alt={course.title}
            width={80}
            height={50}
          />
        </div>
        <div>{course.title}</div>
        <div className='flex gap-2 items-center'>
          <Youtube color='red' />
          {course.watch}
        </div>
        <div className='flex gap-1 items-center'>
          {course.price}
          <DollarSign size={16} />
        </div>
      </div>
      {course.type === 'Paid'  ? <Payment allPayValue={course.price} title={course.title} price={course.price} userId={(session.user?.email) ?? 'default_value'} image={course.image} />:<div  className=' w-fit   px-6  py-2 text-center text-xl border-2 border-green-400 mt-10 rounded-sm'>The course is free 🏆 </div>}
    </div>
  )
}

export default Paid
