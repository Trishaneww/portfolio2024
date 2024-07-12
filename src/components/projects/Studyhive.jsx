import './Projects.scss';
import Navbar from '../navbar/Navbar';
import Image1 from '../../images/studyhive1.png';
import Image3 from '../../images/studyhive3.png';
import Image4 from '../../images/studyhive4.png';
import Image5 from '../../images/studyhive5.png';
import Image6 from '../../images/studyhive6.png';
import Image7 from '../../images/studyhive7.png';

const Studyhive = () => {
  return (
    <div>
        <div className="projectPage">
            <p className="projectPage-title">Foodbyte</p>
            <img src={Image7} alt="preview image" />

            <div className="projectPage-description1">
                <p className="projectPage-description1-title">Converge Tool</p>
                <p className="projectPage-description1-paragraph">One of the most interesting recent developments for me as designer has been the convergence of "plug and play" software tooling, front-end frameworks that are easy to pick up, and fancy new deployment tools that are hassle free. It's never been easier to start making something on the web. This has enabled me to create Doodler, a collaborative SVG drawing tool.</p>
            </div>

            <section className="projectPage-gallery1">
                <img src={Image3} alt="first image" />
                <img src={Image4} alt="first image" />
                <img src={Image5} alt="second image" />
                <img src={Image6} alt="third image" />
            </section>

            <div className="projectPage-description1">
                <p className="projectPage-description1-paragraph">Doodler is a chance for me to experiment with different features, learn new things, and test my technical capabilities. It's something that allows me to scratch that itch I have for understanding new technologies, and to create something that I can use myself.</p>
            </div>

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

export default Studyhive