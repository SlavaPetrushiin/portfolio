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
                description: "Лейдинг Бургерной",
                url: siteBurger,
                href: "https://slavapetrushiin.github.io/siteBurgers/"
            },
            {
                title: "ToDoList",
                description: "Умное планирование задач!",
                url: "https://www.beingeorge.com/jeffrey/assets/images/p1-1.jpg",
				href: "https://slavapetrushiin.github.io/todolist/"
            },
            {
                title: "Social network",
                description: "Приложение социальная сеть",
                url: "https://www.beingeorge.com/jeffrey/assets/images/p1-1.jpg",
				href: "https://slavapetrushiin.github.io/social-network/"
            },
            {
                title: "Color rating",
                description: "Рейтинг цветов",
                url: "https://www.beingeorge.com/jeffrey/assets/images/p1-1.jpg",
				href: ""
            },
        ]
    }

    render() {
        return (
            <div id='projects' className={classes.projects}>
                <Fade bottom>
                    <div className={classes.projectsBlock}>
                        <TitleBlock title={"Мои Работы"}/>
                        <div className={classes.projectsWorks}>
                            {
                                this.state.projects.map((project, i) => <Project key={i} projectInfo={project}/>)
                            }
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Projects;
