import clsx from 'clsx'
import React from 'react'

const Layer = ({children,className}) => {
  return (
  <div className={clsx(className,'fixed left-0 top-0 z-20 w-[100vw] h-[100vh] bg-gray-400/50')}>
    {children}
  </div>)
}

export default Layer