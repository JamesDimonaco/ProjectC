import '../styles/globals.css'
import 'tailwindcss/tailwind.css'


import { AppProps } from 'next/app'
import { UserContext } from '../lib/context'
import { useUserData } from '../lib/hooks';


function App({ Component, pageProps }: AppProps) {

  const userData = useUserData();


  return (
  <UserContext.Provider value={userData}>
    <Component {...pageProps} />
  </UserContext.Provider>

  )
}

export default App



