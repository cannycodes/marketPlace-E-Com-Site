import React from 'react'
import { FC } from 'react'

const Wrapper:FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className='mx-auto max-w-7xl px-10 bg-[#FFFFFF]'>
        {children}
    </div>
  )
}

export default Wrapper