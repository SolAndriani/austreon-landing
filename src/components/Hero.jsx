import React from 'react';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section className="hero-viewport" aria-labelledby="hero-heading">
      <div className="hero-asset-container" aria-hidden="true">
        <img 
          src="/hero-img.jpg" 
          alt="Austreon" 
          className="hero-media"
          loading="eager"
        />
        <div className="hero-scrim" />
      </div>
      
      <div className="hero-layout">
        <div className="hero-content">
          <p className="hero-eyebrow">El futuro de la odontología</p>
          
          <h1 id="hero-heading" className="hero-headline">
            Tu clínica.<br />Siempre disponible.
          </h1>
          
          <p className="hero-subline">
            Austreon. La inteligencia que organiza tu clínica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;