'use client'
 
import { useRouter } from 'next/navigation'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from './ui/button'
import { Check } from 'lucide-react'
type PropsCoursesPro = {
  time: string
  price: string
  text1: string
  text2: string
  text3: string
  text4: string
  proPrice: string
}

const CoursesPro = ({
  time,
  price,
  text1,
  text2,
  text3,
  text4,
  proPrice
}: PropsCoursesPro) => {
  const router = useRouter()
  return (
    <Card className='shadow-2xl border-2 px-4 py-8'>
      <CardHeader className='text-center'>
        <CardDescription className=' font-semibold '>{time}</CardDescription>
        <CardTitle className='text-3xl font-semibold mt-4'>{price}</CardTitle>
      </CardHeader>
      <CardContent className='space-y-2 tracking-wide '>
        <p className='flex items-center gap-2'>
          <Check />
          {text1}
        </p>
        <p className='flex items-center gap-2'>
          <Check />
          {text2}
        </p>
        <p className='flex items-center gap-2'>
          <Check />
          {text3}
        </p>
        <p className='flex items-center gap-2'>
          <Check />
          {text4}
        </p>
      </CardContent>
      <CardFooter>
        <Button className='w-full' onClick={() => router.push(`/paid-pro/${proPrice}`)}>Get Started</Button>
      </CardFooter>
    </Card>
  )
}

export default CoursesPro
