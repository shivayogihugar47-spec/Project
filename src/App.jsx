import React from 'react'
import './index.css'
import { gsap } from 'gsap'
import {ScrollTrigger, SplitText} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, SplitText);
 
const App = () => {
  return (
    <div className='flex-center h-[100vh] bg-black-200'>
        <h1 className='text-3xl text-indigo-300' >Jai Hind</h1>
    </div>
  )
}

export default App