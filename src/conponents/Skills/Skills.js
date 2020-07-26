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
				title: 'HTML 5',
				url: 'https://www.bryan-myers.com/images/1x1/html5.png',
				text: ""
			},
			{
				id: 1,
				title: 'CSS3',
				url: 'https://cdn.iconscout.com/icon/free/png-256/css-118-569410.png',
				text: ""
			},
			{
				id: 3,
				title: 'javascript',
				url: 'https://vectorified.com/images/javascript-icon-35.png',
				text: ""
			},
			{
				id: 3,
				title: 'node js',
				url: 'https://pbs.twimg.com/media/DU-Fi-cWsAICj3d.png:large',
				text: ""
			},
			{
				id: 2,
				title: 'React',
				url: 'https://hsto.org/webt/bf/6m/q3/bf6mq3wmejwlzxaiuiseo0idri0.png',
				text: ""
			},

			{
				id: 4,
				title: 'redux',
				url: 'https://cdn.iconscout.com/icon/free/png-256/redux-283024.png',
				text: ""
			},
		]
	};

	render() {
		let elementsSkills = this.state.skills.map(skill => {
			return <Skill
				text={skill.text}
				title={skill.title}
				url={skill.url}
				key={skill.id} />
		});
		return (
			<div id="skills" className={classes.skills}>
				<Fade bottom>
					<div className={classes.container}>
						<TitleBlock title={"Мои Скилы"} />
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
