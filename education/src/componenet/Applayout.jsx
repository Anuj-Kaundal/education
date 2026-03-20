import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Applayout() {
  return (
    <>
    <Header />
    <Outlet/>
    <Footer />
    </>
  )
}

export default Applayout