import Head from "next/head";
import styles from "../styles/Home.module.css";
import Stat1 from '../components/stats/Stat1'
import HardwareTable from '../components/hardware/HardwareTable'
import { useState } from "react";

export default function Home() {
  const [clicked, setClicked] = useState(false)

  const changeComp = () => {
      if (clicked === false){
        setClicked(true)
      } else {
        setClicked(false)
      }
      console.log(clicked)
  }

  return (

      

    <div className={styles.container}>
      <Head>
        <title>Project C</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button onClick={() => {changeComp()}} type="button" className="mb-5 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Switch
    </button>

      {clicked ? <HardwareTable/> : <Stat1/>}

    </div>
  );
}
