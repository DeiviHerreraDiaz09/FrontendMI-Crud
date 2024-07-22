import React from 'react'
import style2 from './WelcomeSection.module.css';
import "../../index.css"

const WelcomeSection = () => {
  return (
    <div className={style2.welcomeMI}>
      <h1 className={style2.title}>BIENVENIDO A</h1>
      <div className={style2.mainImg}></div>
      <h2 className={style2.subTitle}>MONITORING INNOVATION</h2>
    </div>
  )
}

export default WelcomeSection
 