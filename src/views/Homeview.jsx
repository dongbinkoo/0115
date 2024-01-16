import React from 'react'
import Skips from '../components/Skips'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Skill from '../components/Skill'
import Port from '../components/Port'
import Contact from '../components/Contact'
import Site from '../components/Site'
import Footer from '../components/Footer'
import Main from '../components/Main'


const Homeview = () => {
  return (
      <>
        <Skips />
        <Header />
        <Main>
            <Intro />
            <Skill />
            <Site />
            <Port />
            <Contact />
        </Main>
        <Footer />
      </>
  )
}

export default Homeview
