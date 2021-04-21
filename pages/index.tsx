import Head from "next/head";
import styles from "../styles/Home.module.css";
import Stat1 from '../components/stats/Stat1'
import HardwareTable from '../components/hardware/HardwareTable'
import MinerHistory from '../components/history/MinerHistory'
import Payout from '../components/payouts/Payouts'
import React, { useState } from "react";

import axios from 'axios'




export async function getServerSideProps(context) {
  const miner = '0x80674294Ff952992e4F04744CeddB9AcD09B37b6'
  const etherMineResponse = await axios.get(`https://api.ethermine.org/miner/${miner}/payouts`)
  const etherMineData = etherMineResponse.data.data

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
      payout: etherMineData,
    }
  }

  
}

export default function Home(props) {
  const { gbpToEth, usdToEth, gbpToBtc, usdToBtc, conversion_result, PROJECTC, payout} = props;
  const [isActive, setisActive] = useState('home');

    // console.log(conversion_result);


  return (
    <div>
      <div>
        <nav className="position: absolute relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
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
            <div onClick={() => setisActive('payouts')} className={`${isActive === 'payouts' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'} group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10`}>
              <span>Payouts</span>
              <span aria-hidden="true" className={`${isActive === 'payouts' ? 'bg-indigo-500' : 'text-gray-500 hover:text-gray-700'} absolute inset-x-0 bottom-0 h-0.5`}></span>
            </div>
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


        {isActive === 'home' ? <Stat1 conversion_result={conversion_result} PROJECTC={PROJECTC} /> : isActive === 'GPU' ? <HardwareTable PROJECTC={PROJECTC} /> : isActive === 'history' ?<MinerHistory /> : <Payout payoutDetails={payout} priceOf1Ethereum={gbpToEth}/>}




      </div>
    </div>
  );
}
