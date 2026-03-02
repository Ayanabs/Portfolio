import React from 'react';

const Projects = () => {
    const projectList = [
        {
            title: "Elsa",
            description: "Higher Education Guidance Web Application with AI ChatBot. Helps students navigate academic paths with intelligent guidance.",
            tags: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
            color: "var(--primary)"
        },
        {
            title: "E-Commerce Website",
            description: "A comprehensive Supermarket Website developed with a focus on user experience and efficient inventory management.",
            tags: ["HTML", "CSS", "JavaScript", "Java"],
            color: "var(--secondary)"
        },
        {
            title: "Expense Tracker",
            description: "Personal Budget Management App for Android. Features expense logging, category management, and budget analysis.",
            tags: ["React Native", "TypeScript", "Python", "Java"],
            color: "var(--accent)"
        },
        {
            title: "Jobee",
            description: "Mobile Job Recruiting Application for Android designed to streamline the hiring process for both employers and job seekers.",
            tags: ["Flutter", "Dart"],
            color: "#10b981"
        },
        {
            title: "PC2PC",
            description: "A platform for seamless file sharing between devices using web technologies.",
            tags: ["JavaScript"],
            color: "#f59e0b"
        }
    ];

    return (
        <section id="projects" className="container">
            <h2 className="section-title">Academic & Personal Projects</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2.5rem'
            }}>
                {projectList.map((project, index) => (
                    <div key={index} className="glass" style={{
                        borderRadius: '1.5rem',
                        overflow: 'hidden',
                        transition: 'var(--transition-smooth)',
                        cursor: 'pointer',
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        border: `1px solid ${project.color}33`
                    }}>
                        <div style={{
                            height: '8px',
                            width: '50px',
                            backgroundColor: project.color,
                            borderRadius: '4px'
                        }}></div>
                        <h3 style={{ fontSize: '1.5rem' }}>{project.title}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', flexGrow: 1 }}>
                            {project.description}
                        </p>
                        <div style={{
                            display: 'flex',
                            gap: '0.75rem',
                            flexWrap: 'wrap'
                        }}>
                            {project.tags.map(tag => (
                                <span key={tag} style={{
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    color: 'var(--text-main)',
                                    opacity: 0.8
                                }}>
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
