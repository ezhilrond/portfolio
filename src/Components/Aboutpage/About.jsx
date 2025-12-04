import './About.css'
import EzhilarasanResume from './../../assets/Ezhil_Arasan_Resume.pdf'

const About = () => {
  return (
    <div id='about' className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          I’m a passionate Front-End Developer focused on building modern, responsive, and visually engaging web applications. I enjoy turning ideas into real, functional interfaces using React, JavaScript, and clean UI/UX principles.
        </p>

        <p>
          I value simplicity, performance, and user-centered design. Whether it’s creating a smooth interaction, integrating APIs, or optimizing layouts for all devices, I strive to deliver experiences that feel intuitive and professional.
        </p>
        <p>
          I’m constantly learning new tools and improving my skills to build better, faster, and more polished web applications.
        </p>

        <a href={EzhilarasanResume} download>
          <button className="about-btn">Download My CV</button>
        </a>

      </div>
    </div>
  )
}

export default About;