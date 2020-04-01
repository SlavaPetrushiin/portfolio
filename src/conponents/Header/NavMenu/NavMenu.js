import React, {useState} from 'react';
import classes from './NavMenu.module.css';
import {Link} from "react-scroll";

const links = [
    {title: 'Главная', to: "maim"},
    {title: 'Скилы', to: "skills"},
    {title: 'Работы', to: "projects"},
    {title: 'Контакты', to: "contacts"},
];

const MenuToggle = ({toggle, handleToggle}) => {
    let cls = [
        classes.menuIcon
    ];

    if (!toggle) {
        cls.push(classes.menuIconActive);
    }

    return (
        <div
            id={classes.menuTogle}
            className={cls.join(' ')}
            onClick={handleToggle}
        >
            <div className={classes.menuIconLine}></div>
        </div>
    );
};

const NavItem = (props) => {
    return(
        <li className={classes.navItem}>
            <Link
                activeClass={classes.active}
                to={props.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={classes.navLink}
            >
                {props.title}
            </Link>
        </li>
    )
};


function NavMenu() {
    const [toggle, setToggle] = useState(true);

    const clsMobile = [
        classes.mobileNav
    ];

    if(!toggle){
        clsMobile.push(classes.mobileNavActive)
    }

    let handleToggle = () => {
        if (toggle) {
            setToggle(false);
        } else {
            setToggle(true);
        }
    };

    return (
        <nav className={classes.navWrapper}>

            {/*desktop nav*/}
            <ul className={classes.nav}>
                {
                    links.map((link, index) => {
                        return <NavItem key={index} {...link}/>
                    })
                }
            </ul>

            <MenuToggle toggle={toggle} handleToggle={handleToggle}/>

            {/*mobile nav*/}
            <div id={classes.mobileNav} className={clsMobile.join(' ')}>
                <ul className={classes.mobileNavList}>
                    {
                        links.map((link, index) => {
                            return <NavItem key={index} {...link}/>
                        })
                    }
                </ul>
            </div>

        </nav>
    );
}

export default NavMenu;
