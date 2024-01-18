import React from 'react'
import about from '../assets/img/CONTENTS3_1.jpg'

const Intro = () => {
  return (
    <section id='intro'>
      <div className="intro_inner">
        <h1 className='intro_title'>Lorem ipsum.</h1>
        <div className="intro_line" aria-hidden="true">
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
    <div className="intro_text">
      <div className="text">
        <div>Lorem, ipsum.</div>
        <div>Lorem ipsum dolor sit.</div>
        <div>Lorem, ipsum dolor.</div>
      </div>
      <div className="img">
        <img src="https://github.com/dongbinkoo/0115/blob/main/img/CONTENTS3_1.jpg?raw=true" alt="" />
      </div>
      </div>
        <div className="intro_line bottom" aria-hidden="true">
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
      </div>
    </section>
  )
}

export default Intro
