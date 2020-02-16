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
                    <TitleBlock title={"Контакты"}/>
                    <form className={classes.formGroup} action="" method="post" name="contact_form">
                        <input className={classes.formArea} type="text" name="user_name" placeholder="Имя" required/>
                        <input className={classes.formArea} type="email" name="user_email" placeholder="E-mail" required/>
                        <textarea className={classes.messageArea} type="text" name="name" placeholder="Введите текст"/>
                        <Button title={"Отправить"}/>
                    </form>
                </Fade>
            </div>
        </div>
    );
}

export default Contacts;
