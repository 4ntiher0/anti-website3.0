import React, { useEffect, useState } from "react";
import profilePic from "../assets/profile.jpg";
import "./home.css";

const Home = () => {
  // ✅ declare state for time
  const [time, setTime] = useState(new Date());

  // ✅ keep updating every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page">
<section className="hero-container">
  {/* Profile card */}
  <div className="profile-card">
    <img src={profilePic} alt="4ntiher0 aka Anti" className="hero-pic" />
    <div className="hero-text">
      <h1>4ntiher0 aka Anti</h1>
      <p>Welcome to Anti's Arena!</p>
    </div>
  </div>

  {/* Time card */}
  <div className="time-card">
    <div className="word-clock">
      <h2>{time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}</h2>
      <p className="word-clock-date">
        {time.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
      </p>
    </div>
  </div>
</section>



      <section className="about">
        <h2>About Me</h2>
        <p>
          This website is a test project of mine and will forever be under
          construction. I am an ex Civil Engineering Project manager/designer
          currently restarting life again with a nice blue collar job with better
          quality of life. I love programming, exploring new tech, photography,
          and cars. I’m always looking to grow and connect with people.
        </p>
      </section>

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
