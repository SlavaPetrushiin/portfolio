import React from 'react';
import classes from './Project.module.css';
import Button from '../../Button/Button';


const Project = (props) => {
	const divStyle = {
		'position': 'absolute',
		'top': `50%`,
		'left': `50%`,
		'transform': `translate(-50%, -50%)`
	}

	return (
		<div className={classes.projectsWork}>
			<div className={classes.projectsImg}>
				<Button title={"Смотреть"} style={divStyle}/>
			</div>
			<div className={classes.projectsDescription}>
				<p>Название проекта</p>
				<p>Краткое описание</p>
			</div>
		</div>			
	)
}

export default Project;
