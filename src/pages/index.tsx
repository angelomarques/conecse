import Head from "next/head";
import AppHeader from "../components/AppHeader";
import Hero from "../components/Hero";
import About from "../components/About";
import Launching from "../components/Lauching";
import Contribute from "../components/Contribute";
import AppFooter from "../components/AppFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-lighter">
      <Head>
        <title>Conecse</title>
        <link rel="icon" href="/conecse.svg" />
      </Head>

      <AppHeader />
      <main className='px-5 md:px-24 lg:px-48'>
        <Hero />
        <About/>
        <Launching/>
        <Contribute/>
      </main>
      <AppFooter/>
    </div>
  );
}
