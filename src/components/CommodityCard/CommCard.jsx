import React from 'react'
import Footer from '../Footer/Footer'
import MainRecomendations from '../MainRegister/MainRecomendations'
import MainRegister from '../MainRegister/MainRegister'
import MainTop from '../MainTop/MainTop'
import CommTop from './CommTop'

const CommCard = () => {
  return (
    <>
    <main>
        <div className="container">
      <CommTop />
      {/* <MainRegister /> */}
      <MainRecomendations />
      </div>
    </main>
    

    {/* <Footer/> */}
    </>
  )
}

export default CommCard