import React from 'react'
import NavBar from '../Layouts/NavBar'
import MidSectionContainer from '../component/MiddleSection/MidSectionContainer'
import Footer from '../Layouts/Footer'
import World from '../component/WorldCovidStatus/World'

function Home() {
  return (
    <>
      <NavBar />
      <MidSectionContainer />
      <World />
      <Footer />
    </>
  )
}

export default Home
