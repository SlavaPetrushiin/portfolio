import React from 'react';
import './App.css';
import Header from './conponents/Header/Header';
import Main from './conponents/Main/Main';
import Skills from './conponents/Skills/Skills';
import Projects from './conponents/Projects/Projects';
import Slogan from './conponents/Slogan/Slogan';
import Contacts from './conponents/Contacts/Contacts';
import Footer from './conponents/Footer/Footer';

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
