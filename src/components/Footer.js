import React from 'react';

const Footer = () => (
    <footer className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#ffebf9' }}>
        <div className="container-fluid">
            <div className="d-flex justify-content-end w-100">
                <div className="navbar-nav">
                    <a href="https://github.com/amcrochet3" className="nav-item nav-link" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github footer-icon"></i>
                    </a>
                    <a href="https://linkedin.com/in/allison-crochet/" className="nav-item nav-link" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in footer-icon"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
