import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from "../components/footer";
import MapBox from '../components/map';
import RestaurantList from '../components/list';
//import Form from '../components/fs-form';

export default function Home() {
  return (
    <div>
      <Head>
        <title>SafeDine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div>
          <MapBox />
          <RestaurantList />
        </div>
      </main>
      <Footer />
    </div>
  )
}
