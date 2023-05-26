import { FaTimes, FaBars } from "react-icons/fa";
import "../Components/Navbar.css";
import { useRef } from "react";
export const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("resnavbar");
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header>
      <h1>Portfolio</h1>
      <nav ref={navRef}>
        <h1
          onClick={() => {
            scrollToSection("homes");
          }}
        >
          Home{" "}
        </h1>
        <h1
          onClick={() => {
            scrollToSection("abou");
          }}
        >
          About
        </h1>
        <h1
          onClick={() => {
            scrollToSection("skil");
          }}
        >
          Skills
        </h1>
        <h1
          onClick={() => {
            scrollToSection("project");
          }}
        >
          Project
        </h1>
        <h1
          onClick={() => {
            scrollToSection("con");
          }}
        >
          Contact
        </h1>
        <h1>Resume</h1>
        <button className="navbtn clsbtn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="navbtn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};
