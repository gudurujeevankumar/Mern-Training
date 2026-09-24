import React from 'react'
import './Home.css'
import HomeStyle from './Home.module.css'

function Home() {
  return (
    <>
      <h1 className='bg-blue'>Hello this style is from external css (global) </h1>
      <h1 className={HomeStyle.bgRed}>Hello this style is from module.css file</h1>
    </>
  )
}

export default Home;
