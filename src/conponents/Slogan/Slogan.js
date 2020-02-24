import React from 'react';
import classes from './Slogan.module.css';
import Button from '../Button/Button';
import TitleBlock from '../commonBlocks/TitleBlock/TitleBlock';
import Fade from 'react-reveal/Fade';

function Slogan() {
    return (
        <div className={classes.slogan}>
            <div className={classes.sloganBlock}>
                <Fade left>
                    <TitleBlock title={"Рассматриваю варианты удаленной рабты"}/>
                </Fade>
                <Fade right>
                    <Button title={"Нанять меня"} />
                </Fade>
            </div>
        </div>
    );
}

export default Slogan;
