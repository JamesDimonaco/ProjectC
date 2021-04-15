import '../styles/globals.css'
import 'tailwindcss/tailwind.css'


import { AppProps } from 'next/app'
import { dateSelected } from '../lib/context'
import { useUserData } from '../lib/hooks';


function App({ Component, pageProps }: AppProps) {

  const userData = useUserData();


  return (
  <dateSelected.Provider value={{date: 'test'}}>
    <Component {...pageProps} />
  </dateSelected.Provider>

  )
}

export default App



