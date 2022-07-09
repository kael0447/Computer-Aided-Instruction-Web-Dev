import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {AiOutlineHome} from 'react-icons/ai'
import './Header.scss'

export const Header = () => {
  return (
    <div className='Header'>
      <div className='left_header'>
        <img className='logo' src={require("../../assets/img/logo.png")} alt=''/>
        <div>Computer Aided Instruction</div>
      </div>    
      <div className="right_header">
        <ul className="upper_right">
          <FaPhoneAlt className='upper_right_logo'/><li>09777564314</li>
          <HiOutlineMail className='upper_right_logo'/><li>beznickz@yahoo.com</li>
          <AiOutlineHome className='upper_right_logo'/><li>Malibay,Pasay</li>
        </ul>
        <ul className="lower_right">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
        </ul>
      </div>
    </div>
  )
}
