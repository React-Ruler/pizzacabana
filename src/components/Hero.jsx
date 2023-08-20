import { Link } from "react-router-dom";
import { pizzaclip } from "../assets";

const Hero = () => {
  return (
    <section className="hero is-fullheight video">
      <div className="hero-video">
        <video poster="" playsInline autoPlay muted loop>
          <source src={pizzaclip} type="video/mp4" />
        </video>
      </div>
      <div className="hero-body">
        <div className="container showcase-content">
          <p>CRISPY, CHEESY TO THE EDGE</p>
          <h1>CABANA-STYLE PIZZA</h1>
          <Link
            to="/OrderNow"
            className="button is-danger is-large is-responsive btn has-text-weight-bold"
          >
            ORDER NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
