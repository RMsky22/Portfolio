// Hero.jsx

function Hero() {
  
 function scrollToPortfolio () {
    const portfolioSection = document.getElementById('projects');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }};

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Column - Text Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Designer & <br />
            <span className="gradient-text">Developer</span>
          </h1>      
          <button className="hero-cta" onClick={scrollToPortfolio}>View My Work →</button>
        </div>

      </div>
    </section>
  );
};

export default Hero;