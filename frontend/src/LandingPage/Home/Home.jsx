import React from 'react';
import './Home.css';   // only this CSS file

const Home = () => (
  <section id="home" className="hero">
    <div className="hero-content">
      <h1>
        Hi, I'm <span className="highlight">Sudeep</span>
      </h1>

      <p className="tag-line">MERN Stack Developer</p>

      <p className="sub-text">
        I build fast, responsive and user-friendly web applications.
        <br />
        Welcome to my corner of the internet.
      </p>

      <div className="btn-group">
        <a href="/about" className="btn primary">
          About Me
        </a>
        <a
          href="https://github.com/Sudeep4705"
          target="_blank"
          rel="noopener noreferrer"
          className="btn outline"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Home;