import React from 'react'
import './certificate.css'
import sql from './../../assets/sqllogo.png'
import pythonimg from './../../assets/pythonImg.jpg'
import mongoimg from './../../assets/MongoImg.jpg'
import mongopdf from './../../assets/Mongodb Certificate.pdf'
import pythonpdf from './../../assets/Course_on_Python.pdf'

const Certificate = () => {
  return (
    <>
      <div className="certificate-marquee" id='certificate'>
        <h1>Certifications</h1>
        <div className="certificate-track">


              {/*    */}
          <div
            className="certificate-box"
            onClick={() => window.open(mongopdf, "_blank")}
            style={{ cursor: "pointer" }}
          >
            <img src={mongoimg} alt="MongoDb Certificate" />
            <h4>Introduct to MongoDB</h4>
          </div>



          <div
            className="certificate-box"
            onClick={() => window.open(pythonpdf, "_blank")}
            style={{ cursor: "pointer" }}
          >
            <img src={pythonimg} alt="Python Certificate" />
            <h4>Course On Python</h4>
          </div>

          <div className="certificate-box"><img src={sql} alt="" />
            <h4>Sql</h4></div>




          <div
            className="certificate-box"
            onClick={() => window.open(mongopdf, "_blank")}
            style={{ cursor: "pointer" }}
          >
            <img src={mongoimg} alt="MongoDB Certificate" />
            <h4>Introduct to MongoDB</h4>
          </div>






          <div
            className="certificate-box"
            onClick={() => window.open(pythonpdf, "_blank")}
            style={{ cursor: "pointer" }}
          >
            <img src={pythonimg} alt="Python Certificate" />
            <h4>Python</h4>
          </div>


          <div className="certificate-box"><img src={sql} alt="" />
            <h4>Sql</h4>
          </div>

          {/* Repeat boxes to make the loop seamless */}
        </div>
      </div>

    </>
  )
}

export default Certificate