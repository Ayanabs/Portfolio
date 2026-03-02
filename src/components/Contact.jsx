import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="container" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
            paddingBottom: '120px',
            textAlign: 'center'
        }}>
            <h2 className="section-title">Get In Touch</h2>
            <div style={{
                maxWidth: '600px',
                margin: '0 auto',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem',
                alignItems: 'center'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    alignItems: 'center'
                }}>
                    <h3 style={{ fontSize: '1.75rem', maxWidth: '500px' }}>Let's collaborate on your next project.</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                        I'm currently available for software engineering opportunities. Reach out and let's discuss how I can contribute to your team.
                    </p>
                </div>

                <div className="glass" style={{
                    padding: '2.5rem',
                    borderRadius: '1.5rem',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    alignItems: 'center'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', justifyContent: 'center' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            📧
                        </div>
                        <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>ayanasagara.mail@gmail.com</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', justifyContent: 'center' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            📞
                        </div>
                        <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>+94759794730</span>
                    </div>

                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        marginTop: '1rem',
                        width: '100%'
                    }}>
                        <a href="https://github.com/Ayanabs" target="_blank" className="btn btn-outline" style={{ flexGrow: 1 }}>GitHub</a>
                        <a href="https://www.linkedin.com/in/ayana-sagara" target="_blank" className="btn btn-outline" style={{ flexGrow: 1 }}>LinkedIn</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
