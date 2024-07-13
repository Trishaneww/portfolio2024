import './Projects.scss';
import Navbar from '../navbar/Navbar';
import Image1 from '../../images/primetort1.png';
import Image2 from '../../images/primetort2.png';
import Image3 from '../../images/primetort3.png';
import Image4 from '../../images/primetort4.png';
import Image5 from '../../images/primetort5.png';


const PrimeTort = () => {
  return (
    <div>
        <div className="projectPage">
            <p className="projectPage-title">PrimeTort</p>
            <img src={Image1} alt="preview image" />

            <section className="projectPage-gallery2">
                <img src={Image2} alt="login page" />
                <img src={Image3} alt="login page" />
                <img src={Image4} alt="login page" />
                <img src={Image5} alt="login page" />
            </section>

            <footer className="projectPage-nextProject">
                <a href="/studyhive">StudyHive</a>
            </footer>
        </div>
    </div>
  )
}

export default PrimeTort