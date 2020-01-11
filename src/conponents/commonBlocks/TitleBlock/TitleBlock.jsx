import React from 'react';
import classes from './TitleBlock.module.css';

let TitleBlock = (props) => {
	return (
		<>
			<h2 className={classes.title}>{props.title}</h2>
			<div className={classes.line}></div>			
		</>
	)
};

export default TitleBlock;
