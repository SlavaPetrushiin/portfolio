import React from 'react';
import classes from './Slogan.module.css';

function Slogan() {
  return (
    <div className={classes.slogan}>
			<div className={classes.sloganBlock}>
				<h2 className={classes.sloganTitle}>Рассматриваю варианты удаленной рабты</h2>
				<button className={classes.sloganBtn}>Нанять меня</button>
			</div>
    </div>
  );
}

export default Slogan;
