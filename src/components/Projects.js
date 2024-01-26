import React from 'react';
import data from '../data/projects.json';

const Projects = () => (
    <section id="projects" className="my-5">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
            {data.projects.map((project, index) => (
                <div key={index} className="col-lg-4 text-left mb-4">
                    <div className="card h-100">
                        {project.img && <img src={project.img} className="card-img-top" alt={project.name} />}
                        <div className="card-body">
                            <h3 className="card-title">{project.name}</h3>
                            <p className="card-text">{project.description}</p>
                            <p>
                                <strong>Tech Stack:</strong> {project.techStack.join(', ')}
                            </p>
                            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                            {project.demo && <span> | <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a></span>}
                            {project.website && <span> | <a href={project.website} target="_blank" rel="noopener noreferrer">Website</a></span>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Projects;
