import React from 'react';
import classes from './Contacts.module.css';

function Contacts() {
  return (
    <div className={classes.contacts}>
			<div className={classes.contactsBlock}>
				<form className={classes.contactsForm} action="" method="post" name="contact_form">
					<ul className={classes.contactsFormItems}>
						<li className={classes.contactsFormItem}>
							<h2 className={classes.contactsTitle}>Контакты</h2>
						</li>
						<li className={classes.contactsFormItem}>
							<input type="text" name="user_name" placeholder="Имя" required class={classes.formHover}/>
						</li>
						<li className={classes.contactsFormItem}>
							<input type="email" name="user_email" placeholder="E-mail" required class={classes.formHover}/>
						</li>
						<li className={classes.contactsFormItem}>
							<textarea type="text" name="name" placeholder="Введите текст" class={classes.formHover}/>
						</li>												
					</ul>					
				</form>
				<button className={classes.contactsFormBtn}>Отправить</button>
			</div>
    </div>
  );
}

export default Contacts;
