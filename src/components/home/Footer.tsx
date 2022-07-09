import React from 'react'
import './Footer.scss'
export const Footer = () => {

    const date = `${new Date().getFullYear()}`;
    // myYear = `${date.getFullYear()}`;
  return (
    <div className='Footer'>All rights reserved {date}</div>
  )
}
