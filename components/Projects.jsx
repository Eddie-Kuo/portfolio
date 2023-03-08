import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'

export default function Projects() {

  const projectCard = projects.map((project)=> <ProjectCard project={project} key={project.id} name={project.name} link={project.link}/>)

  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory' >
          {/* <ProjectCard name='Collabo'/>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard /> */}
          {projectCard}
        </div>
    </motion.div>
  )
}
