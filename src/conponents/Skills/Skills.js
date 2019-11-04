import React from 'react';
import classes from './Skills.module.css';

function Skills() {
  return (
    <div className={classes.skills}>
			<div className={classes.skillsBlock}>
				<h2 className={classes.skillsTitle}>Мои Скилы</h2>
				<div className={classes.skillsElements}>
					<div className={classes.skillsElement}>
						<div className={classes.skillsImg}>
							<img src='https://yt3.ggpht.com/a/AGF-l78_X70PSGi7DejmcIahkJx3N-qDOAnnnu3Njg=s900-c-k-c0xffffffff-no-rj-mo' />
						</div>
						<div className={classes.skillsDescription}>Описание скила</div>
					</div>
					<div className={classes.skillsElement}>
						<div className={classes.skillsImg}>
							<img src="https://i.ytimg.com/vi/PL9oCyvl13A/maxresdefault.jpg"/>
						</div>
						<div className={classes.skillsDescription}>Описание скила</div>
					</div>
					<div className={classes.skillsElement}>
						<div className={classes.skillsImg}></div>
						<div className={classes.skillsDescription}>Описание скила</div>
					</div>										
				</div>
			</div>
    </div>
  );
}

export default Skills;
