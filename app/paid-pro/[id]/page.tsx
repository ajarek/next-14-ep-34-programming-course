import PaymentPro from '@/components/PaymentPro'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'

const page = async ({ params }: { params: { id: string } }) => {
  const session = await auth()
  if (!session) {
    redirect('/register')
  }
  const { id } = params

  return (
    <div className='flex flex-col items-center pl-[280px] max-lg:pl-2 max-lg:pr-2 py-20'>
      <PaymentPro id={id} />
    </div>
  )
}

export default page
