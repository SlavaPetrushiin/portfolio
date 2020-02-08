import React from 'react';
import classes from './NavMenu.module.css';

function NavMenu() {
  return (
		<nav className={classes.nav}>
			<a href='#' className={classes.link}>Главная</a>
			<a href='#' className={classes.link}>Скилы</a>
			<a href='#' className={classes.link}>Работы</a>
			<a href='#contacts' className={classes.link}>Контакты</a>
		</nav>
  );
}

export default NavMenu;
