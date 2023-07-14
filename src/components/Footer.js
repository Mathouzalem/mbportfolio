import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
      <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
        <span>{new Date().getFullYear()} &copy; Tous droits réservés.</span>
        <div className="flex items-center lg:py-2">
        Made with 🩷 by&nbsp;<Link href="https://github.com/Mathouzalem" target={"_blank"} className="underline">Mathouzalem</Link>
        </div>
      </Layout>
    </footer>
  )
}

export default Footer
