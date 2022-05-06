import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutMe from '../components/aboutme'
import Loader from '../components/loader/Loader'
import ProfilePic from '../components/profilepic'
import Sidebar from '../components/sidebar/Sidebar'
const Home: NextPage = () => {

  return (
    <div >
      <Head>
        <title>Portfolio | Vineeth Pawar</title>
        <meta name="description" content="Portfolio of Vineeth Pawar - Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex overflow-x-hidden ">
        {/* <Sidebar placement={'bottom'} /> */}
        <div className="flex-1 max-w-screen-xl mx-auto">
          <Loader />
          {/* <div className="flex">
            <div className="flex-1">
              <h1 className='text-white text-5xl'>About me</h1>
              <AboutMe />
            </div>
            <div className="ml-10"></div>
            <ProfilePic />
          </div> */}
        </div>
        {/* <Sidebar placement={'top'} /> */}
      </div>



    </div>
  )
}

export default Home
