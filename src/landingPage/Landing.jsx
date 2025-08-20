import React from 'react'
import Heropage from './Components/Heropage'
import ThreeStepsSec from './Components/3stepsSec'
import Products from './Components/Products'
import Users from './Components/Users'

const Landing = () => {
  return (
    <>
        <Heropage/>
        <ThreeStepsSec/>
        <Products/>
        <Users/>
    </>
  )
}

export default Landing