import React from 'react'
import { WhyVist } from '../components/WhyVist'
import { Slider } from '../components/Slider'
import FmsLocations from '../components/FmsLocations'

export const Home = () => {
  return (
    <>
      <Slider />
      <WhyVist />
      <FmsLocations />
    </>
  )
}