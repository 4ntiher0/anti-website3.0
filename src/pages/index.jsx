import React from "react";
import profilePic from "../assets/profile.jpg";
import "./home.css";


const Home = () => {
  return (
    <div className="home-page">
      {/* Hero section */}
      <section className="hero">
        <img src={profilePic} alt="4ntiher0 aka Anti" className="hero-pic" />
        <div className="hero-text">
          <h1>4ntiher0 aka Anti</h1>
          <p>Welcome to Antis Area!</p>
        </div>
      </section>

      {/* About / Bio */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          This website is a test project of mine and will forever be under construction. I am an ex Civil Engineering Project manager/designer currently restarting life again with a nice blue collar job with better quality of life.
          I love programming, exploring new tech, photography, and cars. I’m always looking to grow and connect with people.
        </p>
      </section>

      {/* Skills / Interests */}
      <section className="skills">
        <h2>Skills & Interests</h2>
        <ul>
          <li>Civil Development Project Manager</li>
          <li>Civil Site Designer</li>
          <li>JavaScript / React / Web Development</li>
          <li>Photography & Visual Projects</li>
          <li>Cars & Mechanics</li>
          <li>Problem Solving & Personal Growth</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: drycleanerhero@gmail.com</p>
        <p>GitHub: github.com/4ntiher0</p>
        <p>Twitter: @SavedbyAntihero</p>
      </section>
    </div>
  );
};

export default Home;

