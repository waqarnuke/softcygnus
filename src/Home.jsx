import React from 'react'
import web from '../src/Images/hero-img.gif'
import Common from './Component/Common'
const Home = () => {
  return (
    <>
      <Common 
      name='Welcome to Home us page' 
      imgsrc={web} 
      visit='/Service'
      btnname="Comming Soon" />
    </>
  )
}

export default Home