import CoursesPro from '@/components/CoursesPro'

const Pro = () => {
  return (
    <div className=' min-h-screen  pl-[260px] max-lg:pl-0 py-24 grid grid-cols-2 max-lg:grid-cols-1 place-items-center gap-8 '>
      <CoursesPro
        time='Monthly'
        price='4.99$/month'
        text1='Access to All Courses'
        text2='Free Source Code'
        text3='Free App Membership'
        text4='Email & Instagram DM support'
        proPrice='4.99'
      />
      <CoursesPro
        time='Yearly'
        price='39.99$/Year'
        text1='Access to All Courses'
        text2='Free Source Code'
        text3='Free App Membership'
        text4='Email & Instagram DM support'
        proPrice='39.99'
      />
    </div>
  )
}

export default Pro
