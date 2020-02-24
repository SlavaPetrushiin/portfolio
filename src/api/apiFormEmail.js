import * as axios from "axios";

const apiFormEmail = {
    sendEmail({name, email, text}) {
        return axios.post(`https://portfolio-apa-message.herokuapp.com/registration`, {name, email, text})
            .then((response) => {
                alert("Message Sent.");
            }).catch(e => {
                alert(e)
            })
    }
};

export default apiFormEmail;