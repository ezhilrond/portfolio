import React from 'react'
import './certificate.css'
import sql from './../../assets/sqllogo.png'
import mongo from './../../assets/mongo.png'
import python from './../../assets/python.png'

const Certificate = () => {
  return (
    <>
      <div className="certificate-marquee" id='certificate'>
        <h1>Certifications</h1>
        <div className="certificate-track">
          <div className="certificate-box"><img src={mongo} alt="" />
            <h4>Mongodb</h4>
          </div>
          <div className="certificate-box"><img src={sql} alt="" />
            <h4>Sql</h4></div>
          <div className="certificate-box"><img src={python} alt="" />
            <h4>Python</h4></div>

          <div className="certificate-box"><img src={mongo} alt="" />
            <h4>Mongodb</h4>
          </div>
          <div className="certificate-box"><img src={sql} alt="" />
            <h4>Sql</h4>
          </div>
          <div className="certificate-box"><img src={python} alt="" />
            <h4>Python</h4>
          </div>

          {/* Repeat boxes to make the loop seamless */}
        </div>
      </div>

    </>
  )
}

export default Certificate