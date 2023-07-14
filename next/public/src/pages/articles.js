import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"

const projects = () => {
  return (
    <>
      <Head>
        <title>Mathilde | Articles</title>
        <meta name="" content=""/>
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Page en construction" className='mb-16'/>
        </Layout>
      </main>
    </>
  )
}

export default projects
