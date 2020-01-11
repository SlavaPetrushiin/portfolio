import React from 'react';
import classes from './Skill.module.css';

function Skill(props) {
	const divStyle = {
		backgroundImage: {
			'backgroundImage': `url("${props.url}")` 
		}
	}

  return (
		<div className={classes.skill}>
			<div className={classes.skillImgBlock}>
				<div className={classes.skillImg} style={divStyle.backgroundImage}></div>
			</div>
			<div className={classes.skillDescription}>
				<h3 className={classes.skillTitle}>{props.title}</h3>
				<p className={classes.skillText}>{props.text}</p>
			</div>
		</div>
  );
}

export default Skill;
