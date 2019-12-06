import React from 'react';
import classes from './Skill.module.css';

function Skill(props) {
	const divStyle = {
		backgroundImage: {
			'background-image': `url("${props.url}")` 
		}
	}

  return (
		<div className={classes.skill}>
			<div className={classes.skillImgBlock}>
				<div className={classes.skillImg} style={divStyle.backgroundImage}></div>
			</div>
			<div className={classes.skillDescription}>
				<h3 className={classes.skillTitle}>{props.title}</h3>
				<p>{props.text}</p>
			</div>
		</div>
  );
}

export default Skill;
