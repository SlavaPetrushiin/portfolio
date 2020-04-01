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
                title: 'Burger shop',
                description: 'В приложении использовались следующии технологии: HTML, Sass, JavaScript.',
                url: siteBurger,
                href: 'https://slavapetrushiin.github.io/siteBurgers/',
                git: 'https://github.com/SlavaPetrushiin/siteBurgers',
            },
            {
                title: 'ToDoList',
                description: 'В приложении использовались следующии технологии: HTML, CSS, React, Redux, Typescript, Axios.',
                url: 'https://i.etsystatic.com/14994315/r/il/f970b9/1234028275/il_1588xN.1234028275_r0k3.jpg',
				href: 'https://slavapetrushiin.github.io/todolist/',
                git: 'https://github.com/SlavaPetrushiin/todolist',
            },
            {
                title: 'Questionnaire',
                description: 'В приложении использовались следующии технологии: HTML, CSS, React, Redux, Axios. Приложение размещено на хостинге Firebase.',
                url: 'https://static.quizur.com/i/b/5a1c3cd3a27e37.810582855a1c3cd384f539.30277746.png',
				href: 'https://react-quiz-9c3cb.web.app/',
                git: 'https://github.com/SlavaPetrushiin/react-quiz'
            },
            {
                title: 'Color rating',
                description: 'Рейтинг цветов',
                url: 'https://www.beingeorge.com/jeffrey/assets/images/p1-1.jpg',
				href: '',
            },
        ]
    };

    render() {
        return (
            <div id='projects' className={classes.projects}>
                <Fade bottom>
                    <div className={classes.projectsBlock}>
                        <TitleBlock title={'Мои Работы'}/>
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
