import FilterSelect from '@/components/ui/filter-select'
import PageHeader from '@/components/ui/page-header'
import SearchFilter from '@/components/ui/search-filter'
import { requireAuth } from '@/lib/dal'
import React from 'react'
import ClientCard from './_components/client-card'

const page =async  () => {
 await requireAuth()
  return (
    <div className='flex flex-col items-start gap-8 px-8'>
      
      {/* page Header */}
      <PageHeader>Clients</PageHeader>

      {/* seearch filter */}
      <SearchFilter><FilterSelect options={['all','repeat']}></FilterSelect></SearchFilter>
{/* clietns list */}
      <ul>
        <li><ClientCard name='Hall Jack' numberOfProjects={22} paidAmount={2341} imageUrl='/project image.jpg'></ClientCard></li>
      </ul>
      </div>
  )
}

export default page