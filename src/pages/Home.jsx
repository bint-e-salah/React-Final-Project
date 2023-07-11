import React from 'react'

import HeaderSection from '../Components/HeaderSection'
import CategoriesSection from '../Components/CategoriesSection'
import Slider from '../Components/Slider'


export default function Home() {
  return (
    <>
      { <Slider /> }
       <CategoriesSection />  
    </>
  )
}