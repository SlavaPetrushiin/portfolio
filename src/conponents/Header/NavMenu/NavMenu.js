import React from 'react';
import classes from './NavMenu.module.css';
import {Link, animateScroll as scroll} from "react-scroll";

function NavMenu() {
    return (
        <nav className={classes.nav}>
            <Link
                activeClass={classes.active}
                to="maim"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={classes.link}
            >
                Главная
            </Link>
            <Link activeClass={classes.active}
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  href='#'
                  className={classes.link}
            >
                Скилы
            </Link>
            <Link
                activeClass={classes.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={classes.link}
            >
                Работы
            </Link>
            <Link
                activeClass={classes.active}
                to="contacts"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={classes.link}
            >
                Контакты
            </Link>
        </nav>
    );
}

export default NavMenu;
