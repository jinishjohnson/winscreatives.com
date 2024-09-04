import React from 'react';
import './style/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import DesktopNav from './components/navbar/desktop-nav';
import MobileNav from './components/navbar/mobile-nav';
import Backdrop from "./components/navbar/backdrop";
import Hero from './components/hero/hero';
import Partners from "./components/partners/partners";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Banner from './components/banner/Banner';
import Career from './components/career/career';
import Team  from './components/teams/teams'
import Portfolioinner from './components/portfolio/portfolio-inner';

import Portfolios from './components/portfolio/Portfolios';
// import CareerPopup from './components/career/careerpopup/CareerPopup';

class App extends React.Component {
  state = {
    userIsScrolled: false,
    mobileNavbarOpen: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.userIsScrolled);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.userIsScrolled);
  }

  // Detect if user is scrolled down (used for add/disable extra large navbar)
  userIsScrolled = () => {
    if (window.pageYOffset > 80) {
      this.setState({ userIsScrolled: true });
    } else {
      this.setState({ userIsScrolled: false });
    }
  };

  // On closeMobileMenu click close navbar
  closeMobileMenu = () => {
    this.setState({ mobileNavbarOpen: false });
  };

  // Mobile menu handler
  mobileMenuOpen = () => {
    this.setState({ mobileNavbarOpen: true });
  };

  render() {
    // BACKDROP RENDER
    let backdrop = <Backdrop closeMobileMenu={this.closeMobileMenu} />;
    if (this.state.mobileNavbarOpen) {
      backdrop = (
        <Backdrop closeMobileMenu={this.closeMobileMenu} isOpen={true} />
      );
    }

    // MOBILE NAVBAR RENDER
    let mobileNavbar = <MobileNav />;
    if (this.state.mobileNavbarOpen) {
      mobileNavbar = (
        <MobileNav isOpen={true} closeMobileMenu={this.closeMobileMenu} />
      );
    }

    return (
      <div className="App">
        <Router>
          <DesktopNav
            userIsScrolled={this.state.userIsScrolled}
            mobileMenuOpen={this.mobileMenuOpen}
          />
          {mobileNavbar}
          {backdrop}

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <Hero />
                  <Portfolios/>
                  <About />
                  <Partners />
                  {/* <Contact  /> */}
                </>
              }
            />
            <Route path="/career" element={<Career />} />
          
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path='/team' element={<Team/>}/>
            <Route path="/portfolioinner" element={<Portfolioinner />} />
            
            {/* Add more routes here as needed */}
          </Routes>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
