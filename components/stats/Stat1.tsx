
import React, { useEffect, useState } from 'react'

export default function Stat1({PROJECTC}){
  const { info, mining, revenue} =  PROJECTC
  const { uptime, status } = info
  const { hashrate } = mining.hashrate
  const { usd_month } = revenue

  const [component, setComponent] = useState<JSX.Element>()
  useEffect(() => {
    getData()
    
  }, [])


  const getData = () => {
          return (
            setComponent((
              <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Project C stats
              </h3>
              <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Status
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">
                    {status}
                  </dd>
                </div>
                <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Current Hashrate
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">
                    {hashrate.toFixed(3)}
                  </dd>
                </div>
            
                <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Uptime
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">
                    {uptime}
                  </dd>
                </div>
            
                <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                  monthly estimated revenue (USD)
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">
                    {usd_month}
                  </dd>
                </div>
              </dl>
            </div>
            )))
  }
    return (
      <>

          {component}
    
      </>
    );
  }