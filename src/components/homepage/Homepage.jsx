import './Homepage.scss';
import { Link } from 'react-router-dom';
import Image1 from '../../images/image1.png';
import Image2 from '../../images/image2.png';
import DigitalWealth from '../../images/digitalwealth1.png';

const Homepage = () => {
  return (
    <div className="homepage">
        <div className="homepage-header">
            <p className="homepage-header-title">Hi. I'm Trishane.</p>
            <p className="homepage-header-title">A Software Developer.</p>
            <p>I'm passionate about crafting experiences that are engaging, accessible, and user-centric.</p>
        </div>

        <section className="homepage-projectsContainer">
            <Link className="link" to="/yasolutions">
                <div className="homepage-projectsContainer-project">
                    <div className="homepage-projectsContainer-project-header">
                        <p className="homepage-projectsContainer-project-header-title">Corporate</p>
                        <p>YaSolutions</p>
                    </div>
                    <img src={Image1} alt="first image"/>
                </div>
            </Link>

            <Link className="link" to="/studyhive">
                <div className="homepage-projectsContainer-project large" id="studyHive">
                    <div className="homepage-projectsContainer-project-header">
                        <p className="homepage-projectsContainer-project-header-title">Education</p>
                        <p>Study Hive</p>
                    </div>
                    <img src={Image2} alt="first image"/>
                </div>
            </Link>

            <Link className="link" to="/primetort">
                <div className="homepage-projectsContainer-project large" id="yaSolutions">
                    <div className="homepage-projectsContainer-project-header">
                        <p className="homepage-projectsContainer-project-header-title">Corporate</p>
                        <p>PrimeTort Leads</p>
                    </div>
                    <img src={Image2} alt="first image"/>
                </div>
            </Link>

            <Link className="link" to="/digitalwealth">
                <div className="homepage-projectsContainer-project" id="digitalWealth">
                    <div className="homepage-projectsContainer-project-header">
                        <p className="homepage-projectsContainer-project-header-title">Education</p>
                        <p>Digital Wealth</p>
                    </div>
                    <img src={DigitalWealth} alt="first image"/>
                </div>
            </Link>
        </section>

        <section>
            <div className="homepage-progressContainer">
                <p className="homepage-progressContainer-title">In Progress.</p>
                <p>Work in various states of design and development, from side projects, to in-flight product design and development.</p>
            </div>

            <div className="homepage-projectsContainer">
                <Link className="link" to="/foodbyte">
                    <div className="homepage-projectsContainer-project large" id="foodbyte">
                        <div className="homepage-projectsContainer-project-header">
                            <p className="homepage-projectsContainer-project-header-title">Education</p>
                            <p>Foodbyte</p>
                        </div>
                        <img src={Image2} alt="first image"/>
                    </div>
                </Link>

                <Link className="link">
                    <div className="homepage-projectsContainer-project" id="cater">
                        <div className="homepage-projectsContainer-project-header">
                            <p className="homepage-projectsContainer-project-header-title">Education</p>
                            <p>Cater</p>
                        </div>
                        <img src={Image1} alt="first image"/>
                    </div>
                </Link>
            </div>
        </section>
    </div>
  )
}

export default Homepage