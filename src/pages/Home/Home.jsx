import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div>
            <Header />
            <Skill />
            <About/>
            <Education />
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;