import { useState, useEffect } from 'react';
import './App.css';
import Home from './Component/Home/Home';
import ThemeSwitcher from './Component/ThemeSwitcher/ThemeSwitcher';
import Services from './Component/Services/Services';
import Team from './Component/Team/Team';
import Pricing from './Component/Pricing/Pricing';
import Clients from './Component/Clients/Clients';
import Testimonials from './Component/Testimonials/Testimonials';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';


function App() {
  const [theme, setTheme] = useState('main')

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

  return (
    <>
    <ThemeSwitcher Menu={setTheme}/>
      <Home />
     <Services /> 
      <Team />
      <Portfolio />
      <Pricing />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
