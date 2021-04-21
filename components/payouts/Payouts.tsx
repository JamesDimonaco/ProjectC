
import React, { useEffect, useState } from 'react'




export default function Payouts({payoutDetails, priceOf1Ethereum}){
  const [payouts, setPayouts] = useState<JSX.Element>()
  useEffect(() => {
    getData()
    total()
  }, [])
  const total = () => {
    let eachPayOut = [];
      payoutDetails.map(e => {
      eachPayOut.push(e.amount)
    });
    const reducer = (a, b) => a + b;
    const totalEth = eachPayOut.reduce(reducer);
    const totalGdp = new Intl.NumberFormat('gb-GB', { style: 'currency', currency: 'GBP' }).format(totalEth/1000000000000000000 * priceOf1Ethereum);
    return totalGdp;
  }


  const getData = () => {

          return (
            setPayouts(payoutDetails.map((out) =>
                (
    <div>
                <li  className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-medium truncate">Paid out on {new Date(out.paidOn*1000).toLocaleDateString("en-GB")}</h3>
                  
                    </div>
                    <p className="mt-1 text-gray-500 text-sm truncate">amount: {out.amount/1000000000000000000} Ether</p>
                    <p className="mt-1 text-gray-500 text-sm truncate">amount: {new Intl.NumberFormat('gb-GB', { style: 'currency', currency: 'GBP' }).format(out.amount/1000000000000000000 * priceOf1Ethereum)}</p>
                  </div>
                </div>
                <div>
                    </div>
            
              </li>
              </div>
            ))))
  }
    return (
      <>
      <span className="mb-3 inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800">
       Total so far {total()}
      </span>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {payouts}
          </ul>
      </>
    );
  }