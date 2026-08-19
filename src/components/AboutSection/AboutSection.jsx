import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/profile.jpg' alt='Maruti Atalatti' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm Maruti Atalatti, a B.Tech student</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;