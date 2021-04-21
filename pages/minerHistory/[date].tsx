import Link from "next/link";
import styles from "../../styles/Home.module.css";
import React, {Fragment, useContext, useEffect, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'

import {dateSelected} from '../../lib/context'
import {firestore} from '../../lib/firebase'
import { CheckIcon } from '@heroicons/react/outline'


interface modalData {
  Status: string,
  currentHash : number,
  jobsDone : number,
  usd_day : number,
  usd_month : number
}

  
  export default function date() {
    useEffect(() => {
      getData();

    }, [])

    const [hours, setHours] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState<modalData | undefined>(undefined);

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

   
      
      

 

      return(  
    <div onClick={() => getModalData(hour)} key={hour}>
        <li >
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

            
      
          </div>
      )}))
    }
    const getModalData = async (hour) => {
      const response2 = firestore.collection("MinerData").doc(date).collection('PROJECTC').doc(hour)
      const docData = await response2.get()

      const modalRes = docData.data()
      openModal(modalRes)
    }
      const openModal = (modalRes) => {

      console.log(modalRes)
      setModalContent({
        Status: modalRes.Status,
        currentHash : modalRes.currentHash,
        jobsDone : modalRes.jobsDone,
        usd_day : modalRes.usd_day,
        usd_month : modalRes.usd_month,

      })
      setIsOpen(true)       
     }



    return (
    <div className={styles.container}>
        <Link href='/'>
             <button
        type="button"
        className="mb-5 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Return home
      </button>
      </Link>

      <h1 className='mb-5'>{date}</h1>
      <ul className='mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6'>
      {hours}
      </ul>
      <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        open={isOpen}
        onClose={setIsOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    Status: {modalContent?.Status}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    currentHash:  {modalContent?.currentHash}<br/>
                    jobsDone: {modalContent?.jobsDone}<br/>
                    usd_day:  {modalContent?.usd_day}<br/>
                    usd_month:  {modalContent?.usd_month}

                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-1 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
      </div>
    );
  }
  