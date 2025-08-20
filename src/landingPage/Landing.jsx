import React from 'react'
import Heropage from './Components/Heropage'
import ThreeStepsSec from './Components/3stepsSec'
import Products from './Components/Products'
import Users from './Components/Users'
import UserCategory from './Components/UserCategory'
import JoinSection from './Components/JoinSection'

const Landing = () => {
  return (
    <>
        <Heropage/>
        <ThreeStepsSec/>
        <Products/>
        <Users/>
        <UserCategory/>
        <JoinSection/>
    </>
  )
}

export default Landing