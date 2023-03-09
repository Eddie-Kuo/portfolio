import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div className='bg-[rgb(54,69,79)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-[rgb(83,104,120)]/20 scrollbar-thumb-[rgb(112,128,144)]/80'>
      <Head>
        <title>Eddie Kuo</title>
      </Head>

      <Header />

      <section id='hero'>
        <Hero />
      </section>

      <section id='about'>
        <About />
      </section>

      <section id='projects'>
        <Projects />
      </section>

      <section>
        <Skills />
      </section>

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
}
