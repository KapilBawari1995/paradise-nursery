import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>

          <p>
            Welcome to Paradise Nursery, your one-stop destination for
            beautiful and healthy houseplants. We offer a wide variety of
            indoor plants to bring freshness, beauty, and a touch of nature
            into your home.
          </p>

          <Link to="/plants" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;