// src/pages/Resume.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Download as DownloadIcon
} from '@mui/icons-material';
import './Resume.css';

const resumeData = {
  name: 'Sudeep',
  title: 'MERN Stack Developer',
  email: 'sudeepsudee828@gmail.com',
  phone: '+91 7619536101',
  linkedin: 'https://linkedin.com/in/sudee-p',
  github: 'https://github.com/Sudeep4705',
  location: 'Bengaluru, India',

  summary:
    'Web developer with hands-on experience in the MERN stack, dedicated to building fast, responsive and user-friendly web applications. Focused on writing clean, maintainable code and continuously exploring new technologies to deliver high-quality solutions.',

  education: [
    {
      degree: 'Master of Computer Applications',
      school: 'CMR University',
      year: '2023',
      score: 'CGPA: 8.00',
    },
    {
      degree: 'Bachelor of Computer Applications',
      school: 'Mangalore University',
      year: '2021',
      score: 'CGPA: 7.33',
    },
  ],

  skills: [
    'JavaScript', 'TypeScript', 'Node.js', 'Express',
    'React', 'MongoDB', 'Git', 'Docker',  'Razorpay', 'Passport.js','JWT'
  ],

  experience: [],          // add later
  projects: [
    'Airbnb-Clone – Built a full-stack hotel listing web application with search functionality and full CRUD operations  for managing hotel entries. Created RESTful APIs and optimized queries with MongoDB. Integrated Cloudinary for image handling and Mapbox for geolocation.  Used Passport.js for authentication and Mongoose middleware for cascading deletions.',
    'LevelUp – Developed a dynamic frontend using React with functional components, hooks, and props. Styled the application using Bootstrap to provide a clean and modern user interface. Implemented authentication using Passport.js and managed user sessions. Structured the app with reusable components and clean state handling. ',
    'Zerodha-Clone – Developed a React based stock trading platform clone showcasing historical market data and  UI components Utilized hooks and props for component logic and state management. Simulated core features like stock listing, detail views, and charts. ',
    'Go4Give – created a charity website with HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB that allows users to donate to charities and orphanages. JWT-based authentication was put into place for safe user session management and login.  To make online donations easy and safe, I integrated the Razorpay payment gateway. enabled administrative features to handle payments, answer questions, and provide donors with digital receipts',
    
  ],
};

const Resume = () => {
  const handleDownload = () => {
    window.print();               // triggers browser “Save as PDF”
  };

  return (
    <>
      {/* Download FAB */}
      <Button
        variant="primary"
        className="d-print-none"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 1050,
          display: 'flex',
          alignItems: 'center',
          gap: '.5rem',
        }}
        onClick={handleDownload}
      >
        <DownloadIcon fontSize="small" /> Download PDF
      </Button>

      <Container className="resume-page">
        {/* Header */}
        <Row className="mb-4">
          <Col>
            <h1 className="fw-bold">{resumeData.name}</h1>
            <h3 className="text-primary mb-2">{resumeData.title}</h3>
            <div className="d-flex flex-wrap gap-3 text-muted">
              <span><EmailIcon fontSize="small" /> {resumeData.email}</span>
              <span><PhoneIcon fontSize="small" /> {resumeData.phone}</span>
              <span><LocationIcon fontSize="small" /> {resumeData.location}</span>
              <a href={resumeData.github} target="_blank" rel="noreferrer">
                <GitHubIcon fontSize="small" /> GitHub
              </a>
              <a href={resumeData.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon fontSize="small" /> LinkedIn
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          {/* Left column */}
          <Col md={8} className="pe-md-4">
            <Section title="Summary">
              <p>{resumeData.summary}</p>
            </Section>

            <Section title="Experience">
              {resumeData.experience.length ? (
                resumeData.experience.map((exp, i) => (
                  <div key={i} className="mb-3">
                    <h6 className="fw-bold mb-0">{exp.role}</h6>
                    <small className="text-muted">
                      {exp.company} | {exp.period}
                    </small>
                    <p className="mt-1">{exp.desc}</p>
                  </div>
                ))
              ) : (
                <p className="text-muted">Open to new opportunities</p>
              )}
            </Section>

            <Section title="Projects">
              <ul className="mb-0">
                {resumeData.projects.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </Section>
          </Col>

          {/* Right column */}
          <Col md={4} className="border-start ps-md-4">
            <Section title="Education">
              {resumeData.education.map((edu, i) => (
                <div key={i} className="mb-3">
                  <h6 className="fw-bold mb-0">{edu.degree}</h6>
                  <small className="text-muted">{edu.school}</small>
                  <br />
                  <small>{edu.score}</small>
                </div>
              ))}
            </Section>

           <Section title="Skills">
  <div className="d-flex flex-wrap gap-2">
    {resumeData.skills.map((s) => (
      <span key={s} className="badge bg-primary">
        {s}
      </span>
    ))}
  </div>
</Section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const Section = ({ title, children }) => (
  <section className="mb-4">
    <h5 className="fw-bold border-bottom pb-1 mb-3">{title}</h5>
    {children}
  </section>
);

export default Resume;