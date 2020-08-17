import React from 'react';
import {Form, Formik} from "formik";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import * as yup from 'yup'

const LoginForm = ({record, handleSave}) => {

    const userValidation = yup.object().shape({
        username: yup.string().required("Campo Obrigatório!"),
        password: yup.string().required("Campo Obrigatório!")
    });

    const handleSubmit = (formData, actions) => {
        console.log('formData', formData);
        handleSave(formData)
    };

    return (
        <React.Fragment>
            <Formik initialValues={record} onSubmit={handleSubmit} validationSchema={userValidation}>
                {(props) =>
                    <Form onSubmit={props.handleSubmit}>
                        <div className={'p-grid'}>
                            <div className={'p-col-12'}>
                                <label>Login:</label><br />
                                <InputText name={"username"} value={props.values['username']} onChange={props.handleChange}/>
                            </div>
                            <div className={'p-col-12'}>
                                <label>Password:</label><br />
                                <InputText name={"password"} value={props.values['password']} type={'password'} onChange={props.handleChange}/>
                            </div>
                        </div>
                        <Button label={"Log In"} className="btn btn-primary" onSubmit={props.handleSubmit}/>
                        <a href={"/register"}>Register</a>
                    </Form>
                }
            </Formik>
        </React.Fragment>
    )
};

export default LoginForm;