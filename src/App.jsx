import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header.jsx';
import About from './About/About.jsx';
import Projects from './Projects/Projects.jsx';
import Contact from './Contact/Contact.jsx';
import Footer from './Footer/Footer.jsx';
import SWMS from './Projects/SWMS.jsx';

function HomePage() {
  return (
    <>
      <Header />
      <About />
      
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/swms" element={<><Header /><SWMS /><Footer /></>} />
      <Route path="/contact" element={<><Header /><Contact /><Footer /></>} />
    </Routes>
  );
}

export default App;
