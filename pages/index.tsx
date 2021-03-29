import Head from "next/head";
import styles from "../styles/Home.module.css";
import Stat1 from '../components/stats/Stat1'
import HardwareTable from '../components/hardware/HardwareTable'
import MinerHistory from '../components/history/MinerHistory'
import React, { useEffect, useState } from "react";




export default function Home() {
  const [isActive, setisActive] = useState('home')

  useEffect(() => {
 
  
    changeComponent()
    
  }, [setisActive])

    const changeComponent = () => {


    }

  return (
<div>
<div className="">
            <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
            {/* Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" */}
            <div onClick={() => setisActive('home')} className={`${isActive === 'home' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'} rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10` } aria-current="page">
                    <span>Home</span>
                    <span aria-hidden="true" className={`${isActive === 'home' ? 'bg-indigo-500' : 'text-gray-500 hover:text-gray-700'} absolute inset-x-0 bottom-0 h-0.5`}></span>
            </div>
            <div onClick={() => setisActive('GPU')} className={`${isActive === 'GPU' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'} group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10`} >
                <span>GPUs</span>
                <span aria-hidden="true" className={`${isActive === 'GPU' ? 'bg-indigo-500' : 'text-gray-500 hover:text-gray-700'} absolute inset-x-0 bottom-0 h-0.5`}></span>
            </div>
            <div onClick={() => setisActive('history')} className={`${isActive === 'history' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'} group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10`}>
              <span>History</span>
              <span aria-hidden="true" className={`${isActive === 'history' ? 'bg-indigo-500' : 'text-gray-500 hover:text-gray-700'} absolute inset-x-0 bottom-0 h-0.5`}></span>
            </div>
            <div  className="text-gray-500 hover:text-gray-700 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
              <span>Billing</span>
              <span aria-hidden="true" className="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
            </div>
          </nav>
        </div>    <div className={styles.container}>
      <Head>
        <title>Project C</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isActive === 'home' ? <Stat1/> : null}
      {isActive === 'GPU' ? <HardwareTable/> : null}
      {isActive === 'history' ? <MinerHistory/> : null}




    </div>
    </div>
  );
}
