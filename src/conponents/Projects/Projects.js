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
                href: "https://slavapetrushiin.github.io/siteBurgers/",
                git: "https://github.com/SlavaPetrushiin/siteBurgers"
            },
            {
                title: "ToDoList",
                description: "Умное планирование задач!",
                url: "https://i.etsystatic.com/14994315/r/il/f970b9/1234028275/il_1588xN.1234028275_r0k3.jpg",
				href: "https://slavapetrushiin.github.io/todolist/",
                git: "https://github.com/SlavaPetrushiin/todolist"
            },
            {
                title: "Social network",
                description: "Приложение социальная сеть",
                url: "https://lr.maya.services/images/main_lr_logo.jpg",
				href: "https://slavapetrushiin.github.io/social-network/",
                git: "https://github.com/SlavaPetrushiin/social-network"
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
