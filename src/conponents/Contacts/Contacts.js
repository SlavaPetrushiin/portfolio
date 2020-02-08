import React from 'react';
import classes from './Contacts.module.css';
import Button from '../Button/Button';
import TitleBlock from '../commonBlocks/TitleBlock/TitleBlock';
import Fade from 'react-reveal/Fade';

function Contacts() {
    return (
        <div id="contacts" className={classes.contacts}>
            <div className={classes.contactsBlock}>
                <Fade bottom>
                    <form className={classes.formGroup} action="" method="post" name="contact_form">
                        <ul className={classes.contactsGroup}>
                            <li className={classes.contact}>
                                <TitleBlock title={"Контакты"}/>
                            </li>
                            <li className={classes.contact}>
                                <input type="text" name="user_name" placeholder="Имя" required/>
                            </li>
                            <li className={classes.contact}>
                                <input type="email" name="user_email" placeholder="E-mail" required/>
                            </li>
                            <li className={classes.contact}>
                                <textarea type="text" name="name" placeholder="Введите текст"/>
                            </li>
                        </ul>
						<Button title={"Отправить"}/>
                    </form>
                </Fade>
            </div>
        </div>
    );
}

export default Contacts;
