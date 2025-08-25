// About.jsx
import React from 'react';
import LinkedInIcon   from '@mui/icons-material/LinkedIn';
import GitHubIcon     from '@mui/icons-material/GitHub';
import EmailIcon      from '@mui/icons-material/Email';
import SchoolIcon     from '@mui/icons-material/School';
import CodeIcon       from '@mui/icons-material/Code';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const About = () => {
  return (
    <section className="container ">
      {/* Header */}
      <h1 className="text-center mb-5 fw-bold">About Me</h1>

      {/* Profile Card */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="row g-0">
              {/* Avatar */}
              <div className="col-md-4 d-flex align-items-center justify-content-center p-4">
                <img
  src="/images/photo.png"
  alt="Sudeep"
  className="img-fluid rounded-circle"
  style={{
    width: '240px',
    height: '240px',
    objectFit: 'cover',
    objectPosition: 'top',
      // keeps the face in view
  }}
/>
              </div>

              {/* Details */}
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Sudeep</h5>

                  <p className="card-text text-muted">
                    Web developer with hands-on experience in the MERN stack, dedicated to building
                    fast, responsive and user-friendly web applications. I love writing clean,
                    maintainable code and continuously exploring new technologies.
                  </p>

                  <ul className="list-unstyled mb-3">
                    <li className="mb-1">
                      <strong>Email:</strong>{' '}
                      <a href="mailto:sudeepsudee828@gmail.com">sudeepsudee828@gmail.com</a>
                    </li>
                    <li className="mb-1">
                      <strong>Phone:</strong> 7619536101
                    </li>
                    <li>
                      <strong>Location:</strong>{' '}
                      <LocationOnIcon fontSize="small" className="me-1" />
                      Bengaluru
                    </li>
                  </ul>

                  {/* Social links */}
                  <div className="d-flex gap-3">
                    <a
                      href="https://www.linkedin.com/in/sudee-p/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <LinkedInIcon fontSize="large" className="text-primary" />
                    </a>
                    <a
                      href="https://github.com/Sudeep4705"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <GitHubIcon fontSize="large" className="text-dark" />
                    </a>
                    <a
                      href="mailto:sudeepsudee828@gmail.com"
                      className="text-decoration-none"
                    >
                      <EmailIcon fontSize="large" className="text-danger" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-10 col-lg-8">
          <h3 className="mb-3 fw-bold">
            <SchoolIcon fontSize="large" className="me-2 text-primary" />
            Education
          </h3>
          <div className="row">
            <div className="col-sm-6 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="card-title fw-semibold">Master of Computer Applications</h6>
                  <p className="card-text mb-1">CMR University</p>
                  <span className="badge bg-success">CGPA: 8.00</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="card-title fw-semibold">Bachelor of Computer Applications</h6>
                  <p className="card-text mb-1">Mangalore University</p>
                  <span className="badge bg-success">CGPA: 7.33</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="row justify-content-center mt-4">
        <div className="col-12 col-md-10 col-lg-8">
          <h3 className="mb-3 fw-bold">
            <CodeIcon fontSize="large" className="me-2 text-primary" />
            Skills
          </h3>
          <ul className="list-unstyled">
            <li><strong>Programming Languages:</strong> JavaScript, Python</li>
            <li><strong>Web Technologies:</strong> Node.js, Express.js, REST API, HTML5, CSS3</li>
            <li><strong>Databases:</strong> MongoDB</li>
            <li><strong>Tools:</strong> Git, GitHub, Docker</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;