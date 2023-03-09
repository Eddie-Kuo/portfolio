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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repudiandae beatae optio necessitatibus aspernatur maiores nemo maxime esse ducimus quaerat sapiente, assumenda ea neque! Et magnam veritatis molestiae autem nostrum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo consectetur quas cum sint iusto, voluptatibus dolore. Perspiciatis aut sit maxime dicta ex provident hic illo. Beatae nesciunt saepe nihil vitae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quia assumenda doloribus, unde laborum perferendis blanditiis libero quo commodi voluptates fuga eius asperiores impedit voluptate debitis. Eos quidem porro incidunt!
                </p>
            </motion.div>
    </motion.div>
  )
}
