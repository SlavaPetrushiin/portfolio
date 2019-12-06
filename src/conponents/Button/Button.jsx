import React from 'react';

class Button extends React.Component{
	handleClick(e){

	}

	render(){
		return (
			<button
				onClick={this.handleClick}
				className={this.props.nameClass}
			>
				{this.props.title}
			</button>
		);
	}
}

export default Button;