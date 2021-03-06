import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SafeDine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div className='w-1/2'>
            <h1 className='px-10 pt-12 text-3xl font-bold'>Contact</h1>
            <p className='px-10 py-4'>Coming Soon</p>
          </div>
      </main>
      <Footer />
    </div>
  )
}