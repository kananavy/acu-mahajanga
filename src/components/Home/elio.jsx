import React from 'react';
import { Link } from 'react-scroll';

function App() {
  const scrollToSection = () => {
    // Faire défiler vers la section avec l'ID "ma_section"
    scroller.scrollTo("footer", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  };

  return (
    <div>
      <h1>Mon site web</h1>
      <button onClick={scrollToSection}>Faire défiler automatiquement</button>
      <div>
        <p>Contenu de la page</p>
        <Link
          activeClass="active"
          to="popular"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Faire défiler vers la section
        </Link>
      </div>
      <div id="about">
        <p>Contenu de la section</p>
      </div>
    </div>
  );
}

export default App;
