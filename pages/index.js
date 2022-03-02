import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Next Spotify</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="">
        <Sidebar />
        {/* Center */}
      </main>

      {/* Footer */}
      {/* Player */}
    </div>
  );
}