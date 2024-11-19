import React from 'react'
import Slides from '../Slides/Slides'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
import Footer from '../Footer/Footer';
import CardTwo from './CardTwo';

const BlogHome = () => {
    const data = [
        {
            id: 1,
            titleOne: "Welcome to Our Computer Department Blog!",
            titleTwo: "What We Do:",
            paraOne: "Hello and welcome to our computer department's blog! Whether you're a tech enthusiast, a student looking to learn more about computers, or someone just curious about what's happening in the world of technology, you've come to the right place.",
            paraTwo: "Our computer department is dedicated to exploring the ever-evolving world of technology. From hardware to software, from programming to cybersecurity, we cover a wide range of topics to ensure that our readers stay informed and engaged.",
            name: "By Abhilash Chutia",
            subtitle: "TU CSE Department",
            qrCode: "/Images/qrcode.png",
            cover: "/Images/cse.jpg",

        },
    ]
  return (
    <>
        <section className='home'>
            <div className='left-content'>
                {
                    data.map((value) =>{
                        return(
                            <div className="content">
                                <div className="logo">
                                    <h1>CSE</h1>
                                </div>
                                <div className="home-img">
                                    <img src={value.cover} alt="" />
                                </div>
                                <div className="text">
                                    <h1>{value.titleOne}</h1>
                                    <p>{value.paraOne}</p>
                                    <span>{value.name}</span>
                                </div>
                                <div className="text2">
                                    <h1>{value.titleTwo}</h1>
                                    <p>{value.paraTwo}</p>
                                    <span>{value.name}</span>
                                </div>

                                <div className='qrcode'>
                                    <img src={value.qrCode} alt="" />
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
            <div className='right-content'>
                <Slides/>
                <Card/>
                <CardTwo/>
                <Footer/>
            </div>
        </section>
    </>
  )
}

export default BlogHome