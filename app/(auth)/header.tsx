'use client'
import { useParams, usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'

const Header = () => {
    const params= usePathname()
  return (
    <div className="flex flex-col items-center gap-0">
              <h1 className="text-lo-display-md font-semibold">{params==="/login"?"Welcome Back!":"Welcome"}</h1>
              <p className="text-lo-sm font-normal">
                {params==="/login"?"Login to manage your projects":"Sign-up to manage your projects"}
              </p>
            </div>
  )
}

export default Header