import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Header from './conponents/Header/Header';
import Main from './conponents/Main/Main';
import Skills from './conponents/Skills/Skills';
import Projects from './conponents/Projects/Projects';
import Slogan from './conponents/Slogan/Slogan';
import Contacts from './conponents/Contacts/Contacts';
import Footer from './conponents/Footer/Footer';

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <div className="App">
			<div className="portfolio">
				<Header />
				<Main />
				<Skills />
				<Projects />
				<Slogan />
				<Contacts />
				<Footer />
			</div>
    </div>
  );
}

export default App;
