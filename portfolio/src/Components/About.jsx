import "../Components/About.css";
export const About = () => {
  return (
    <div id="abou" className="about-section">
      <div className="about-section2">
        <div className="imagepart">
          <img
            width={400}
            src="https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true"
            alt=""
          />
        </div>
        <div className="aboutpart">
          <h1 style={{ color: "#5D3891" }}>About Me</h1>
          <p
            style={{
              fontWeight: "bold",
              textAlign: "justify",
              color: "#5D3891",
              fontSize: "20px",
            }}
          >
            Hello! My name is Amit and I enjoy creating things that exist on the
            internet. My interest in web development started back last year when
            everything was shut during Pandemic. Web Developement taught me a
            lot about HTML , CSS , JavaScript and many more. <br />
            <br />
            I've spent the last several months in a remote environment, working
            with HTML, CSS, JavaScript, React, Redux, Express, MongoDB, etc.
            building everything from landing pages to APIs
          </p>
        </div>
      </div>
    </div>
  );
};
