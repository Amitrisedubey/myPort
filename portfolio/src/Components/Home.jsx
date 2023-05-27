import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../Components/Home.css";
import profileimg from "../assets/IMG_20230327_193002.jpg";
export const Home = () => {
  return (
    <div id="homes" className="main">
      <div className="social">
        <div className="social2">
          <div>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/Amitrisedubey"
            >
              <FaGithub color="black" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/amit-dubey-99a03a229/">
              <FaLinkedin color="#b983ff" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/therisingamit/?next=%2F">
              <FaInstagram color="red" />
            </a>
          </div>

          <div>
            <a href="https://twitter.com/Amitrisedubey">
              {" "}
              <FaTwitter color="#b983ff" />
            </a>
          </div>
        </div>
      </div>
      <div className="about">
        <h1>
          <span style={{ color: "#5D3891" }}>Hi, My name is</span>
          <div style={{ fontSize: "85px" }}>Amit Dubey</div>
        </h1>
        <h3 style={{ color: "#5D3891", fontWeight: "bold" }}>
          Passionate Full Stack Web Developer
        </h3>
        <h3 style={{ color: "#5D3891", fontWeight: "bold" }}>
          Full Stack Web Developer with proficient Skilled in both Frontend and
          Backend Development for producing the Quality work.
        </h3>
        <button
          style={{
            backgroundColor: "#B983FF",
            color: "#99FEFF",
            width: "150px",
            height: "55px",
            border: "none",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "8px",
          }}
        >
          Resume
        </button>
      </div>
      <div className="imgdiv">
        <div>
          <img width={300} src={profileimg} alt="" />
        </div>
      </div>
    </div>
  );
};
