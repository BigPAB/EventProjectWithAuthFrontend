import React, {useEffect, useState} from 'react';
import {Form, Formik} from "formik";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import * as yup from "yup";
import * as API from "./../../commons/api/axios-api";
import {USER_URL} from "../../commons/api/url-const";
import {FormDropdown} from "../../commons/form/FormInputs";

const EventForm = ({record, handleSave, handleCancel}) => {

    const [users, setUsers] = useState(null);

    const eventValidation = yup.object().shape({
        name: yup.string().required(),
        user: yup.object().required()
    });

    useEffect(() => {
        API.getDataset(USER_URL, setUsers);
    }, []);

    const handleSubmit = (formData) => {
        formData.date = new Date();
        handleSave(formData)
    };

    return (
        <React.Fragment>
            <Formik initialValues={record} onSubmit={handleSubmit} validationSchema={eventValidation}>
                {(props) =>
                    <Form onSubmit={props.handleSubmit}>
                        <div className={'p-grid'}>
                            <div className={'p-col-12'}>
                                <label>Event Name:</label><br />
                                <InputText name={"name"} value={props.values['name']} onChange={props.handleChange}/>
                            </div>
                            <div className={'p-col-12'}>
                                 {users && <FormDropdown
                                                label={'User'}
                                                events={props}
                                                field={"user"}
                                                optionId={"id"}
                                                optionValue={"username"}
                                                suggestions={users}
                                            />
                                }
                            </div>
                        </div>
                        <Button label={"Save"} className="btn btn-primary" onSubmit={props.handleSubmit}/>
                        <Button label={"Cancel"} type={"button"} className="btn btn-primary" onClick={handleCancel}/>
                    </Form>
                }
            </Formik>
        </React.Fragment>
    )
}

export default EventForm;