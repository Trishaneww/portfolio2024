import './Projects.scss';
import Navbar from '../navbar/Navbar';
import Image1 from '../../images/primetort1.png';
import Image3 from '../../images/primetort3.png';
import Image4 from '../../images/primetort4.png';
import Image5 from '../../images/primetort5.png';


const PrimeTort = () => {
  return (
    <div>
        <div className="projectPage">
            <p className="projectPage-title">PrimeTort</p>
            <img src={Image1} alt="preview image" />

            <section className="projectPage-gallery1">
                <img src={Image3} alt="first image" />
                <img src={Image4} alt="first image" />
                <img src={Image5} alt="second image" />
            </section>

            <section className="projectPage-gallery2">
                <img src={Image1} alt="login page" />
            </section>

            <footer className="projectPage-nextProject">
                <a href="/studyhive">StudyHive</a>
            </footer>
        </div>
    </div>
  )
}

export default PrimeTort