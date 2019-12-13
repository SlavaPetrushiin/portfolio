import React from 'react';
import classes from './Slogan.module.css';
import Button from '../Button/Button';

function Slogan() {
  return (
    <div className={classes.slogan}>
			<div className={classes.sloganBlock}>
				<h2 className={classes.sloganTitle}>Рассматриваю варианты удаленной рабты</h2>
				<Button title={"Нанять меня"}/>
			</div>
    </div>
  );
}

export default Slogan;
