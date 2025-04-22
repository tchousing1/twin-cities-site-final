
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
function Page({ title, children }) { return <div className='page'><h1>{title}</h1><p>{children}</p></div>; }
export default function App() {
  return (
    <Router>
      <nav className='navbar'>
        <Link to='/'>Home</Link><Link to='/about'>About</Link><Link to='/services'>Services</Link><Link to='/contact'>Contact</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Page title='Welcome to Twin Cities Housing Support LLC'>Providing compassionate Housing Stabilization Services in Minnesota.</Page>} />
        <Route path='/about' element={<Page title='About Us'>We help individuals overcome housing barriers with personalized support.</Page>} />
        <Route path='/services' element={<Page title='Our Services'>Housing Consultation, Transition Services, Resource Navigation</Page>} />
        <Route path='/contact' element={<Page title='Contact & Referrals'>Email: info@twincitieshousingsupport.com | Phone: 612-703-9971</Page>} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <footer className='footer'>© 2025 Twin Cities Housing Support LLC</footer>
    </Router>
  );
}
