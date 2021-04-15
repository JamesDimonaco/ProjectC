import Head from "next/head";
import styles from "../styles/Home.module.css";
import Stat1 from '../components/stats/Stat1'
import HardwareTable from '../components/hardware/HardwareTable'
import MinerHistory from '../components/history/MinerHistory'
import React, { useState } from "react";
import {firestore} from '../lib/firebase'

import Link from 'next/link';


import axios from 'axios'




export async function getServerSideProps(context) {
  const response = firestore.collection("MinerData")
  const data = await response.get()

  const etherResponse = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=gbp%2Cusd')
  const { gbp } = etherResponse.data.ethereum;
  const { usd } = etherResponse.data.ethereum;

  const bitcoinResponse = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=gbp%2Cusd')
  const  gbpToBtc  = bitcoinResponse.data.bitcoin.gbp;
  const  usdToBtc  = bitcoinResponse.data.bitcoin.usd;

  const asyncResponse = await axios.get("https://api.minerstat.com/v2/stats/vegl2iu7ov3b")
  const { PROJECTC } = asyncResponse.data

  const { usd_month } =  PROJECTC.revenue
  const API_KEY = '006a1209147317df4b8ca387'
  const asyncGBPResponse = await axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/USD/GBP/${usd_month}`)
  const { conversion_result } = asyncGBPResponse.data

  
  
  return {
    props: {
      PROJECTC: PROJECTC,
      conversion_result: conversion_result,
      gbpToEth: gbp,
      usdToEth: usd,
      gbpToBtc: gbpToBtc,
      usdToBtc: usdToBtc,
      firestore: JSON.stringify(data.docs)

    }
  }

  
}

export default function Home(props) {
  const { gbpToEth, usdToEth, gbpToBtc, usdToBtc, conversion_result, PROJECTC, firestore} = props;
  const [isActive, setisActive] = useState('home');




  return (
    <div>
      <div>
        <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
          {/* Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" */}
          <div onClick={() => setisActive('home')} className={`${isActive === 'home' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'} rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10`} aria-current="page">
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
          <Link href="/connect">
            <div onClick={() => setisActive('login')} className={`${isActive === 'login' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'} group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10`}>
              <span>Login</span>
              <span aria-hidden="true" className={`${isActive === 'login' ? 'bg-indigo-500' : 'text-gray-500 hover:text-gray-700'} absolute inset-x-0 bottom-0 h-0.5`}></span>
            </div>
          </Link>
        </nav>
          <div className='Eth'>
              <span className=" items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-ether text-white">
                 1 Ethereum 
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                  =
              </span>
              <span className="items-center px-2.5 py-0.5 mb-5 rounded-md text-sm font-medium bg-purple-100 text-purple-800">
                  {new Intl.NumberFormat('gb-GB', { style: 'currency', currency: 'GBP' }).format(gbpToEth)}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                  /
              </span>
              <span className="items-center px-2.5 py-0.5 mb-5 rounded-md text-sm font-medium bg-purple-100 text-purple-800">
                 {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(usdToEth)}
          </span>
      </div>
      <div className='Btc'>
              <span className=" items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-bitcoin">
                 1 Bitcoin 
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                  =
              </span>
              <span className="items-center px-2.5 py-0.5 mb-5 rounded-md text-sm font-medium bg-purple-100 text-purple-800">
                  {new Intl.NumberFormat('gb-GB', { style: 'currency', currency: 'GBP' }).format(gbpToBtc)}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                  /
              </span>
              <span className="items-center px-2.5 py-0.5 mb-5 rounded-md text-sm font-medium bg-purple-100 text-purple-800">
                 {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(usdToBtc)}
          </span>
      </div>
        </div>
      <div className={styles.container}>
        <Head>
          <title>Project C</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>


        {isActive === 'home' ? <Stat1 conversion_result={conversion_result} PROJECTC={PROJECTC} /> : isActive === 'GPU' ? <HardwareTable PROJECTC={PROJECTC} /> : <MinerHistory firestoreData={firestore} />}




      </div>
    </div>
  );
}
