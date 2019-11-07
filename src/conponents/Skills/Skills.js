import React from 'react';
import classes from './Skills.module.css';

function Skills() {
  return (
    <div className={classes.skills}>
			<div className={classes.skillsBlock}>
				<h2 className={classes.skillsTitle}>Мои Скилы</h2>
				<div className={classes.skillsDescriptions}>
					<div className={classes.skill}>
						<div className={classes.skillImg}>
							<img src='https://www.bryan-myers.com/images/1x1/html5.png' />
						</div>
						<div className={classes.skillDescription}>
							<h3 className={classes.skillTitle}>HTML5</h3>
							<p>Повседневная практика показывает, что социально-экономическое развитие способствует повышению качества своевременного выполнения сверхзадачи.</p>
						</div>
					</div>
					<div className={classes.skill}>
						<div className={classes.skillImg}>
							<img src="https://i.ya-webdesign.com/images/css-3-logo-png-7.png"/>
						</div>
						<div className={classes.skillDescription}>
							<h3 className={classes.skillTitle}>CSS3</h3>
							<p>Реплицированные с зарубежных источников, современные исследования объективно рассмотрены соответствующими инстанциями. </p>
						</div>
					</div>
					<div className={classes.skill}>
						<div className={classes.skillImg}>
							<img src='https://hsto.org/webt/bf/6m/q3/bf6mq3wmejwlzxaiuiseo0idri0.png' />							
						</div>
						<div className={classes.skillDescription}>
							<h3 className={classes.skillTitle}>React</h3>
							<p>Дурное дело нехитрое: логотип крупнейшей компании по производству мыльных пузырей не стал ограничивающим фактором</p>
						</div>
					</div>										
				</div>
			</div>
    </div>
  );
}

export default Skills;
