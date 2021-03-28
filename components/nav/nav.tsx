import { useState } from "react";

export default function Nav({stat1, GPU}){
  
    const [home, setHome] = useState(true)
    const [GPUs, setGPUs] = useState(false)



    const displayHome = () => {
        setHome(true);
        setGPUs(false);
        stat1 = true
        GPU = false

    }

    const displayGPUs = () => {
        setGPUs(true);
        setHome(false);

        Stat1 = false
        GPU = true

    }


    return (
    //   {/*
    //     This example requires Tailwind CSS v2.0+ 
        
    //     This example requires some changes to your config:
        
    //     ```
    //     // tailwind.config.js
    //     module.exports = {
    //       // ...
    //       plugins: [
    //         // ...
    //         require('@tailwindcss/forms'),
    //       ]
    //     }
    //     ```
    //   */}
      <div>
        {/* <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">Select a tab</label>
          <select id="tabs" name="tabs" className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
            <option selected>My Account</option>
            <option>Company</option>
            <option>Team Members</option>
            <option>Billing</option>
            </select>
        </div> */}
        <div className="">
            <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
            {/* Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" */}
            <div  onClick={() => displayHome()} className={`${home ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'} rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10` } aria-current="page">
                    <span>Home</span>
                    <span aria-hidden="true" className={`${home ? 'bg-indigo-500' : 'text-gray-500 hover:text-gray-700'} absolute inset-x-0 bottom-0 h-0.5`}></span>
            </div>
            <div onClick={() => displayGPUs()} className={`${GPUs ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'} group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10`} >
                <span>GPUs</span>
                <span aria-hidden="true" className={`${GPUs ? 'bg-indigo-500' : 'text-gray-500 hover:text-gray-700'} absolute inset-x-0 bottom-0 h-0.5`}></span>
            </div>
            <a  className="text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
              <span>Team Members</span>
              <span aria-hidden="true" className="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
            </a>
            <a  className="text-gray-500 hover:text-gray-700 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
              <span>Billing</span>
              <span aria-hidden="true" className="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
            </a>
          </nav>
        </div>
      </div>
    );
  }