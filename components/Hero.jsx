import Image from 'next/image';
import React from 'react'
import{ Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import portrait from '../public/portrait.JPG'
import Link from 'next/link';

export default function Hero() {
    const [text, count] = useTypewriter({
        words: ['Hi, My Name is Eddie Kuo', 'Guy-who-loves-working-out.jsx', '<ButLovesToCodeMore />'],
        loop: true,
        delaySpeed: 2000
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <Image alt='self portrait' src={portrait} className="relative rounded-full h-32 w-32 mx-auto object-cover" />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px] '>Software Engineer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#f7ab0a' />
            </h1>

            <div className='pt-5'>
                <span onClick={()=> window.location.replace('/#about')} className='heroButton'>
                    <span>About</span>
                    {/* <button className='heroButton'>About</button> */}
                </span>
                <Link href='#projects'>
                    <button className='heroButton'>Projects</button>
                </Link>
                <Link href='#skills'>
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href='#experience'>
                    <button className='heroButton'>Experience</button>
                </Link>
            </div>
        </div>
    </div>
  )
}