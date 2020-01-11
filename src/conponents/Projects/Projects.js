import React from 'react';
import classes from './Projects.module.css';
import Project from './Project/Project';
import TitleBlock from '../commonBlocks/TitleBlock/TitleBlock';

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
				<TitleBlock title={"Мои Работы"}/>
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
