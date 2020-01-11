import React from 'react';
import classes from './Slogan.module.css';
import Button from '../Button/Button';
import TitleBlock from '../commonBlocks/TitleBlock/TitleBlock';

function Slogan() {
  return (
    <div className={classes.slogan}>
			<div className={classes.sloganBlock}>
				<TitleBlock title={"Рассматриваю варианты удаленной рабты"}/>
				<Button title={"Нанять меня"}/>
			</div>
    </div>
  );
}

export default Slogan;
