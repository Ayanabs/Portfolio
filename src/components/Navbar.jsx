import React from 'react';

const Navbar = () => {
    return (
        <nav className="glass" style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            padding: '1rem 0',
            width: '100%'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    AYANA SAGARA
                </div>
                <ul style={{
                    display: 'flex',
                    gap: '2.5rem',
                    fontSize: '0.9rem',
                    fontWeight: 600
                }}>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem' }}>
                    Consultation
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
