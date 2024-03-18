'use client'
import React,{useState} from 'react'
import data from '@/public/data/data.json'
import Image from 'next/image'
import {Youtube, DollarSign  } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
const Paid = ({ searchParams }: { searchParams: { id: string } }) => {
  const[paid, setPaid]=useState(false)
  const searchId = searchParams.id
  const course: Course | undefined = data.find(
    (item) => item.id === Number(searchId)
  )
  if (!course) {
    return <div className='pl-[280px] py-24 text-3xl'>Course not found</div>
  }
  return (
    <div className='pl-[280px] py-20'>
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
        <div className='flex gap-2 items-center'><Youtube color="red" />{course.watch}</div>
        <div className='flex gap-1 items-center'>{course.price}<DollarSign size={16} /></div>
        <div>
           {course.type==='Paid'?
          <Button disabled={paid?true:false} onClick={() => setPaid(true)} variant={!paid?'destructive':'secondary'}>Paid</Button>:
          <Button disabled={true}  variant='default'>Free</Button>}
          </div>
      </div>
      {paid && <Payment allPayValue={course.price}/>} 
    </div>
  )
}

export default Paid
