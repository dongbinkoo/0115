import React from 'react'
import Main from '../components/Main'
import Header from '../components/Header'
import Skip from '../components/Skip'
import Intro from '../components/Intro'
import Skill from '../components/Skill'
import Footer from '../components/Footer'
import Site from '../components/Site'
import Port from '../components/Port'
import Contact from '../components/Contact'

const HomeView = () => {
  return (
    <>
        <Skip />
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

export default HomeView
