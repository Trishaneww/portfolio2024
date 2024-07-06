import './Projects.scss';
import Navbar from '../navbar/Navbar';
import Image1 from '../../images/foodbyte1.png';
import Image2 from '../../images/foodbyte2.png';
import Image3 from '../../images/foodbyte3.png';
import Image4 from '../../images/foodbyte4.png';
import Image5 from '../../images/foodbyte5.png';
import Image6 from '../../images/foodbyte6.png';
import Image7 from '../../images/foodbyte7.png';

const Foodbyte = () => {
  return (
    <div>
        <Navbar />
        <div className="projectPage">
            <p className="projectPage-title">Foodbyte</p>
            <img src={Image7} alt="preview image" />

            <section className="projectPage-gallery1">
                <img src={Image4} alt="first image" />
                <img src={Image5} alt="second image" />
                <img src={Image6} alt="third image" />
            </section>
        </div>
    </div>
  )
}

export default Foodbyte