import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Loader from '../components/loader/Loader'
import Sidebar from '../components/sidebar/Sidebar'
const Home: NextPage = () => {

  return (
    <div >
      <Head>
        <title>Portfolio | Vineeth Pawar</title>
        <meta name="description" content="Portfolio of Vineeth Pawar - Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex overflow-x-hidden">
        <Sidebar placement={'bottom'} />
        <div className="flex-1">
          <Loader />
        </div>
        <Sidebar placement={'top'} />
      </div>



    </div>
  )
}

export default Home
