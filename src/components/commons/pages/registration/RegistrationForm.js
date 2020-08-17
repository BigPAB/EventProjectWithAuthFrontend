import React from 'react';
import * as yup from "yup";
import {Form, Formik} from "formik";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";

const RegistrationForm = ({record, handleSave, handleCancel}) => {
    const userValidation = yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required(),
        passwordConfirmation: yup.string().required()
    });

    const handleSubmit = (formData) => {
        handleSave(formData)
    };

    return (
        <React.Fragment>
            <Formik initialValues={record} onSubmit={handleSubmit} validationSchema={userValidation}>
                {(props) =>
                    <Form onSubmit={props.handleSubmit}>
                        <div className={'p-grid'}>
                            <div className={'p-col-12'}>
                                <label>Username:</label><br />
                                <InputText name={"username"} value={props.values['username']} onChange={props.handleChange}/>
                            </div>
                            <div className={'p-col-12'}>
                                <label>Choose a Password:</label><br />
                                <InputText name={"password"} value={props.values['password']} type={'password'} onChange={props.handleChange}/>
                            </div>
                            <div className={'p-col-12'}>
                                <label>Confirm Password</label><br />
                                <InputText name={"passwordConfirmation"} value={props.values['passwordConfirmation']} type={'password'} onChange={props.handleChange}/>
                            </div>
                        </div>
                        <Button label={"Register"} className="btn btn-primary" onSubmit={props.handleSubmit}/>
                        <Button label={"Cancel"} type={"button"} className="btn btn-primary" onClick={handleCancel}/>
                    </Form>
                }
            </Formik>
        </React.Fragment>
    )
};

export default RegistrationForm;