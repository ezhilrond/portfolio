import './Home.css'
import profile from './../../assets/profileimg.png'
import { useState } from 'react'

const Home = () => {
    return (
        <div id='home' className="home-container">
            <div className="home-content">
                <img src={profile} alt="" />
                <h1>Hi, Im Ezhilarasan</h1>
                <h5>I'm Front-end Web Developer</h5>
                <p>
                    I craft high-quality web applications powered by React, modern CSS, and thoughtful responsive design. Take a look at my projects to learn more about my work and approach.
                </p>
            </div>
        </div>
    )
}

export default Home;