import React from 'react';
import classes from './Main.module.css';

function Main() {
  return (
    <div className={classes.main}>
			<div className={classes.container}>
				<div className={classes.greeting}>
					<p>Привет!</p>
					<p>Меня зовут Вячеслав</p>
					<p>Я frot-end разработчик</p>
				</div>
				<div className={classes.photo}>
					{/* <img src="#" /> */}
				</div>				
			</div>
    </div>
  );
}

export default Main;
