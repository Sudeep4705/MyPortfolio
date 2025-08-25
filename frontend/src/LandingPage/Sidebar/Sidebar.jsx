import React, { useState } from 'react';
import styled from 'styled-components';
import { FiHome, FiUser, FiBriefcase, FiMail, FiSun, FiMoon } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';

/* ------------- styled components ------------- */
const Gradient = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  background: linear-gradient(135deg, #dee1ebff 0%, #f4f4f5ff 100%);
`;

const Glass = styled.aside`
  position: fixed;
  inset: 0 auto 0 0;
  width: 260px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  background: ${(p) =>
    p.$dark
      ? 'rgba(18, 18, 18, 0.65)'
      : 'rgba(255, 255, 255, 0.25)'};
  backdrop-filter: blur(12px);
  border-right: 1px solid ${(p) => (p.$dark ? '#333' : '#e0e0e0')};
  color: ${(p) => (p.$dark ? '#fff' : '#111')};
  transition: background 0.3s, color 0.3s;
  z-index: 10;

  @media (max-width: 768px) {
    transform: translateX(${(p) => (p.$open ? '0' : '-100%')});
    width: 220px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 2rem;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
  font-weight: 500;
  text-decoration: none;
  color: inherit;
  transition: color 0.2s;
  &:hover {
    color: #fbbf24;
  }
`;

const ToggleBtn = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: auto;
`;

const Hamburger = styled.div`
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 11;
  color: ${(p) => (p.$dark ? '#fff' : '#111')};
  @media (max-width: 768px) {
    display: block;
  }
`;

/* ------------- main component ------------- */
const navLinks = [
  { label: 'Home',   href: '/',        icon: <FiHome /> },
  { label: 'About',  href: '/about',   icon: <FiUser /> },
  { label: 'Projects',href: '/projects',icon: <FiBriefcase /> },
  { label: 'Resume', href: '/resume',  icon: <FiMail /> },
];

export default function Sidebar() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Gradient />

      <Hamburger $dark={dark} onClick={() => setOpen(!open)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Glass $dark={dark} $open={open}>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Portfolio</h2>
          <Nav>
            {navLinks.map((l) => (
              <NavLink
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
              >
                {l.icon}
                {l.label}
              </NavLink>
            ))}
          </Nav>
        </div>

        <ToggleBtn onClick={() => setDark(!dark)}>
          {dark ? <FiSun /> : <FiMoon />}
        </ToggleBtn>
      </Glass>
    </>
  );
}