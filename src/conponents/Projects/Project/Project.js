import React from 'react';
import classes from './Project.module.css';

const Project = (props) => {
	const divStyle = {
		btn : {
			'position': 'absolute',
			'top': `50%`,
			'left': `50%`,
			'transform': `translate(-50%, -50%)`
		},
		background : {
			'backgroundImage': `url('${props.projectInfo.url}')`
		}
	}
	return (
		<div className={classes.projectsWork}>
			<div className={classes.projectsImg} style={divStyle.background}>
				<a href={props.projectInfo.href} target="_blank" style={divStyle.btn}>Смотреть</a>
			</div>
			<div className={classes.projectsDescription}>
				<p className={classes.projectTitle}>{props.projectInfo.title}</p>
				<p className={classes.projectText}>{props.projectInfo.description}</p>
			</div>
		</div>			
	)
}

export default Project;
