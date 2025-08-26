// src/pages/Projects.jsx
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Chip } from '@mui/material';

const Projects = () => {
  // ---- EDIT HERE ----
  const projects = [
    {
  title: 'Go4Give',
  img: '/images/go4give.png',
  desc: 'A compassionate MERN platform for donating to orphanages and personal fundraisers. Users can create campaigns, track live progress bars, and complete secure payments via Razorpay integration.',
  langs: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'JWT', 'Bootstrap'],
  repo: 'https://github.com/Sudeep4705/Go4Give',
},
   {
  title: 'Airbnb-Clone',
  img: '/images/airbnb.png',
  desc: 'Full-stack MERN marketplace where hosts can add, edit, delete hotel listings, upload multiple photos, and manage bookings. search & filters, map view, and an admin dashboard.',
  langs: [ 'Node.js', 'Express', 'MongoDB',  'Cloudinary', 'Mapbox'],
  repo: 'https://github.com/Sudeep4705/Airbnb',
},
   {
  title: 'LevelUp – Gamer Social Hub',
  img: '/images/levelup.png',
  desc: ' gamer hub where users create quests, track achievements, and chat in real-time. Drag-and-drop boards, live updates, and secure auth via Passport.js.',
  langs: ['React', 'Node.js', 'Express', 'MongoDB', 'Bootstrap',  'Passport.js'],
  repo: 'https://github.com/Sudeep4705/Levelup',
},
{
      title: 'Zerodha-Clone',
      img: '/images/zerodha.png',
      desc: 'Full-stack stock-trading platform clone featuring live price feeds, portfolio dashboard, buy/sell orders, holdings & funds pages, and secure JWT authentication.',
      langs: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT',  'Bootstrap'],
      repo: 'https://github.com/Sudeep4705/Zerodha',
    },
    {
  title: 'Formula1',
  img: '/images/formula1.png',
  desc: 'Backend-first RESTful API and React dashboard for Formula 1 enthusiasts to add, edit, delete and view detailed car specs. Secured with Passport.js authentication.',
  langs: ['React', 'Node.js', 'Express', 'MongoDB', 'Passport.js', 'Bootstrap'],
  repo: 'https://github.com/Sudeep4705/Formula1',
},
{
  title: 'Gamers World',
  img: '/images/gamers.png',
  desc: 'A React + Node CRUD platform where gamers can create, read, update and delete game records, reviews, and ratings.',
  langs: [ 'Node.js', 'Express', 'MongoDB',  'Passport.js', 'Bootstrap'],
  repo: 'https://github.com/Sudeep4705/Gamers-World',
}
  ];
  // --------------------

  return (
    <section className="container py-5">
      <h1 className="text-center mb-5">Projects</h1>

      <div className="row g-4">
        {projects.map((p, idx) => (
          <div className="col-12 col-md-6 col-lg-4" key={idx}>
            <div className="card h-100 shadow-sm">
              <img
                src={p.img}
                alt={p.title}
                className="card-img-top"
                style={{ aspectRatio: '16/9', objectFit: 'cover',width:'100%' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{p.title}</h5>
                <p className="card-text flex-grow-1">{p.desc}</p>

                <div className="mb-3">
                  {p.langs.map((l) => (
                    <Chip
                      key={l}
                      label={l}
                      size="small"
                      variant="outlined"
                      color="primary"
                      className="me-1 mb-1"
                    />
                  ))}
                </div>

                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark mt-auto align-self-start"
                >
                  <GitHubIcon fontSize="small" className="me-1" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;