import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer-container'>
      <p>2022 Menggokil Gaming Gear, All Rights Reserved</p>
      <p className='icons'>
        <a href='https://www.instagram.com/bprayoga_27/' target="_blank" rel='noopener noreferrer'>
          <AiFillInstagram />
        </a>
        <a href='https://www.twitter.com/BoedNoNiwa/' target="_blank" rel='noopener noreferrer'>
          <AiOutlineTwitter />
        </a>
      </p>
    </div>
  )
}

export default Footer