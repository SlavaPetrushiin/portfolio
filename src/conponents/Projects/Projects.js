import React from 'react';
import classes from './Projects.module.css';

function Projects() {
  return (
    <div className={classes.projects}>
			<div className={classes.projectsBlock}>
				<h2 className={classes.projectsTitle}>Мои Работы</h2>					
				<div className={classes.projectsWorks}>
					<div className={classes.projectsWork}>
						<div className={classes.projectsImg}>
							<button className={classes.projectsBtn}>Смотреть</button>
						</div>
						<div className={classes.projectsDescription}>
							<p>Название проекта</p>
							<p>Краткое описание</p>
						</div>
					</div>
					<div className={classes.projectsWork}>
						<div className={classes.projectsImg}>
							<button className={classes.projectsBtn}>Смотреть</button>
						</div>
						<div className={classes.projectsDescription}>
							<p>Название проекта</p>
							<p>Краткое описание</p>
						</div>
					</div>					
				</div>
			</div>
    </div>
  );
}

export default Projects;
