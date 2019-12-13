import React from 'react';
import classes from './Projects.module.css';
import Project from './Project/Project';

function Projects() {
  return (
    <div className={classes.projects}>
			<div className={classes.projectsBlock}>
				<h2 className={classes.projectsTitle}>Мои Работы</h2>					
				<div className={classes.projectsWorks}>
					<Project />
					<Project />
					<Project />
					<Project />					
				</div>
			</div>
    </div>
  );
}

export default Projects;
