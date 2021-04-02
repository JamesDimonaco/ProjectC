import React, { useEffect, useState } from 'react'


interface hardware {
  name: string;
  temp: number;
  speed: number;
  fan: number;
  accepted: number
}

export default function HardwareTable({PROJECTC}){

  

  
  const [hardware, setHardware] = useState([])

  useEffect(() => {
    getData();
    
  }, [])

  const getData = () => {
    

      console.log(PROJECTC.hardware)
      setHardware(PROJECTC.hardware.map((gpu: hardware) => (
        <div key={gpu.speed} className="bg-white shadow overflow-hidden sm:rounded-md mb-5">
        <ul className="divide-y divide-gray-200">
          <li>
            <a href="/" className="block hover:bg-gray-50">
              <div className="px-4 py-4 flex items-center sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div className="truncate">
                    <div className="flex text-sm">
                      <p className="font-medium text-indigo-600 truncate">{gpu.name}</p>
                      <p className="ml-1 flex-shrink-0 font-normal text-gray-500">
                        Temp: {gpu.temp}
                      </p>
                    </div>
                    <div className="mt-2 flex">
                      <div className="flex items-center text-sm text-gray-500">
                        {/* Heroicon name: solid/calendar */}
                      
                        <p>
                          Jobs done: {gpu.accepted} Hashrate: {gpu.speed} Fan speed: {gpu.fan}
                        </p>
                      </div>
                    </div>
                  </div>
            
                </div>
            
              </div>
            </a>
          </li>
        </ul>
      </div>
      )))
    

      

    
    }

    return (
      <>
      {hardware}
      </>
    );
  }



