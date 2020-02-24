import React from 'react';
import classes from './Project.module.css';

const Project = (props) => {
	const divStyle = {
		background : {
			'backgroundImage': `url('${props.projectInfo.url}')`
		}
	}
	return (
		<div className={classes.projectsWork}>
			<div className={classes.projectsImg} style={divStyle.background}>
				<a href={props.projectInfo.href} target="_blank" className={classes.btnGLink}>Смотреть</a>
				<a href={props.projectInfo.git} target="_blank" className={classes.btnGit}>Git</a>
			</div>
			<div className={classes.projectsDescription}>
				<p className={classes.projectTitle}>{props.projectInfo.title}</p>
				<p className={classes.projectText}>{props.projectInfo.description}</p>
			</div>
		</div>			
	)
}

export default Project;
