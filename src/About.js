import profilePhoto from "./images/Bharathi-profile.jpeg";
import './css/about.css';

const About = () => {
return ( 
    <div className="about-me">
        <h2>About Me</h2>        
        <div>
            <img src={ profilePhoto } alt="Bharathi profile" />
            <p>Hi! I am Bharathi. I am a software developer with 3+ years of experience. <br/>I am just getting started with React. This project is created with my learnings from React </p>
        </div>
        <div className="socialLinks">
            <h3>Connect with Me</h3>
            <a href="https://www.linkedin.com/in/bharathi-bms-214807129/" ><i className="fab fa-linkedin fa-3x" /></a>
            <a href="https://github.com/bmsbharathi/" ><i className="fab fa-github fa-3x" /></a>
        </div>            

    </div>
    );
}
export default About;
 