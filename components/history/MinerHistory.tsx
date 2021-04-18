import React, { useContext, useEffect, useState } from "react";
import Link from 'next/link';

import {firestore} from '../../lib/firebase'
import {dateSelected} from '../../lib/context'



export default function minerHistory(firestoreData) {
  useEffect(() => {
    getData()


  }, [])

  const { setDate } = useContext(dateSelected)

  const [compData, setCompData] = useState([])
  let dates = []

  const getData = async () => {
 

  const minerRef = firestore.collection('MinerData');
  const snapshot = await minerRef.get();
  snapshot.forEach(doc => {
  dates.push(doc.id)
});

const passDate = (date) => {
  
  setDate(date)
}

     setCompData(dates.map((date) => (
       <div key={date} onClick={() => passDate(date)}>
      <Link href={{
      pathname: '/minerHistory/[date]',
      query: {date: date},
      }}>
  <li  className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
    <div className="w-full flex items-center justify-between p-6 space-x-6">
      <div className="flex-1 truncate">
        <div className="flex items-center space-x-3">
          <h3 className="text-gray-900 text-sm font-medium truncate">{date}</h3>
          <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
            {'Online'}
          </span>
        </div>
      </div>
    </div>
    <div>
        </div>

  </li>
    </Link>
    </div>

     )))}
 
  return (
    <>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

     {compData}
     </ul>

    </>
  )
  }