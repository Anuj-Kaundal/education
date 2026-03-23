import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Signpop from './Signpop'

function Applayout() {
  return (
    <>
    <Header />
    {/* if want to show login popup on screen */}
    {/* <Signpop/> */}
    <Outlet/>
    <Footer />
    </>
  )
}

export default Applayout