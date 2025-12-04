import React from 'react'
import './project.css'
import car from './../../assets/carimage.jpg'
import receipe from './../../assets/receipe.jpg'
import hotel from './../../assets/hotel.avif'
import mechanic from './../../assets/mechanic.avif'
import news from './../../assets/news.avif'
import york from './../../assets/newyork.jpg'



const Project = () => {
    return (
        <>
            <div className="project-container" id='project'>
                <h1>My Projects</h1>
                <div className="container">
                    <div className="project-box">
                        <h4>Visual flow</h4>
                         <a href="https://ezhilrond.github.io/visualflow-react/" target='_blank'><button>View my site</button></a>
                        <img src={car} alt="" />
                    </div>
                    <div className="project-box">
                        <h4>Receipe App</h4>
                        <img src={receipe} alt="" />
                         <a href="https://ezhilrond.github.io/receipe-finder/" target='_blank'><button>View my site</button></a>
                    </div>
                    <div className="project-box">
                        <h4>Hotel App</h4>
                        <img src={hotel} alt="" />      
                         <a href=""><button>View my site</button></a>              
                    </div>
                    <div className="project-box">
                        <h4>Welding App</h4>
                        <img src={mechanic} alt="" /> 
                         <a href=""><button>View my site</button></a>                     
                    </div>
                    <div className="project-box">
                        <h4>News App</h4>
                        <img src={news} alt="" />
                         <a href=""><button>View my site</button></a> 
                    </div>
                    <div className="project-box">
                        <h4>Weather App</h4>
                        <img src={york} alt="Recipe Finder Project" style={{ cursor: "pointer" }} />
                         <a href=""><button>View my site</button></a> 
                    </div>
                </div>
            </div>

        </>
    )
}

export default Project