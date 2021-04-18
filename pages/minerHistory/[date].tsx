import Link from "next/link";
import styles from "../../styles/Home.module.css";
import {useContext, useEffect, useState} from 'react'
import {dateSelected} from '../../lib/context'
import {firestore} from '../../lib/firebase'


  
  export default function date() {
    useEffect(() => {
      getData();

    }, [])

    const [hours, setHours] = useState([])
    const { date } = useContext(dateSelected)

    let hoursArry = []

   
    function compareNumbers(a, b) {
      return a - b;
    }

    const getData = async () => {
      const response = firestore.collection("MinerData").doc(date).collection('PROJECTC')
      const data = await response.get()

      data.forEach(doc => {
        hoursArry.push(doc.id)
      });



      setHours(hoursArry.sort(compareNumbers).map((hour) => {
        const getData2 = async () => {

      const response2 = firestore.collection("MinerData").doc(date).collection('PROJECTC').doc(hour)
      const docData = await response2.get()

      console.log(docData)
        }
      
      return(  
        <li onClick={() => getData2()} key={hour}>
        <a href="#" className="block hover:bg-gray-50">
          <div className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-indigo-600 truncate">{hour}{hour >= 12 ? 'PM' : 'AM' }</p>
              <div className="ml-2 flex-shrink-0 flex">
                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                </p>
              </div>
            </div>
          </div>
        </a>
      </li>
      )}))


    

    }



    return (
    <div className={styles.container}>
        <Link href='/'>
             <button
        type="button"
        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Return home
      </button>
      </Link>

      <h1>{date}</h1>
      <ul>
      {hours}
      </ul>
      </div>
    )
  }
  