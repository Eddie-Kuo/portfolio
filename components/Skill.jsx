import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

export default function Skill({item}) {
  return (

    <motion.div className='relative flex border border-black rounded-full justify-center'
      initial={{
        x: 35,
        opacity: 0
      }}
      transition={{
          duration: 1
      }}
      whileInView={{opacity: 1, x:0}}>
        <Image src={item} width={80} height={80} alt='skill badge'
            className="object-cover p-0.5"
        />
    </motion.div>
  )
}