import { requireAuth } from '@/lib/dal'
import React from 'react'

const Dashboard = async () => {
  const session = await requireAuth()
  return (
    <div>{session?.user.name}</div>
  )
}

export default Dashboard