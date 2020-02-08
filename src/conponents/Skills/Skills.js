import React from 'react';
import classes from './Skills.module.css';
import Skill from './Skill/Skill';
import TitleBlock from '../commonBlocks/TitleBlock/TitleBlock';
import Fade from 'react-reveal/Fade';


class Skills extends React.Component {
    state = {
        skills: [
            {
                id: 0,
                title: 'HTML',
                url: 'https://www.bryan-myers.com/images/1x1/html5.png',
                text: "Повседневная практика показывает, ."
            },
            {
                id: 1,
                title: 'CSS',
                url: 'https://i.ya-webdesign.com/images/css-3-logo-png-7.png',
                text: "Повседневная практика показывает, что социально-экономическое развитие."
            },
            {
                id: 2,
                title: 'React',
                url: 'https://hsto.org/webt/bf/6m/q3/bf6mq3wmejwlzxaiuiseo0idri0.png',
                text: "Повседневная практика показывает,."
            },
            {
                id: 3,
                title: 'javascript',
                url: 'https://hsto.org/webt/bf/6m/q3/bf6mq3wmejwlzxaiuiseo0idri0.png',
                text: "Повседневная практика ."
            },
        ]
    }

    render() {
        let elementsSkills = this.state.skills.map(skill => {
            return <Skill
                text={skill.text}
                title={skill.title}
                url={skill.url}
                key={skill.id}/>
        })
        return (
            <div className={classes.skills}>
				<Fade bottom>
					<div className={classes.container}>
						<TitleBlock title={"Мои Скилы"}/>
						<div className={classes.skillsDescriptions}>
							{elementsSkills}
						</div>
					</div>
				</Fade>
            </div>
        );
    }
}

export default Skills;
