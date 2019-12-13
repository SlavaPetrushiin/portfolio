import React from 'react';
import classes from './Contacts.module.css';
import Button from '../Button/Button';

function Contacts() {
  return (
    <div className={classes.contacts}>
			<div className={classes.contactsBlock}>
				<form className={classes.formGroup} action="" method="post" name="contact_form">
					<ul className={classes.contactsGroup}>
						<li className={classes.contact}>
							<h2 className={classes.contactsTitle}>Контакты</h2>
						</li>
						<li className={classes.contact}>
							<input type="text" name="user_name" placeholder="Имя" required className={classes.formHover}/>
						</li>
						<li className={classes.contact}>
							<input type="email" name="user_email" placeholder="E-mail" required className={classes.formHover}/>
						</li>
						<li className={classes.contact}>
							<textarea type="text" name="name" placeholder="Введите текст" className={classes.formHover}/>
						</li>												
					</ul>					
				</form>
				<Button title={"Отправить"} />
			</div>
    </div>
  );
}

export default Contacts;
