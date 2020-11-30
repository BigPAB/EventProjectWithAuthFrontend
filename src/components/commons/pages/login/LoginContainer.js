import React, {useState} from 'react';
import LoginForm from './LoginForm'
import axios from 'axios'
import {useStoreActions} from "easy-peasy";
import {LOGIN_URL} from "../../api/url-const";


const LoginContainer = ({history}) => {

    const { sessionLogin } = useStoreActions(actions => actions.loginStore)

    const initialState = {
        username: "",
        password: ""
    }
    const [user, setUser] = useState(initialState);

    const handleLogin = (formData) => {

        const successLogin = (response) => {
            if (response.data.jwttoken !== undefined) {
                sessionLogin(response.data.jwttoken);
                history.push("/event");
            }
        };

        //api call
        axios.post(LOGIN_URL, formData)
            .then((response) => successLogin(response))
            .catch(error => console.log("error:" + error))
    };

    return (
        <div className="content-section implementation">
            <LoginForm record={user} setUser={setUser} handleSave={handleLogin}/>
        </div>
    )
};

export default LoginContainer;