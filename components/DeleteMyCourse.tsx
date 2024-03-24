'use client'

import { deleteCourse } from '@/lib/action'
import { Button } from './ui/button'

const DeleteMyCourse = ({ idCourse }: { idCourse: string }) => {
  const handleSubmit = async (event: any) => {
    event.preventDefault()

    try {
      await deleteCourse({ id: idCourse })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      className='text-right'
      onSubmit={handleSubmit}
    >
      <input
        type='hidden'
        defaultValue={idCourse}
      />

      <Button
        className=' border-2 border-red-500 h-10 w-10 rounded-full '
        type='submit'
        size='sm'
      >
        ❌
      </Button>
    </form>
  )
}

export default DeleteMyCourse
