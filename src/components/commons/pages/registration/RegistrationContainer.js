import React from 'react';
import {REGISTER_URL} from "../../api/url-const";
import axios from 'axios'
import RegistrationForm from "./RegistrationForm";

const RegistrationContainer = ({history}) => {

    const initialState = {
        username: "",
        password: "",
        passwordConfirmation: ""
    }

    const handleSave = (formData) => {
        let callback = axios.post(REGISTER_URL, formData);
        callback
            .then(() => {
                toggleForm();
            })
            .catch((error) => alert(error));
    };


    const toggleForm = () => {
        history.push("/login")
    };

    return <RegistrationForm record={initialState} handleSave={handleSave} handleCancel={toggleForm}/>
}

export default RegistrationContainer;