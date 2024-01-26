import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#ffebf9' }}>
            <div className="container-fluid">
                <a className="navbar-brand ms-4" href="#">Allison M. Crochet</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto me-4">
                        <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                        <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
                        <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;