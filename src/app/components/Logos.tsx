import React from 'react'
import Image from 'next/image'

function Logos() {
  return (
    <div className='md:flex items-center justify-center hidden'>
    <div className='h-32 w-[90vw] flex items-center justify-around px-8'>
      <Image src={"/Logo1.png"} alt='' width={90} height={50} ></Image>
      <Image src={"/Logo2.png"} alt='' width={90} height={50}></Image>
      <Image src={"/Logo3.png"} alt='' width={90} height={50}></Image>
      <Image src={"/Logo4.png"} alt='' width={90} height={50}></Image>
      <Image src={"/Logo5.png"} alt='' width={90} height={50}></Image>
      <Image src={"/Logo6.png"} alt='' width={90} height={50}></Image>
      <Image src={"/Logo7.png"} alt='' width={90} height={50}></Image>
    </div>
    </div>
  )
}

export default Logos
