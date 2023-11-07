import React from 'react'
import { default as MarQuee } from 'react-fast-marquee'

interface MarqueeProps {
  direction?: 'left' | 'right' | 'up' | 'down'
  children: React.ReactNode
}

export default function Marquee({ children, direction = 'left' }: MarqueeProps) {
  return (
    <MarQuee direction={direction} speed={46} className="py-2 h-auto">
      {children}
    </MarQuee>
  )
}