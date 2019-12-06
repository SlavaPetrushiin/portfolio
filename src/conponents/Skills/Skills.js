import React from 'react';
import classes from './Skills.module.css';
import Skill from './Skill/Skill';

class Skills extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			skills : [
				{id : 0, title : 'HTML', url : 'https://www.bryan-myers.com/images/1x1/html5.png', text : "Повседневная практика показывает, что социально-экономическое развитие способствует повышению качества своевременного выполнения сверхзадачи."},
				{id : 0, title : 'CSS', url : 'https://i.ya-webdesign.com/images/css-3-logo-png-7.png', text : "Повседневная практика показывает, что социально-экономическое развитие способствует повышению качества своевременного выполнения сверхзадачи."},
				{id : 0, title : 'React',  url : 'https://hsto.org/webt/bf/6m/q3/bf6mq3wmejwlzxaiuiseo0idri0.png', text : "Повседневная практика показывает, что социально-экономическое развитие способствует повышению качества своевременного выполнения сверхзадачи."},
				{id : 0, title : 'JS', url : 'https://hsto.org/webt/bf/6m/q3/bf6mq3wmejwlzxaiuiseo0idri0.png', text : "Повседневная практика показывает, что социально-экономическое развитие способствует повышению качества своевременного выполнения сверхзадачи."},	
			]
		}
	}
	render(){
		let elementsSkills = this.state.skills.map(skill => {
			return <Skill
				text={skill.text}
				title={skill.title}
				url={skill.url}/>
		})
		return (
			<div className={classes.skills}>
				<div className={classes.container}>
					<h2 className={classes.skillsTitle}>Мои Скилы</h2>
					<div className={classes.line}></div>
					<div className={classes.skillsDescriptions}>
						{elementsSkills}
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;
