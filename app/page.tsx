import Course from '@/components/Course'
import data from '@/public/data/data.json'

export default function Home({searchParams}: {searchParams:{q:string}}) {
  
  const searchQuery = searchParams.q 
  return (
    <main className=' min-h-screen grid grid-cols-3 gap-3 place-items-center  pl-[256px] py-24  '>
      {data
      .filter((item) => item.title.toLowerCase().includes(searchQuery?.toLowerCase() || ""))
      .map((item) => (
        <Course
          key={item.id}
          data={item}
        />
      ))}
    </main>
  )
}
