import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
      <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}>
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink} target="_blank" className='text-primary dark:text-primaryDark capitalize '>@{company}</a></h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full md:text-sm'>
          {work}
        </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Expériences</h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
        style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
          position="Teacher Assistant" company="LeWagon"
          companyLink="https://www.lewagon.com/fr"
          time="Octobre 2023" address="Lille"
          work="Soutiens des étudiants dans leur apprentissage, explication de concepts complexes, déblocage lors des excercices et aide pendant leurs projets."/>
          <Details
          position="Freelance Dev FullStack" company="MathildeB"
          companyLink="https://www.linkedin.com/in/mathilde-bonhomme-ab3abb12b/"
          time="Avril 2023" address="Lille"
          work="Compétences en développement fullstack : Ruby on Rails, HTML, CSS, Javascript, ReactJS, NextJS. Réalisation d'un site de location et d'un logiciel de gestion des stocks."/>
          <Details
          position="Gestionnaire E-commerce" company="Auchan.fr"
          companyLink="https://www.auchan.fr/"
          time="2021 - 2023" address="Villeneuve d'Ascq"
          work="Gestion rayons Jouet, Rentrée des classes (LAD) et Cave (DRIVE). Suivi du référencement de la gamme en lien avec la Centrale d’Achat et la cellule référencement et fournisseurs. Valorisation offre produit pour le site. Enrichissement catalogue Jouet et RDC. Animation commerciale. Epticas et Bazaarvoice."/>
          <Details
          position="Assistante Web et Communication - Alternance" company="BDBD"
          companyLink="https://www.boisdessusboisdessous.com/"
          time="2019 - 2021" address="Marcq-en-Baroeul"
          work="Administration et animation du site e-commerce (Prestashop 1.7) et des ventes (rédaction web, mise en ligne des nouveautés, mise en place de promotions). Community management : Facebook, Instagram, Linkedin, Pinterest Supports de communication : créer et rédiger des supports prints et digitaux ainsi que de courtes vidéos."/>
        </ul>
      </div>
    </div>
  )
}

export default Experience
