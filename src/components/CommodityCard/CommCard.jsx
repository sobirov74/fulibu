import React from 'react'
import Footer from '../Footer/Footer'
import MainRecomendations from '../MainRegister/MainRecomendations'
import MainRegister from '../MainRegister/MainRegister'
import MainTop from '../MainTop/MainTop'
import CommTop from './CommTop'
import styles from './commtop.module.scss'

const CommCard = () => {
  return (
    <>
    <main>
        <div className="container">
      <CommTop />
      {/* <MainRegister /> */}

    <h3 className={styles.commSlideTitle}>рекомендации</h3>
      <MainRecomendations />
      </div>
    </main>
    

    <Footer/>
    </>
  )
}

export default CommCard