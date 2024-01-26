import React from 'react';
import data from '../data/experience.json';

const Experience = () => (
    <section id="experience" className="my-5">
        <h2 className="text-center mb-4">Experience</h2>
        <div className="row">
            {data.experience.map((job, index) => (
                <div key={index} className="col-12 mb-4">
                    <div className="card flex-row flex-wrap">
                        <div className="card-header border-0" style={{ width: '25%' }}>
                            <img src={process.env.PUBLIC_URL + job.logo} alt={job.company} style={{ width: "80px", height: "80px", objectFit: "contain" }} />
                            <h5 className="mt-2">{job.company}</h5>
                            <h6>{job.title}</h6>
                            <span className="date-italic"><small>{job.startDate} - {job.endDate}</small></span>
                        </div>
                        <div className="card-body text-left" style={{ width: '75%' }}>
                            <ul>
                                {job.achievements.map((achievement, achIndex) => (
                                    <li key={achIndex}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Experience;
