import './Projects.scss';
import Navbar from '../navbar/Navbar';
import Image2 from '../../images/dw2.png';
import Image3 from '../../images/dw3.png';
import Image4 from '../../images/dw4.png';
import Image5 from '../../images/dw5.png';
import Image6 from '../../images/dw6.png';

const DigitalWealth = () => {
  return (
    <div>
        <div className="projectPage">
            <p className="projectPage-title">Digital Wealth</p>
            <img src={Image6} alt="preview image" />

            <section className="projectPage-gallery1">
                <img src={Image3} alt="first image" />
                <img src={Image4} alt="first image" />
            </section>

            <section className="projectPage-gallery2">
                <img src={Image2} alt="login page" />
            </section>

            <footer className="projectPage-nextProject">
                <a href="/studyhive">StudyHive</a>
            </footer>
        </div>
    </div>
  )
}

export default DigitalWealth