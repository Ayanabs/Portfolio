import React from 'react';

const About = () => {
    const skills = [
        'HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'C#', 'Angular', '.NET',
        'Flutter', 'Dart', 'MySQL', 'MongoDB', 'Express JS', 'Firebase', 'Docker',
        'Laravel', 'React', 'React Native', 'PHP', 'TypeScript'
    ];

    return (
        <section id="about" className="container" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4rem',
            padding: '100px 0'
        }}>
            <h2 className="section-title">Experience & Education</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem'
            }}>
                <div className="glass" style={{
                    padding: '2rem',
                    borderRadius: '1.5rem',
                }}>
                    <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Professional Experience</h3>
                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Software Engineering Intern</h4>
                        <div style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>SLT Telecom | Colombo, Sri Lanka</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>08/2025 - 02/2026</div>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Worked at the Head Office on various software initiatives.</p>
                    </div>

                    <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Technical Arsenal</h3>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.6rem'
                    }}>
                        {skills.map(skill => (
                            <span key={skill} style={{
                                padding: '0.4rem 0.8rem',
                                borderRadius: '8px',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--glass-border)'
                            }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="glass" style={{
                        padding: '2rem',
                        borderRadius: '1.5rem',
                    }}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Education</h3>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Bachelor (Hons) in Software Engineering</h4>
                            <div style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '0.85rem' }}>NSBM Green University</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>2022 - 2025 | Pitipana</div>
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Advanced Level Examination</h4>
                            <div style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '0.85rem' }}>Louvre College - Pannipitiya</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>2019 - 2021</div>
                        </div>
                    </div>

                    <div className="glass" style={{
                        padding: '2rem',
                        borderRadius: '1.5rem',
                        textAlign: 'center'
                    }}>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>Objective</h3>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                            "Seeking opportunities to contribute to cutting-edge projects and continue growing my expertise while supporting the goals of a forward-thinking organization."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
