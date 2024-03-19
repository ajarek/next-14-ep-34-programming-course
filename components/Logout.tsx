import Link from 'next/link'

const Logout = async ({ session }: any) => {
  return (
    <>
      {session ? (
        <Link
          className='px-4 py-1 bg-destructive text-destructive-foreground rounded-sm'
          href={'/api/auth/signout'}
        >
          Logout
        </Link>
      ) : (
        <Link
          className='px-4 py-1 bg-primary text-primary-foreground rounded-sm'
          href={'/register'}
        >
          Login
        </Link>
      )}
      {session && (
        <span className='px-4 max-sm:hidden'>{session.user.email}</span>
      )}
    </>
  )
}

export default Logout
