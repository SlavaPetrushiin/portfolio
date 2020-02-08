import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Header from './conponents/Header/Header';
import Main from './conponents/Main/Main';
import Skills from './conponents/Skills/Skills';
import Projects from './conponents/Projects/Projects';
import Slogan from './conponents/Slogan/Slogan';
import Contacts from './conponents/Contacts/Contacts';
import Footer from './conponents/Footer/Footer';
import Particles from 'react-particles-js';

library.add(fab, faCheckSquare, faCoffee);

const particlesOpt = {
    particles: {
        number: {
            value: 120,
            density: {
                enable: true,
                value_area: 1000
            }
        }
    }
}

function App() {
    return (
        <div className="App">
            <Particles className="particles" params={particlesOpt}/>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Slogan/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
