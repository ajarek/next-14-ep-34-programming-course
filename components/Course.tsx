import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { Youtube, DollarSign } from 'lucide-react'
type PropsData = {
  id: number
  title: string
  description: string
  image: string
  watch: string
  price: number
  type: string
}

const Course = ({ data }: { data: PropsData }) => {
  return (
    <Card className='w-64'>
      <Link href={`/courseId/${data.id}`}>
        <CardHeader>
          <Image
            src={data.image}
            alt={data.title}
            width={215}
            height={135}
          />
          <CardTitle>{data.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{data.description.slice(0, 20)}...</CardDescription>
          <p className='flex gap-2'>
            <Youtube color='red' />
            watch {data.watch}
          </p>
          <p className='flex items-center '>
            price: {data.price}
            <DollarSign size={16} />
          </p>
          <p>type: {data.type}</p>
        </CardContent>
      </Link>
    </Card>
  )
}

export default Course
