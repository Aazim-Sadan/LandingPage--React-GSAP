import { isValidElement, useState } from 'react'
import Header from './components/Header'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import SectionFour from './components/SectionFour'
import SectionFive from './components/SectionFive'
import Footer from './components/Footer'

function App() {
  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    let tl_1 = gsap.timeline();

    tl_1.from("bg-1", {xPercent:100, duration:2})
  })



  return (
   <>
   <Header/>
   <SectionOne/>
   <SectionTwo/>
   <SectionThree/>
   <SectionFour/>
   <SectionFive/>
   <Footer/>
   </>
  )
}

export default App
