import { EmptyMemories } from '@/components/emptyMemories'
// import { cookies } from 'next/headers'

export default async function Home() {
  // const isAuthenticated = cookies().has('token')

  return <EmptyMemories />
}
