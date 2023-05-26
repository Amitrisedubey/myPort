import "../Components/Skill.css";
import htmllogo from "../assets/html.png";
import csslogo from "../assets/css.png";
import jslogo from "../assets/Javascript_Logo.png";
import reactlogo from "../assets/React-icon.png";
import reduxlogo from "../assets/redux.png";
import nodejslogo from "../assets/nodejs.webp";
import mongologo from "../assets/mongodb.png";
import exlogo from "../assets/expressjs.png";
import vs from "../assets/file_type_vscode_icon_130084.png";
import post from "../assets/postman-icon.webp";
import git from "../assets/github.png";
import net from "../assets/netlify.svg";
import hero from "../assets/heroku.png";
import rep from "../assets/replit.png";
export const Skills = () => {
  return (
    <div id="skil" className="skill-section">
      <h1 style={{ color: "#5D3891" }}>My Tech Skills & Tools</h1>
      <div className="skill-section2">
        <div className="frontend">
          <h1 className="head">Front-End Development</h1>
          <div className="frontend1">
            <div className="frontend2">
              <button className="btn2">
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                  }}
                >
                  <div>
                    <img src={htmllogo} width={40} alt="" />
                  </div>
                  <div>
                    <p className="titles">HTML</p>
                  </div>
                </div>
              </button>
              <button className="btn2">
                {" "}
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                  }}
                >
                  <div>
                    <img src={csslogo} width={40} alt="" />
                  </div>
                  <div>
                    <p className="titles">CSS</p>
                  </div>
                </div>
              </button>

              <button className="btn2">
                {" "}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <div>
                    <img src={jslogo} width={40} alt="" />
                  </div>
                  <div>
                    <p className="titles">JavaScript</p>
                  </div>
                </div>
              </button>

              <button className="btn2">
                {" "}
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                  }}
                >
                  <div>
                    <img src={reactlogo} width={40} alt="" />
                  </div>
                  <div>
                    <p className="titles">React</p>
                  </div>
                </div>
              </button>

              <button className="btn2">
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                  }}
                >
                  <div>
                    <img src={reduxlogo} width={40} alt="" />
                  </div>
                  <div>
                    <p className="titles">Redux</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="frontend">
          <h1 className="head">Back-End Development</h1>
          <div className="frontend1">
            <div className="frontend2">
              <button className="btn2">
                {" "}
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                  }}
                >
                  <div>
                    <img src={nodejslogo} width={40} alt="" />
                  </div>
                  <div>
                    <p className="titles">Node JS</p>
                  </div>
                </div>
              </button>
              <button className="btn2">
                {" "}
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                  }}
                >
                  <div>
                    <img src={mongologo} width={40} alt="" />
                  </div>
                  <div>
                    <p className="titles">Mongodb</p>
                  </div>
                </div>
              </button>

              <button className="btn2">
                {" "}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <div>
                    <img src={exlogo} width={40} alt="" />
                  </div>
                  <div>
                    <p className="titles">Express</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="frontend">
          <h1 className="head">Tools</h1>
          <div className="frontend1">
            <div className="frontend2">
              <button className="btn2">
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                  }}
                >
                  <div>
                    <img src={vs} width={40} alt="" />
                  </div>
                  <div>
                    <p className="titles">VS Code</p>
                  </div>
                </div>
              </button>
              <button className="btn2">
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                  }}
                >
                  <div>
                    <img src={post} width={40} alt="" />
                  </div>
                  <div>
                    <p className="titles">Postman</p>
                  </div>
                </div>
              </button>
              <button className="btn2">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <div>
                    <img src={git} width={40} alt="" />
                  </div>
                  <div>
                    <p className="titles">Github</p>
                  </div>
                </div>
              </button>
              <button className="btn2">
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                  }}
                >
                  <div>
                    <img src={net} width={40} alt="" />
                  </div>
                  <div>
                    <p className="titles">Netlify</p>
                  </div>
                </div>
              </button>
              <button className="btn2">
                {" "}
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                  }}
                >
                  <div>
                    <img src={hero} width={40} alt="" />
                  </div>
                  <div>
                    <p className="titles">Heroku</p>
                  </div>
                </div>
              </button>

              <button className="btn2">
                {" "}
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                  }}
                >
                  <div>
                    <img src={rep} width={40} alt="" />
                  </div>
                  <div>
                    <p className="titles">Replit</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
