import React from 'react';
import classes from './Button.module.css';

class Button extends React.Component{
	handleClick = (e) => {
		// this.props.sendForm(e);
	}

	render(){
		return (
			<button
				// onClick={this.handleClick}
				style={this.props.style}
				className={classes.button}
			>
				{this.props.title}
			</button>
		);
	}
}

export default Button;