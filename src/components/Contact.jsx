import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="container" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4rem',
            paddingBottom: '120px'
        }}>
            <h2 className="section-title">Get In Touch</h2>
            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '3rem'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem'
                }}>
                    <h3 style={{ fontSize: '1.75rem' }}>Let's collaborate on your next project.</h3>
                    <p style={{ color: 'var(--text-muted)' }}>
                        I'm currently available for software engineering opportunities. Reach out and let's discuss how I can contribute to your team.
                    </p>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                📧
                            </div>
                            <span style={{ fontWeight: 600 }}>ayanasagara.mail@gmail.com</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                📞
                            </div>
                            <span style={{ fontWeight: 600 }}>+94759794730</span>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        marginTop: '1rem'
                    }}>
                        <a href="https://github.com/Ayanabs" target="_blank" className="btn btn-outline" style={{ flexGrow: 1 }}>GitHub</a>
                        <a href="https://www.linkedin.com/in/ayana-sagara" target="_blank" className="btn btn-outline" style={{ flexGrow: 1 }}>LinkedIn</a>
                    </div>
                </div>

                <form className="glass" style={{
                    padding: '2.5rem',
                    borderRadius: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Name</label>
                        <input type="text" placeholder="Your Name" style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '0.5rem',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid var(--glass-border)',
                            color: 'white',
                            outline: 'none'
                        }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Email</label>
                        <input type="email" placeholder="Your Email" style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '0.5rem',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid var(--glass-border)',
                            color: 'white',
                            outline: 'none'
                        }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Message</label>
                        <textarea rows="4" placeholder="Your Message" style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '0.5rem',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid var(--glass-border)',
                            color: 'white',
                            outline: 'none',
                            resize: 'none'
                        }}></textarea>
                    </div>
                    <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
