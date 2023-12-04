import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mathilde Bonhomme</title>
        <meta name="Portfolio Mathilde Bonhomme" content="Portfolio créé avec Next.js" />
      </Head>
      <TransitionEffect />

      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="Mathilde Pic" className='w-full h-auto lg:hidden md:inline-block md:w-full'
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Bienvenue sur mon Portfolio !" className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text:6xl md:!text-5xl sm:!text:3xl'/>
              <p className='text-justify my-4 text-base font-medium md:text-sm sm:text-xs'>
                Moi c&apos;est Mathilde, j&apos;ai 26 ans et je suis développeuse web Fullstack Ruby on Rails. Ce site est entièrement créé grâce à NextJS, que j'apprends !
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/MathildeBonhomme.pdf" target={"_blank"} className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg tect-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                download={true}
                >Mon CV</Link>
                <Link href="mailto:bonhommemathilde@gmail.com" target={"_blank"} className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base">Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
