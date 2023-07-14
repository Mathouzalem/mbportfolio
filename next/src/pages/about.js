import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers = ({value}) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if(isInView){
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value ){
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>Mathilde | À propos</title>
        <meta name="À propos de Mathilde Bonhomme" content="Découvrez-en plus à propos de Mathilde Bonhomme développeuse FullStack et ses compétences."/>
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="À propos" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biographie</h2>
              <p className='font-medium'>
                Moi c&apos;est Mathilde, j&apos;ai découvert le code lors de mes études, et j&apos;ai adoré ! Par la suite, j&apos;ai directement travaillé chez Auchan Retail dans le e-commerce, mais l&apos;idée de &quot;coder&quot; me rester en tête et je voulais en connaître davantage.
              </p>
              <p className='font-medium my-4'>
               J&apos;ai donc choisi de stopper mon aventure chez Auchan et de faire la formation du Wagon en Développeur Web. J&apos;ai acquis des connaissances approfondies et une expérience dans diverses technologies web. Ma formation m&apos;a permis d&apos;acquérir une base solide en matière de principes et de bonnes pratiques de développement d&apos;application.
              </p>
              <p className='font-medium'>
               J&apos;ai le souci du détail, je suis fiable et je suis passionnée par la création d&apos;interfaces utilisateur élégantes et intuitives. Alors, si vous cherchez une développeuse web dévouée et compétente pour donner vie à vos idées, je suis là pour vous aider !
              </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image src={profilePic} alt="Mathilde Bonhomme" className='w-full h-auto rounded-2xl '
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </div>
            <div className='col-span-2 flex flex-col  items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumbers value={3}/>+
                </span>
                <h2 className='text-1xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Langages maîtrisés</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumbers value={4}/>+
                </span>
                <h2 className='text-1xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projets réalisés</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumbers value={1}/>+
                </span>
                <h2 className='text-1xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Année d&apos;expériences</h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about
