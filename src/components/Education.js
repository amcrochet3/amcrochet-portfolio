import React from 'react';
import data from '../data/education.json';

const Education = () => (
    <section id="education" className="my-5">
        <h2 className="text-center mb-4">Education</h2>
        <div className="row">
            {data.education.map((edu, index) => (
                <div key={index} className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                        <img src={process.env.PUBLIC_URL + edu.logo} className="card-img-top" alt={edu.school} style={{ width: "100px", height: "100px", objectFit: "contain", margin: "10px auto" }} />
                        <div className="card-body">
                            <h5 className="card-title">{edu.school}</h5>
                            <p>{edu.degree}, {edu.field}</p>
                            <small className="text-muted date-italic">{edu.startDate} - {edu.endDate}</small>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Education;