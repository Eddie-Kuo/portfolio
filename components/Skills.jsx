import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'
import skills from '../data/skills'

export default function Skills() {

  const skillList = skills.map((skill) => <Skill key={skill.i} item={skill} />)

return (
    <motion.div className='h-screen flex relative flex-col text-center xl:flex-row md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 items-center mx-auto '>

      <h3 className='absolute top-10 md:top-60 lg:top-60 uppercase tracking-[20px] text-gray-500 text-2xl '>Skills</h3>

      <motion.div 
        initial={{
          x: 200,
          opacity: 0
        }}
        transition={{
            duration: 1
        }}
        whileInView={{opacity: 1, x:0}}
        className='grid grid-cols-4 gap-2'>
          {skillList}
      </motion.div>
      <div className='grid grid-cols-4 gap-5 pt-5'>

      </div>
    </motion.div>
  )
}
