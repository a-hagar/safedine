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
          <h1 className='px-10 pt-12 text-3xl font-bold'>Find Toronto's finest restaurants</h1>
          <p className='px-10 py-4 pt-10'>SafeDine allows you to find the nearest restaurants in your location in Toronto and how close it is to your location.</p>
          <p className='px-10'>Just search your location on the search bar and a map with the closest restaurants will show and a star rating to </p>
        </div>

      </main>
      <Footer />
    </div>
  )
}