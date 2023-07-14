import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/portfolio-cover-image.jpg"
import TransitionEffect from '@/components/TransitionEffect'

const FeaturedProject = ({type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
      <Link href={link} target="_blank"
      className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2 dark:hover:text-light'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target="_blank" className='w-10 dark:text-light'><GithubIcon /></Link>
          <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>Voir le projet</Link>
        </div>
      </div>
    </article>
  )
}

const projects = () => {
  return (
    <>
      <Head>
        <title>Mathilde | Mes projets</title>
        <meta name="Réalisations de Mathilde Bonhomme" content="Découvrez-en plus à propos de mes réalisations en tant que développeuse FullStack."/>
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Mes réalisations" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject
              title="Panima"
              img={project1}
              summary="Création d'un logiciel de gestion de stock autonome pour les magasins autonomes avec Ruby on Rails. Le logiciel peut passer du mode autonome au mode manuel en un clic. En mode autonome, il choisi les produits à retirer du stock et ceux à ajouter, il passe également les commandes."
              link="https://youtu.be/ruIwOTi_3NY"
              github="https://github.com/galmier27/Panima"
              type="Projet Phare"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
