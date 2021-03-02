import React from 'react'
import Image from 'next/image'

export default function ImageComponent({ height, width, src, alt, ...props }) {
  return (
    <Image
      height={height}
      width={width}
      src={process.env.NEXT_PUBLIC_CMS_URL + src}
      alt={alt}
      {...props}
    />
  )
}
