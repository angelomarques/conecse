import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-light">
      <Head>
        <title>Conecse</title>
        <link rel="icon" href="/conecse.svg" />
      </Head>

      <img className="mr-3" src="/conecse.svg" alt="logo" />
      <h1 className="font-semibold text-3xl">Em breve...</h1>
    </div>
  );
}
