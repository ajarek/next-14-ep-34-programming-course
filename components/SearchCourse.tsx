'use client'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useState, ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'

interface iDefault {
  defaultValue: string | null
}
const SearchCourse = ({ defaultValue }: iDefault) => {
  const [inputValue, setValue] = useState(defaultValue)
  const router = useRouter()
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    setValue(inputValue)
  }

  const handleSearch = () => {
    if (inputValue) return router.push(`/?q=${inputValue}`)
    if (!inputValue) return router.push('/')
  }

  const handleKeyPress = (event: { key: any }) => {
    if (event.key === 'Enter') return handleSearch()
  }
  return (
    <>
      <Input
        className='relative px-8'
        placeholder='Search...'
        value={inputValue ?? ''}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <Search
        className='absolute left-8'
        color='gray'
      />
    </>
  )
}

export default SearchCourse
