import React, { useState, useEffect } from 'react'
import { FcPrevious } from 'react-icons/fc'
import { FcNext } from 'react-icons/fc'
import './Carousel.scss'
import FirstSlide from '../../assets/img/carousel/1.jpg'
import SecondSlide from '../../assets/img/carousel/2.jpg'
import ThirdSlide from '../../assets/img/carousel/3.jpg'
import FourthSlide from '../../assets/img/carousel/4.jpg'
export const Carousel = () => {
    const img = [FirstSlide,SecondSlide,ThirdSlide,FourthSlide];

    const [slide,setSlide] = useState (0);
    useEffect(() => {
        const interval = setInterval(()=>{
            setSlide((slide === (img.length -1)? 0 : slide + 1))
        },3000);
        return() => clearInterval(interval);
    }, [slide])

    const next = () => {setSlide(slide === (img.length -1)? 0 : slide +1)};
    const prev = () => {setSlide(slide === 0 ? (img.length -1) : slide -1)};
    // document.getElementById('next_slide')?.addEventListener('click', next());
    // document.getElementById('next_slide')?.addEventListener('click', prev());
  return (
    <div className='Carousel'>
        <FcPrevious className="slide_button" onClick={prev}/>
        <div className='slider_container'>
            <img src={img[slide]} alt="" />
            <ul className='dots' onClick={next}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <FcNext className="slide_button" id='next_slide'/>
    </div>
  )
}
