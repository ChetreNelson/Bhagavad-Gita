"use client"
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const searchParmas=usePathname()
    console.log("senene",searchParmas)
  return (
    <div>
        heeleleoeoeoeo
      
    </div>
  )
}

export default page
