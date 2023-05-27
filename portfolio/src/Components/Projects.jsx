import "../Components/Project.css";
import amazonclone from "../assets/Screenshot Capture - 2023-05-25 - 14-32-26.png";
import youclone from "../assets/Web capture_26-5-2023_13837_.jpeg";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
export const Projects = () => {
  return (
    <div id="project" className="main-project-page">
      <h1>Few Things that I've Build</h1>
      <div className="firstproject">
        <div className="firstproject1">
          <hr />
          <div className="logoscolor">
            <h1>Amazone Clone</h1>
          </div>

          <hr />
          <div className="firstproject2">
            <div className="first">
              <div className="imagediv">
                <img className="imgr" src={amazonclone} alt="" />
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    paddingTop: "35px",
                  }}
                >
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
                    <a
                      style={{ textDecoration: "none", color: "#ddd" }}
                      href="https://amazonelokiclone.vercel.app/"
                    >
                      Live Demo
                    </a>
                  </button>
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
                    <a
                      style={{ textDecoration: "none", color: "#ddd" }}
                      href="https://github.com/Amitrisedubey/AmazonClone"
                    >
                      Github Repo
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="first1">
              <h1>About</h1>
              <hr style={{ width: "90%" }} />
              <p>
                The Amazon Shopping app lets you shop millions of products and
                manage your Amazon orders from anywhere. Browse, shop by
                department, compare prices, read reviews, share products with
                friends, and check the status of your orders.
              </p>
              <h1>Features</h1>
              <hr style={{ width: "90%" }} />
              <ul>
                <li>
                  Login / Signup along with Google, Facebook and other social
                  media platform.
                </li>
                <li>Filter, sort, and search functionality on Prouct page.</li>
                <li>Add to cart page with checkout functionality.</li>
              </ul>
              <h1>Areas of responsibility</h1>
              <hr style={{ width: "90%" }} />
              <ul>
                <li>
                  Landing page, Footer, Navbar, Products page, Cart page Signup
                  and Login functionality
                </li>
              </ul>
              <hr style={{ width: "90%" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginRight: "30px",
                }}
              >
                <button
                  style={{
                    width: "125px",
                    height: "50px",
                    border: "none",
                    backgroundColor: "#6D67E4",
                    color: "white",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    <FaReact fontSize={30} />
                    React
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="firstproject">
        <div className="firstproject1">
          <hr />
          <div className="logoscolor">
            <h1>Youtube Clone</h1>
          </div>

          <hr />
          <div className="firstproject2">
            <div className="first">
              <div className="imagediv">
                <img src={youclone} className="imgr" alt="" />
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    paddingTop: "35px",
                  }}
                >
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
                    <a
                      style={{ textDecoration: "none", color: "#ddd" }}
                      href="https://6471d9387840e261c7fe1df7--jovial-gelato-aa5863.netlify.app/"
                    >
                      Live Demo
                    </a>
                  </button>
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
                    <a
                      style={{ textDecoration: "none", color: "#ddd" }}
                      href="https://github.com/Amitrisedubey/YoutubeClone"
                    >
                      Github Repo
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="first1">
              <h1>About</h1>
              <hr style={{ width: "90%" }} />
              <p>
                YouTube, Web site for sharing videos. It was registered on
                February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim,
                three former employees of the American e-commerce company
                PayPal. They had the idea that ordinary people would enjoy
                sharing their “home videos.” The company is headquartered in San
                Bruno, California. Shortly after the site opened on a limited
                (“beta”) basis in May 2005, it was attracting some 30,000
                visitors per day.
              </p>
              <h1>Features</h1>
              <hr style={{ width: "90%" }} />
              <ul>
                <li>Search Youtube videos</li>
                <li>User can watch Youtube videos</li>
              </ul>
              <h1>Areas of responsibility</h1>
              <hr style={{ width: "90%" }} />
              <ul>
                <li>Using YouTube Api for Backend.</li>
              </ul>
              <hr style={{ width: "90%" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginRight: "30px",
                  gap: "8px",
                }}
              >
                <button
                  style={{
                    width: "125px",
                    height: "50px",
                    border: "none",
                    backgroundColor: "#6D67E4",
                    color: "white",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    <FaHtml5 fontSize={30} />
                    HTML
                  </div>
                </button>
                <button
                  style={{
                    width: "125px",
                    height: "50px",
                    border: "none",
                    backgroundColor: "#6D67E4",
                    color: "white",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    <FaCss3 fontSize={30} />
                    CSS
                  </div>
                </button>
                <button
                  style={{
                    width: "125px",
                    height: "50px",
                    border: "none",
                    backgroundColor: "#6D67E4",
                    color: "white",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    <SiJavascript fontSize={30} />
                    JavaScript
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
