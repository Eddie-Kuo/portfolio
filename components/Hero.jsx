import Image from 'next/image';
import React from 'react'
import{ Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link';

export default function Hero() {
    const [text, count] = useTypewriter({
        words: ['Hi, My Name is Eddie Kuo', 'Guy-who-loves-working-out.jsx', '<ButLovesToCodeMore />'],
        loop: true,
        delaySpeed: 2000
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center'>
        <BackgroundCircles/>
        <Image alt='self portrait' src='https://ozkuzfbdevqwhsqwknht.supabase.co/storage/v1/object/public/portfolio-pictures/IMG_1218%202.JPG' width={800} height={500} className="relative rounded-full h-40 w-40 mx-auto object-cover" />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-300 pb-2 tracking-[15px]'>Software Engineer</h2>
            <h1 className=' text-2xl lg:text-6xl font-semibold scroll-px-10'>
                <span className='mr-2'>{text}</span>
                <Cursor cursorColor='#f7ab0a' />
            </h1>

            <div className='pt-5'>
                <Link href='#about'>
                    <button className='heroButton'>About</button>
                </Link>

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