import React from 'react';
import data from '../data/skills.json';

const Skills = () => (
    <section id="skills" className="my-5">
        <h2 className="text-center mb-4">Skills</h2>
        <div className="row">
            {Object.entries(data.skills).map(([category, skills], index) => (
                <div key={index} className="col-12 mb-4">
                    <div className="card flex-row flex-wrap">
                        <div className="card-header border-0" style={{ width: '25%' }}>
                            <h4 className="my-2">{category}</h4>
                        </div>
                        <div className="card-body d-flex flex-wrap" style={{ width: '75%' }}>
                            {skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="d-flex align-items-center m-2">
                                    <img src={process.env.PUBLIC_URL + skill.logo} alt={skill.skill} style={{ width: "50px", height: "50px", objectFit: "contain", marginRight: "10px" }} />
                                    <p className="mb-0">{skill.skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Skills;
