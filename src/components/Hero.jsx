import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="container" style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            gap: '2rem'
        }}>
            <h1 className="animate-fade-in" style={{
                fontSize: '4.5rem',
                maxWidth: '900px',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                background: 'linear-gradient(135deg, #ffffff 0%, #fb923c 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '1rem'
            }}>
                Crafting <span style={{ color: 'var(--primary)' }}>Software Solutions</span> with Innovation & Passion
            </h1>
            <p className="animate-fade-in" style={{
                fontSize: '1.25rem',
                color: 'var(--text-muted)',
                maxWidth: '700px',
                animationDelay: '0.2s'
            }}>
                I am a graduate software engineering professional with a strong passion for website and mobile application development. Eager to apply my technical skills to create cutting-edge projects.
            </p>
            <div className="animate-fade-in" style={{
                display: 'flex',
                gap: '1rem',
                marginTop: '1rem',
                animationDelay: '0.4s'
            }}>
                <a href="#projects" className="btn btn-primary">Discover Projects</a>
                <a href="#contact" className="btn btn-outline">Let's Connect</a>
            </div>
        </section>
    );
};

export default Hero;
