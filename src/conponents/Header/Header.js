import React from 'react';
import classes from './Header.module.css';
import NavMenu from './NavMenu/NavMenu';

function Header() {
  return (
    <header className={classes.header}>
			<div className={classes.container}>
				<NavMenu />
			</div>
    </header>
  );
}

export default Header;
