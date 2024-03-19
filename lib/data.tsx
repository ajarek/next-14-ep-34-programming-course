'use server'

import {  User } from './models'
import connectToDb from './connectToDb'

export const getUser = async (email: string) => {
  await connectToDb()
  const user = await User.findOne({ email })
  return user
}