import Navbar from '../navbar/Navbar';
import './WorkPage.scss';
import Logo1 from '../../images/foodbyte-logo.png';


const WorkPage = () => {
  return (
    <div className="workPage">
        <Navbar />
        <div className="workPage-header">
            <p className="workPage-header-title">Projects.</p>
            <p>A collection of tools and sites I've created, designed to be helpful, fun, & sometimes just a little bit weird.</p>
        </div>

        <section className="workPage-projectsContainer">
            <div className="workPage-projectsContainer-section">
                <div className="workPage-projectsContainer-section-project">
                    <div className="workPage-projectsContainer-section-project-info">
                        <p className="workPage-projectsContainer-section-project-info-title">FoodByte</p>
                        <p>Streamlined food ordering service to make food proccessing quicker</p>
                    </div>
                    <div className="workPage-projectsContainer-section-project-image">
                        <img src={Logo1} alt="logo 1" />
                    </div>
                </div>

                <div className="workPage-projectsContainer-section-project">
                    <div className="workPage-projectsContainer-section-project-info">
                        <p className="workPage-projectsContainer-section-project-info-title">FoodByte</p>
                        <p>Streamlined food ordering service to make food proccessing quicker</p>
                    </div>
                    <div className="workPage-projectsContainer-section-project-image">
                        <img src={Logo1} alt="logo 1" />
                    </div>
                </div>
            </div>

            <div className="workPage-projectsContainer-section">
                <div className="workPage-projectsContainer-section-project" id="large">
                    <div className="workPage-projectsContainer-section-project-info">
                        <p className="workPage-projectsContainer-section-project-info-title">FoodByte</p>
                        <p>Streamlined food ordering service to make food proccessing quicker</p>
                    </div>
                    <div className="workPage-projectsContainer-section-project-image">
                        <img src={Logo1} alt="logo 1" />
                    </div>
                </div>

                <div className="workPage-projectsContainer-section-project">
                    <div className="workPage-projectsContainer-section-project-info">
                        <p className="workPage-projectsContainer-section-project-info-title">FoodByte</p>
                        <p>Streamlined food ordering service to make food proccessing quicker</p>
                    </div>
                    <div className="workPage-projectsContainer-section-project-image">
                        <img src={Logo1} alt="logo 1" />
                    </div>
                </div>
            </div>

            <div className="workPage-projectsContainer-section">
                <div className="workPage-projectsContainer-section-project">
                    <div className="workPage-projectsContainer-section-project-info">
                        <p className="workPage-projectsContainer-section-project-info-title">FoodByte</p>
                        <p>Streamlined food ordering service to make food proccessing quicker</p>
                    </div>
                    <div className="workPage-projectsContainer-section-project-image">
                        <img src={Logo1} alt="logo 1" />
                    </div>
                </div>

                <div className="workPage-projectsContainer-section-project"  id="large">
                    <div className="workPage-projectsContainer-section-project-info">
                        <p className="workPage-projectsContainer-section-project-info-title">FoodByte</p>
                        <p>Streamlined food ordering service to make food proccessing quicker</p>
                    </div>
                    <div className="workPage-projectsContainer-section-project-image">
                        <img src={Logo1} alt="logo 1" />
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default WorkPage