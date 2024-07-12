import './WorkPage.scss';
import Image1 from '../../images/studyhive1.png';
import Image2 from '../../images/foodbyte8.png';
import Foodbyte from '../../images/foodbyte-logo.png';
import PrimeTort from '../../images/primetort.png';
import StudyHive from '../../images/studyhive-logo.png';
import YaSolutions from '../../images/yasolutionslogo2.png';



const WorkPage = () => {
  return (
    <div className="workPage">
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
                        <img src={Foodbyte} alt="logo 1" />
                    </div>
                </div>

                <div className="workPage-projectsContainer-section-project">
                    <div className="workPage-projectsContainer-section-project-info">
                        <p className="workPage-projectsContainer-section-project-info-title">YaSolutions</p>
                        <p>Streamlined food ordering service to make food proccessing quicker</p>
                    </div>
                    <div className="workPage-projectsContainer-section-project-image">
                        <img src={YaSolutions} alt="logo 1" />
                    </div>
                </div>

                <div className="workPage-projectsContainer-section-project">
                    <div className="workPage-projectsContainer-section-project-info">
                        <p className="workPage-projectsContainer-section-project-info-title">PrimeTort Leads</p>
                        <p>Streamlined food ordering service to make food proccessing quicker</p>
                    </div>
                    <div className="workPage-projectsContainer-section-project-image">
                        <img src={PrimeTort} alt="logo 1" />
                    </div>
                </div>
            </div>

            <div className="workPage-projectsContainer-section">
                <div className="workPage-projectsContainer-section-projectLarge">
                    <div className="workPage-projectsContainer-section-project-info">
                        <p className="workPage-projectsContainer-section-project-info-title">StudyHive</p>
                        <p>Streamlined food ordering service to make food proccessing quicker</p>
                    </div>
                    <img src={Image1} alt="logo 1" />
                </div>

                <div className="workPage-projectsContainer-section-project">
                    <div className="workPage-projectsContainer-section-project-info">
                        <p className="workPage-projectsContainer-section-project-info-title">FoodByte</p>
                        <p>Streamlined food ordering service to make food proccessing quicker</p>
                    </div>
                    <div className="workPage-projectsContainer-section-project-image">
                        <img src={Foodbyte} alt="logo 1" />
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
                        <img src={Foodbyte} alt="logo 1" />
                    </div>
                </div>

                <div className="workPage-projectsContainer-section-projectLarge">
                    <div className="workPage-projectsContainer-section-project-info">
                        <p className="workPage-projectsContainer-section-project-info-title">FoodByte</p>
                        <p>Streamlined food ordering service to make food proccessing quicker</p>
                    </div>
                    <img src={Image2} alt="logo 1" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default WorkPage