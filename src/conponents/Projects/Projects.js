import React from 'react';
import classes from './Projects.module.css';
import Project from './Project/Project';

const projects = [
	{title : "Burger shop", description : "A shop selling burgers, senior project LoftSchoool", url : "https://www.beingeorge.com/jeffrey/assets/images/p1-1.jpg" },
	{title : "Burger shop", description : "A shop selling burgers, senior project LoftSchoool", url : "https://www.beingeorge.com/jeffrey/assets/images/p1-1.jpg" },
	{title : "Burger shop", description : "A shop selling burgers, senior project LoftSchoool", url : "https://www.beingeorge.com/jeffrey/assets/images/p1-1.jpg" },
	{title : "Burger shop", description : "A shop selling burgers, senior project LoftSchoool", url : "https://www.beingeorge.com/jeffrey/assets/images/p1-1.jpg" },			
]

function Projects() {
  return (
    <div className={classes.projects}>
			<div className={classes.projectsBlock}>
				<h2 className={classes.projectsTitle}>Мои Работы</h2>					
				<div className={classes.projectsWorks}>
					{
						projects.map(project => <Project projectInfo={project}/>)
					}
				</div>
			</div>
    </div>
  );
}

export default Projects;
