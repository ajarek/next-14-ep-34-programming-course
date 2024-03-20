import mongoose from 'mongoose'

export type User = {
  username: string
  email: string
  password: string
  img: string
  isAdmin: boolean
}
export type Course = {
  title: string
  price: number
  userId: string
  image: string
}

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true, min: 3, max: 50 },
    password: { type: String, required: true, min: 6, max: 50 },
    img: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
)
const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  userId: { type: String, required: true },
  image: { type: String },
})

export const User = mongoose.models?.User || mongoose.model('User', userSchema)
export const Course =
  mongoose.models?.Course || mongoose.model('Course', courseSchema)
