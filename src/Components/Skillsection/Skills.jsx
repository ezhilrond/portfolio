import './Skills.css'

import html from '../../assets/htmllogo.png'
import css from '../../assets/csslogo.png'
import bootstrap from '../../assets/bootstraplogo.png'
import javascript from '../../assets/javascriptlogo.png'
import sql from '../../assets/sqllogo.png'
import mongo from '../../assets/mongo.png'
import wordpress from '../../assets/wplogo.png'
import react from '../../assets/reactlogo.png'



const Skills= ()=>{
    return(
        <div className="skill-container" id='skill'>
            <h1>Skills</h1>
            <div className="box-container">
                <div className="box">
                    <h2>HTML</h2>
                    <img src={html} alt="" />
                </div>
                <div className="box">
                    <h2>CSS</h2>
                    <img src={css} alt="" />
                </div>
                <div className="box">
                    <h2>BOOTSTRAP</h2>
                    <img src={bootstrap} alt="" />
                </div>
                <div className="box">
                    <h2>JAVASCRIPT</h2>
                    <img src={javascript} alt="" />
                </div>
                <div className="box box-2">
                    <h2>REACT</h2>
                    <img src={react} alt="" />
                </div>
                <div className="box box-2">
                    <h2>SQL</h2>
                     <img src={sql} alt="" />
                </div>
                <div className="box box-2">
                    <h2>Wordpress</h2>
                     <img src={wordpress} alt="" />
                </div>
                <div className="box box-2">
                    <h2>MONGODB</h2>
                     <img src={mongo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Skills;