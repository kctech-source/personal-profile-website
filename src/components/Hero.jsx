import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero__container">
                <div className="hero__text">
                    <h1>Hi, I'm <span>Krishna Chaitanya</span></h1>
                    <p>Full‑Stack Developer crafting clean, scalable web apps.</p>
                    <div className="hero__cta">
                        <a className="btn btn--primary" href="#projects">View Projects</a>
                        <a className="btn" href="#contact">Contact</a>
                    </div>
                </div>
                <div className="hero__art" aria-hidden="true"></div>
            </div>
        </section>
    );
};

export default Hero;


