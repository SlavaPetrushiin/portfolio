import React from 'react';
import classes from './Contacts.module.css';
import Button from '../Button/Button';
import TitleBlock from '../commonBlocks/TitleBlock/TitleBlock';
import Fade from 'react-reveal/Fade';
import * as axios from "axios/index";
import apiFormEmail from "../../api/apiFormEmail";

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            text:  '',
            error: ''
        };
        this.sendForm = this.sendForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name] : value
        });
    };

    sendForm(e){
        e.preventDefault();
        const name = this.state.name;
        const email = this.state.email;
        const text = this.state.text;
        apiFormEmail.sendEmail({name, email, text});
    };

    render() {
        let {name, email, text} = this.state;
        return (
            <div id="contacts" className={classes.contacts}>
                <div className={classes.contactsBlock}>
                    <Fade bottom>
                        <TitleBlock title={"Контакты"}/>
                         <p className={classes.errorMessage}>{this.state.error}</p>
                        <form className={classes.formGroup} name="contact_form" onSubmit={this.sendForm}>
                            <input
                                className={classes.formArea}
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Имя"
                                value={name}
                                onChange={this.handleChange}
                                required
                            />
                            <input
                                className={classes.formArea}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={this.handleChange}
                                required
                            />
                            <textarea
                                className={classes.messageArea}
                                id="text"
                                name="text"
                                placeholder="Введите текст"
                                value={text}
                                onChange={this.handleChange}
                            />
                            <Button title={'Отправить'}/>
                        </form>
                    </Fade>
                </div>
            </div>
        );
    };
};

export default Contacts;
