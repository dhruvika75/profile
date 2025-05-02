import React from 'react'
import Header from '../global/Haeder'
import Profile from '../global/Profile'
import '../assets/css/work.css'
import booking from '../assets/image/booking.png'

function Work() {
  return (
    <>
    <div class="container">
      <div>
        <Header/>
      </div>
      <div className='d-flex'>
        <Profile/>
        <div class="workspace">
          <div class="worktitle">
        <span >  <span><h2 style={{color:"#1A1F2C"}}>Check out my Letest <span style={{color:"#4770FF"}}>Project</span></h2></span></span>
        <p  className='title' >I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.</p>
        <img src={booking} alt="" />
        <h2>hotel booking website</h2>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Work
