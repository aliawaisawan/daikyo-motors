import React from 'react'
import BreadCrumb from '../common/BreadCrumb'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Gallery from './Gallery'
import AnyQuestion from './AnyQuestion'
import Blogs from '../home/Blogs'
import Logos from '../home/Logos'

function Main() {
  return (
    <div className="body-wrapper">
    <Header />
    <BreadCrumb title="Portfolio" />
    <Gallery/>
    <AnyQuestion/>
    <Blogs/>
    <Logos/>
    <Footer />
  </div>
  )
}

export default Main
