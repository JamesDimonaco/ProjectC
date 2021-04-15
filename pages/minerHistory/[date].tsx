import Link from "next/link";
import styles from "../../styles/Home.module.css";
import {useContext} from 'react'
import {dateSelected} from '../../lib/context'
import {firestore} from '../../lib/firebase'


  
  export default function date() {

const { date } = useContext(dateSelected)

    const getData = async () => {
      const response = firestore.collection("MinerData").doc(date).collection('PROJECTC')
      const data = await response.get()

      console.log(data.docs[0].Status);
    }
    getData();

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

      </div>
    )
  }
  