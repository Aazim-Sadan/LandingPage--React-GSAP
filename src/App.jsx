import { isValidElement, useState } from 'react'
// import './App.css'
import Header from './components/Header'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

function App() {

  return (
   <>
   <Header/>
   <SectionOne/>
   <SectionTwo/>
   <SectionThree/>
   </>
  )
}

export default App
