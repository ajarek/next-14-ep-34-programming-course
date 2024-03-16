import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react';
const SearchCourse = () => {
  return (
    <>
      <Input  className="relative px-8" placeholder="Search..." />
      <Search className='absolute left-5  'color="gray" />
    </>
  )
}

export default SearchCourse
