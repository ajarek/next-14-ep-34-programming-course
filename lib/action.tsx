'use server'

import connectToDb from './connectToDb'
import { User, Course } from './models'
import { revalidatePath } from 'next/cache'
import bcrypt from 'bcryptjs'

export const addUser = async (formData: User) => {
  const { username, email, password, img, isAdmin } = formData
  const hashedPassword = await bcrypt.hash(password, 5)
  try {
    connectToDb()
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
      isAdmin,
    })
    await newUser.save()
    console.log('saved' + newUser)
    revalidatePath('/')
  } catch (err) {
    console.log(err)
  }
}
export const addCourse = async (formData : Course) => {
 const {title,  price,  userId,  image} = formData
  try {
    connectToDb()
    const newCourse = new Course({
      title,
      price,
      userId,
      image,
    })
    
    await newCourse.save()
    console.log('saved' + newCourse)
    // revalidatePath('/')
  } catch (err) {
    console.log(err)
  }
}
export const getCourseUser = async (userId: string) => {
  await connectToDb()
  const courses = await Course.find({ userId })
  return courses
}