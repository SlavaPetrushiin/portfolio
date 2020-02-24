import React from 'react';
import classes from './Main.module.css';
import avatar from './../../assets/img/avatar.png';

function Main() {
    return (
        <div id='maim' className={classes.main}>
            <div className={classes.container}>
                <div className={classes.greeting}>
                    <span>Привет! </span>
                    <span>Я Вячеслав <span>Петрушин</span></span>
                    <h1>Я frot-end разработчик</h1>
                </div>
                <div className={classes.blockPhoto}>
                    <div className={classes.photoImage} style={{backgroundImage: `url(${avatar})`}}></div>
                </div>
            </div>
        </div>
    );
}

export default Main;
