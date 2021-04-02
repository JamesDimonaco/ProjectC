import Head from "next/head";
import Link from "next/link";
import { googleAuthProvider, auth } from "../lib/firebase";
import styles from "../styles/Home.module.css";


export default function connect() {
    const user = null;
    const username = null;

    function SignInButtton():JSX.Element {
    const signInWithGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider)
        }
        return(
            <button onClick={signInWithGoogle} type="button" className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Login
            </button>
        )
    }


    return (
        <>
    
    <div className={styles.container}>
    <Head>
      <title>Connect</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Job Postings
          </h3>
        </div>
        
        <div className="ml-4 mt-4 flex-shrink-0 flex">
            <Link href='/'>
        <button type="button" className="mr-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>
              Back to stats
            </span>
          </button>
          </Link>
            <SignInButtton/>

        </div>
      </div>
    </div>

       </div>
    </>
    )
};