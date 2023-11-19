import React from 'react'
import { default as MarQuee } from 'react-fast-marquee'

interface MarqueeProps {
  direction?: 'left' | 'right' | 'up' | 'down'
  children: React.ReactNode
}

const Marquee:React.FC<MarqueeProps> = ({ children, direction = 'left' }) => {
  return (
    <MarQuee direction={direction} speed={30} className="py-2 h-auto">
      {children}
    </MarQuee>
  )
}

export default Marquee;