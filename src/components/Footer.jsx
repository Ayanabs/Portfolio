import React from 'react';

const Footer = () => {
    return (
        <footer className="glass" style={{
            padding: '3rem 0',
            borderTop: '1px solid var(--glass-border)',
            marginTop: 'auto'
        }}>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem'
            }}>
                <div style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    AYANA SAGARA
                </div>
                <div style={{
                    display: 'flex',
                    gap: '2rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)'
                }}>
                    <a href="#hero">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <div style={{
                    display: 'flex',
                    gap: '1.5rem',
                    fontSize: '1.25rem'
                }}>
                    <a href="https://github.com/Ayanabs" target="_blank" style={{ opacity: 0.6 }}>🐙</a>
                    <a href="https://www.linkedin.com/in/ayana-sagara" target="_blank" style={{ opacity: 0.6 }}>🔗</a>
                </div>
                <div style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    textAlign: 'center'
                }}>
                    &copy; {new Date().getFullYear()} Ayana Sagara. Built with Passion & Precision.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
