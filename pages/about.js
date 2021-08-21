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
        <div class='w-1/2'>
          <h1 class='px-10 pt-12 text-3xl font-bold'>Find Toronto's finest restaurants</h1>
          <p class='px-10 py-4'>SafeDine allows you to find the nearest restaurants in your location in Toronto and finds how</p>
        </div>

      </main>
      <Footer />
    </div>
  )
}