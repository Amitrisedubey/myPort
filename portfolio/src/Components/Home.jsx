import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../Components/Home.css";
import profileimg from "../assets/IMG_20230327_193002.jpg";
export const Home = () => {
  return (
    <div id="homes" className="main">
      <div className="social">
        <div className="social2">
          <div>
            <FaGithub />
          </div>
          <div>
            <FaLinkedin color="#b983ff" />
          </div>
          <div>
            <FaInstagram color="red" />
          </div>

          <div>
            <FaTwitter color="#b983ff" />
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
