
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page">
      <h1>Welcome to Twin Cities Housing Support LLC</h1>
      <p>Providing compassionate Housing Stabilization Services in Minnesota.</p>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p>We help individuals overcome housing barriers with personalized support.</p>
    </div>
  );
}

function Services() {
  return (
    <div className="page">
      <h1>Our Services</h1>
      <ul>
        <li>Housing Consultation</li>
        <li>Transition & Sustaining Services</li>
        <li>Community Resource Navigation</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h1>Contact & Referrals</h1>
      <p>Email: info@twincitieshousingsupport.com</p>
      <p>Phone: 612-703-9971</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="footer">
        <p>© 2025 Twin Cities Housing Support LLC</p>
      </footer>
    </Router>
  );
}
