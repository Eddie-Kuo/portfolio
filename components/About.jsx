/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {motion} from 'framer-motion'

export default function About() {
  return (
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

            <h3 className='absolute top-0 md:top-60 lg:top-60 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>

            <motion.img
            initial={{
                x: -200,
                opacity: 0
            }}
            transition={{
                duration:1.2
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{
                once: true
            }} 
            src='https://ozkuzfbdevqwhsqwknht.supabase.co/storage/v1/object/public/portfolio-pictures/IMG_7440.jpeg'
            className='-mb-20 md:md-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            /> 

            <motion.div 
                initial={{
                    x:200,
                    opacity: 0}}
                transition={{duration:1.2}}
                whileInView={{opacity: 1,
                x:0}}
                viewport={{
                    once: true
                }} 
                className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold mt-10 md:mt-0 lg:mt-0 xl:mt-0'>
                    {/* About {''} */}
                    <span className='underline decoration-[#f7ab0a]'>About</span> {''}
                    <span className='underline decoration-[#2fbdff]'>Me</span> {''}
                </h4>
                <p className='text-base'>
                    Hi! My name is Eddie and I'm a full-stack software engineer based in Austin, Texas. With a specialty in Javascript and experience in building out fullstack applications from scratch, I have found a passion in writing software that is focused on delivering the best user experience. What first intrigued me about tech was the power we are given as users. All the information in the world rests right in the palm of our hands. Now as the developer, I have made it my goal to create applications that will in hopes, simplify people's lives one line of code at a time.
                </p>
            </motion.div>
    </motion.div>
  )
}
