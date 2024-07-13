import './Projects.scss';
import Navbar from '../navbar/Navbar';
import Image1 from '../../images/yasolutions6.png';
import Image2 from '../../images/yasolutions2.png';
import Image3 from '../../images/yasolutions3.png';
import Image4 from '../../images/yasolutions4.png';
import Image5 from '../../images/yasolutions5.png';
import Image6 from '../../images/yasolutions7.png';
import Image7 from '../../images/yasolutions8.png';
import Image8 from '../../images/yasolutions9.png';

const Yasolutions = () => {
  return (
    <div>
        <div className="projectPage">
            <p className="projectPage-title">YaSolutions</p>
            <img src={Image1} alt="preview image" />

            <div className="projectPage-description1">
                <p className="projectPage-description1-title">Converge Tool</p>
                <p className="projectPage-description1-paragraph">One of the most interesting recent developments for me as designer has been the convergence of "plug and play" software tooling, front-end frameworks that are easy to pick up, and fancy new deployment tools that are hassle free. It's never been easier to start making something on the web. This has enabled me to create Doodler, a collaborative SVG drawing tool.</p>
            </div>

            <div className="projectPage-description1">
                <p className="projectPage-description1-title">Converge Tool</p>
                <p className="projectPage-description1-paragraph">One of the most interesting recent developments for me as designer has been the convergence of "plug and play" software tooling, front-end frameworks that are easy to pick up, and fancy new deployment tools that are hassle free. It's never been easier to start making something on the web. This has enabled me to create Doodler, a collaborative SVG drawing tool.</p>
            </div>

            <section className="projectPage-gallery1">
                <img src={Image3} alt="first image" />
                <img src={Image4} alt="first image" />
            </section>

            <section className="projectPage-gallery2">
                <img src={Image2} alt="login page" />
            </section>

            <section className="projectPage-gallery3">
                <img src={Image6} alt="first image" />
                <img src={Image7} alt="first image" />
                <img src={Image8} alt="first image" />
            </section>

            <div className="projectPage-description1">
                <p className="projectPage-description1-title">Converge Tool</p>
                <p className="projectPage-description1-paragraph">One of the most interesting recent developments for me as designer has been the convergence of "plug and play" software tooling, front-end frameworks that are easy to pick up, and fancy new deployment tools that are hassle free. It's never been easier to start making something on the web. This has enabled me to create Doodler, a collaborative SVG drawing tool.</p>
            </div>

            <section className="projectPage-gallery2">
                <img src={Image5} alt="login page" />
            </section>

            <footer className="projectPage-nextProject">
                <a href="/studyhive">StudyHive</a>
            </footer>
        </div>
    </div>
  )
}

export default Yasolutions