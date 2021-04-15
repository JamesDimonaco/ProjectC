import '../styles/globals.css'
import 'tailwindcss/tailwind.css'


import { AppProps } from 'next/app'
import { dateSelected } from '../lib/context'
import { useUserData } from '../lib/hooks';
import { useState } from 'react';


function App({ Component, pageProps }: AppProps) {

  const [date, setDate] = useState('Thu Apr 15 2021')



  return (
  <dateSelected.Provider value={{ date, setDate }}>
    <Component {...pageProps} />
  </dateSelected.Provider>

  )
}

export default App



