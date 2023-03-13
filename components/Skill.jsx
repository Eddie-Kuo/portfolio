import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

export default function Skill({item, name}) {
  return (

    <motion.div className='group relative flex cursor-default'
      initial={{
        x: 35,
        opacity: 0
      }}
      transition={{
          duration: 1
      }}
      whileInView={{opacity: 1, x:0}}>
        <Image src={item} width={80} height={80} alt='skill badge'
            className="object-cover p-0.5 rounded-full border border-gray-500 w-24 h-24 md:w-30 md:h-30 xl:w-34 xl:h-34 group-hover:grayscale transition duration-200 ease-in-out"
        />
        <div className='absolute opacity-0 group-hover:opacity-90 transition duration-200 ease-in-out group-hover:bg-gray-400 w-24 h-24 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-lg font-bold text-black opacity-100'>{name}</p>
          </div>
        </div>
    </motion.div>
  )
}

{/* <motion.div className='relative flex border border-black rounded-full justify-center' */}