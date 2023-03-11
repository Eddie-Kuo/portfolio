import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

export default function Skill({item}) {
  return (

    <div className='relative flex'>
        <motion.img 
            // initial={{
            //     x: 50,
            //     opacity: 0
            // }}
            // transition={{
            //     duration: 1
            // }}
            // whileInView={{opacity: 1, x:0}}
            src={item}
            className="rounded-full object-cover w-15 h-15 lg:w-20 lg:h-20 border border-black"
        />
    </div>



    // <motion.div 
    // initial={{opacity: 0}}
    // whileInView={{opacity: 1}}
    // transition={{duration: 1.5}}>
    //     <motion.img 
    //         initial={{
    //             x: -200,
    //             opacity: 0
    //         }}
    //         transition={{
    //             duration:1.2
    //         }}
    //         whileInView={{
    //             opacity: 1,
    //             x: 0,
    //         }}
    //         // viewport={{
    //         //     once: true
    //         // }} 
    //     src={item} width={50} height={50} alt='skill image' />
    // </motion.div>
  )
}
