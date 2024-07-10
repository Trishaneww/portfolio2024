import './About.scss';
import Navbar from '../navbar/Navbar';
import Headshot from '../../images/headshot.png';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="aboutPage">
        <p className="aboutPage-title">Hi. I'm Trishane</p>
        <div className="aboutPage-bio">
          <p className="aboutPage-bio-title">I'm a Product Designer working remotely from 18°C Dublin, Ireland.</p>
          <p className="aboutPage-bio-description">Over the past 14 years, I've worked in various areas of digital design, including front-end development, email,        marketing, and app UI/UX. I'm proud to have worn many hats. These days, I focus on leading design at GiveDirectly, a nonprofit that lets donors send money        directly to the world's poorest households.</p>
        </div>
      </div>
    </>
  )
}

export default About