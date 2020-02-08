import React from 'react';
import classes from './Projects.module.css';
import Project from './Project/Project';
import TitleBlock from '../commonBlocks/TitleBlock/TitleBlock';
import siteBurger from './../../assets/img/burgers.jpg';
import Fade from 'react-reveal/Fade';

class Projects extends React.Component {
    state = {
        projects: [
            {
                title: "Burger shop",
                description: "A shop selling burgers, senior project LoftSchoool",
                url: siteBurger,
                href: "https://slavapetrushiin.github.io/siteBurgers/"
            },
            {
                title: "Burger shop",
                description: "A shop selling burgers, senior project LoftSchoool",
                url: "https://www.beingeorge.com/jeffrey/assets/images/p1-1.jpg",
				href: ""
            },
            {
                title: "Burger shop",
                description: "A shop selling burgers, senior project LoftSchoool",
                url: "https://www.beingeorge.com/jeffrey/assets/images/p1-1.jpg",
				href: ""
            },
            {
                title: "Burger shop",
                description: "A shop selling burgers, senior project LoftSchoool",
                url: "https://www.beingeorge.com/jeffrey/assets/images/p1-1.jpg",
				href: ""
            },
        ]
    }

    render() {
        return (
            <div className={classes.projects}>
                <Fade bottom>
                    <div className={classes.projectsBlock}>
                        <TitleBlock title={"Мои Работы"}/>
                        <div className={classes.projectsWorks}>
                            {
                                this.state.projects.map(project => <Project projectInfo={project}/>)
                            }
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Projects;
