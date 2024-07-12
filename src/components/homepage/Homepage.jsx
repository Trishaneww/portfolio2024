import './Homepage.scss';
import Image1 from '../../images/image1.png';
import Image2 from '../../images/image2.png';

const Homepage = () => {
  return (
    <div className="homepage">
        <div className="homepage-header">
            <p className="homepage-header-title">Hi. I'm Trishane.</p>
            <p className="homepage-header-title">A Software Developer.</p>
            <p>I'm passionate about crafting experiences that are engaging, accessible, and user-centric.</p>
        </div>

        <section className="homepage-projectsContainer">
            <div className="homepage-projectsContainer-project">
                <div className="homepage-projectsContainer-project-header">
                    <p className="homepage-projectsContainer-project-header-title">Corporate</p>
                    <p>YaSolutions</p>
                </div>
                <img src={Image1} alt="first image"/>
            </div>

            <div className="homepage-projectsContainer-project" id="studyHive">
                <div className="homepage-projectsContainer-project-header">
                    <p className="homepage-projectsContainer-project-header-title">Education</p>
                    <p>Study Hive</p>
                </div>
                <img src={Image2} alt="first image"/>
            </div>

            <div className="homepage-projectsContainer-project" id="yaSolutions">
                <div className="homepage-projectsContainer-project-header">
                    <p className="homepage-projectsContainer-project-header-title">Corporate</p>
                    <p>PrimeTort Leads</p>
                </div>
                <img src={Image2} alt="first image"/>
            </div>

            <div className="homepage-projectsContainer-project" id="digitalWealth">
                <div className="homepage-projectsContainer-project-header">
                    <p className="homepage-projectsContainer-project-header-title">Education</p>
                    <p>Study Hive</p>
                </div>
                <img src={Image1} alt="first image"/>
            </div>
        </section>

        <section>
            <div className="homepage-progressContainer">
                <p className="homepage-progressContainer-title">In Progress.</p>
                <p>Work in various states of design and development, from side projects, to in-flight product design and development.</p>
            </div>

            <div className="homepage-projectsContainer">
                <div className="homepage-projectsContainer-project" id="foodbyte">
                    <div className="homepage-projectsContainer-project-header">
                        <p className="homepage-projectsContainer-project-header-title">Education</p>
                        <p>Foodbyte</p>
                    </div>
                    <img src={Image2} alt="first image"/>
                </div>

                <div className="homepage-projectsContainer-project" id="cater">
                    <div className="homepage-projectsContainer-project-header">
                        <p className="homepage-projectsContainer-project-header-title">Education</p>
                        <p>Cater</p>
                    </div>
                    <img src={Image1} alt="first image"/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Homepage