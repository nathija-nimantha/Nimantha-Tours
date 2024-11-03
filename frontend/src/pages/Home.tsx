import React from 'react'
import { Slider } from '../components/Slider'
import { WhyVist } from '../components/WhyVist'
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