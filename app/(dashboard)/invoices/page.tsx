import { requireAuth } from '@/lib/dal'
import React from 'react'

const Page =  async () => {
   await requireAuth()
  
  return (
    <div>Page</div>
  )
}

export default Page