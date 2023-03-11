import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

export default function ProjectCard({name, project, link}) {

    const techStack = project.tech.map((tech) =>
    <Image src={tech} key={project.id} width={500} height={500} alt='tech' className='h-10 w-10 rounded-full'/>)

    const summaryPoints =  project.summary.map((summary) =>
    <li key={project.id}>{summary}</li>)

    function validateLink() {
        if(link) {
            return <a className='font-bold text-1xl mt-1 ml-2' href={link} key={project.id}>Link</a>
        } else { 
            return null;
        }
    }
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md:w-[500px] xl:w-[800px] snap-center bg-[#222c36] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-y-scroll md:overflow-hidden lg:overflow-hidden scrollbar scrollbar-track-[rgb(83,104,120)]/20 scrollbar-thumb-[rgb(112,128,144)]/80'>
        <motion.img 
        initial={{y: -100,
        opacity: 0}}
        transition={{duration: 1.2}}
        whileInView={{opacity:1, y:0}}
        viewport={{once: true}}
        className='w-40 h-40 rounded-fill xl:w-[200px] xl:h-[200px] object-cover object-center'
        src={project.image} alt="" />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>{name}</h4>
            <div className='flex flex-row'>
                <a className='font-bold text-1xl mt-1 mr-2' href={project.github}>Github</a>
                {validateLink()}
                
            </div>
            <div className='flex space-x-2 my-2'>
                {techStack}
            </div>
            <div>
                <p className='pb-3 text-slate-400'>Description: {project.description}</p>
            </div>

            <ul className='list-disc space-y-4 ml-4 text-lg'>
                {summaryPoints}
            </ul>
        </div>
    </article>
  )
}
