import React, { useEffect } from "react";
import "../styles/Home.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom"; // Import useLocation hook

const Home = () => {
  const location = useLocation(); // Get the current location/path
  useEffect(() => {
    // Check if the location is '/' or '/home'
    if (location.pathname === "/" || location.pathname === "/home") {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/particles.js";
      script.onload = () => {
        window.particlesJS("particles-js", {
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg", // You can update this with your own image path
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 4,
                size_min: 0.3,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3,
              },
              repulse: {
                distance: 400,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        });
      };
      document.body.appendChild(script);
    }
  }, [location]); // Add location as dependency to track changes in the route

  return (
    <div className="home">
      <div id="particles-js" className="particles"></div>

      {/* Main Hero Section */}
      <header className="hero">
        <div className="overlay">
          <NavLink
            to="/about"
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-gray-300 text-black font-semibold text-lg rounded-lg border-2 border-transparent transition-all duration-300 hover:bg-black hover:text-white hover:border-white hover:scale-105 active:scale-95"
          >
            Get Started
          </NavLink>
        </div>
        <div className="container">
          <h1>Welcome to Scientific Research Hub</h1>
        </div>
      </header>
    </div>
  );
};

export default Home;
