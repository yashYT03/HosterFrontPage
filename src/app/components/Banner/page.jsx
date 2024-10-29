"use client"
import Image from 'next/image';
import BannerImg from '../../assets/super.jpg'
import BannerImg2 from '../../assets/ia.jpg'

import BannerLogo from '../../assets/BannerLogo.png'
import Button from '@mui/material/Button'
import {IoIosPlay} from "react-icons/io"
// import ReactPlayer from 'react-player/lazy'
import ReactPlayer from 'react-player/youtube'
import Slider from 'react-slick';
import '../../assets/css/slick.min.css'
import '../../assets/css/slick-theme.min.css'

import './style.css';


import { use, useEffect, useRef, useState } from 'react';

const Banner = () =>{
    const [activeSlide, setActiveSlide] = useState(null)

    const sliderFull = useRef();
    const sliderSml = useRef();


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true
      };

    var settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade:false
      };

      useEffect(()=>{
setTimeout(()=>{
setActiveSlide(0)
},1000);

      },[])

      const gotoSlide=(index)=>{
        sliderFull.current.slickGoTo(index)
        sliderSml.current.slickGoTo(index)
        setTimeout(()=>{
            setActiveSlide(index)
            },1000);
      }


    return(
        <div className='banner'>
            <Slider {...settings} className='sliderFull' ref={sliderFull}>
                <div className='item'>  
                    {
                        activeSlide === 0 &&
                        <ReactPlayer url='https://www.youtube.com/watch?v=QpvEWVVnICE'
                        playing={true} muted={true} className="videoWrapper" />
                    } 
                    <Image src= {BannerImg} className='w-100'alt='banner'/>
            <div className='overlay'>
                <Image className='bannerLogo' src={BannerLogo} alt='bannerLogo'/>
                <p className='seasionTitle mt-4'>New Season</p>
                <p className='text-white txt mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minus voluptatum ipsum delectus architecto distinctio voluptate. Ipsum animi voluptatum consequatur eaque similique fugiat dolorum laboriosam distinctio accusantium quae, quis eos.</p>
      <Button className='btn-common' size='large'> <IoIosPlay/> Watch</Button>
            </div>
                </div>


                <div className='item'>   
                {
                        activeSlide === 1 &&
                        <ReactPlayer url='https://www.youtube.com/watch?v=vdNrPdeEuYQ'
                        playing={true} muted={true} className="videoWrapper" />
                    } 
                    <Image src= {BannerImg2} className='w-100'alt='banner'/>
                    
            <div className='overlay'>
                <Image className='bannerLogo' src={BannerLogo} alt='bannerLogo'/>
                <p className='seasionTitle mt-4'>New Season</p>
                <p className='text-white txt mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minus voluptatum ipsum delectus architecto distinctio voluptate. Ipsum animi voluptatum consequatur eaque similique fugiat dolorum laboriosam distinctio accusantium quae, quis eos.</p>
      <Button className='btn-common' size='large'> <IoIosPlay/> Watch</Button>
            </div>
               </div>
 
            </Slider>
           
            <Slider {...settings2} className='sliderSml' ref={sliderSml}>
            <div className='item' onClick={()=>gotoSlide(0)}>   
                    <Image src= {BannerImg} className='w-100'alt='banner'/>
                </div>
            <div className='item'onClick={()=>gotoSlide(1)}>   
                    <Image src= {BannerImg2} className='w-100'alt='banner'/>
                </div>
            <div className='item'onClick={()=>gotoSlide(0)}>   
                    <Image src= {BannerImg} className='w-100'alt='banner'/>
                </div>
            <div className='item'onClick={()=>gotoSlide(1)}>   
                    <Image src= {BannerImg2} className='w-100'alt='banner'/>
                </div>
            <div className='item'onClick={()=>gotoSlide(0)}>   
                    <Image src= {BannerImg} className='w-100'alt='banner'/>
                </div>
            <div className='item'onClick={()=>gotoSlide(1)}>   
                    <Image src= {BannerImg2} className='w-100'alt='banner'/>
                </div>
            </Slider>
           
        </div>
    )
}

export default Banner;