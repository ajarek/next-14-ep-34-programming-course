import Course from '@/components/Course'
import data from '@/public/data/data.json'

export default function Home() {
  return (
    <main className=' min-h-screen grid grid-cols-3 gap-3 place-items-center  pl-[256px] py-24  '>
      {data.map((item) => (
        <Course
          key={item.id}
          data={item}
        />
      ))}
    </main>
  )
}
