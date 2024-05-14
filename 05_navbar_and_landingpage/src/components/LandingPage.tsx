import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  // FaAsterisk,
  // FaDatabase,
  // FaAccusoft,
} from "react-icons/fa";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <main>
      <div className="social-handle">
        <a href="https://www.facebook.com/" target="_blank">
          <FaFacebook size={40} />
        </a>
        <a href="https://www.github.com/" target="_blank">
          <FaGithub size={40} />
        </a>
        <a href="https://www.twitter.com/" target="_blank">
          <FaTwitter size={40} />
        </a>
      </div>
    </main>
  );
};

export default LandingPage;
