import "../Components/Footer.css";
import { IoCallOutline } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
export const Footer = () => {
  return (
    <div id="con" className="con">
      <h1 style={{ color: "#ddd" }}>Get in Touch</h1>
      <div className="griditems">
        <div className="contactss">
          <div className="step2">
            <div className="ico">
              <div>
                <IoCallOutline color="#ddd" size={40} />
              </div>
              <div>
                <p>+917280980918</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="step2">
            <div className="ico">
              <div>
                <SiGmail color="#ddd" size={40} />
              </div>
              <div>
                <p>amitrisedubey@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="step2">
            <div className="ico">
              <div>
                <AiFillGithub color="#ddd" size={40} />
              </div>
              <div>
                <p>Amitrisedubey</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="step2">
            <div className="ico">
              <div>
                <AiFillLinkedin color="#ddd" size={40} />
              </div>
              <div>
                <p>amit-dubey-99a03a229</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", color: "#ddd" }}>
        <h3>Designed and build by Amit , 2023</h3>
      </div>
    </div>
  );
};
