import React from 'react';
import classes from './Project.module.css';
import Button from '../../Button/Button';

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
				<Button title={"Смотреть"} style={divStyle.btn}/>
			</div>
			<div className={classes.projectsDescription}>
				<p>{props.projectInfo.title}</p>
				<p>{props.projectInfo.description}</p>
			</div>
		</div>			
	)
}

export default Project;
