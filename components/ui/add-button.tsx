import React from 'react'
import { Button } from './button'

const AddButton = ({children,text}:{children?:React.ReactNode,text:string}) => {
  return (
    <Button className={'rounded-full cursor-pointer px-3 py-2  text-white flex items-center '} >
        <span className='text-lo-sm' >{text}</span>
        {children}
    </Button>
  )
}

export default AddButton