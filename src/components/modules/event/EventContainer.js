import React, {useEffect, useState} from 'react';
import * as API from './../../commons/api/axios-api';
import {EVENT_URL} from "../../commons/api/url-const";
import EventForm from "./EventForm";
import EventList from "./EventList";

const EventContainer = () => {

    const initialState = {
        name: "",
        date: "",
        user: ""
    }

    const [events, setEvents] = useState(null);
    const [event, setEvent] = useState(initialState);
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        getDatasetFromApi();
    }, [])

    const getDatasetFromApi = () => {
        API.getDataset(EVENT_URL, setEvents);
    };

    const handleSave = (formData) => {
        let callback;
        if (formData.id) {
            callback = API.putData(EVENT_URL, formData.id, formData);
        } else {
            callback = API.postData(EVENT_URL, formData);
        }
        callback
            .then(() => {
                toggleForm();
                getDatasetFromApi();
            })
            .catch((error) => alert(error));
    };

    const toggleForm = () => {
        setEditing(!editing);
    };

    const handleNew = () => {
        setEvent(initialState);
        toggleForm();
    };

    const handleEdit = (rowData) => {
        setEvent(rowData);
        toggleForm();
    };

    const handleDelete = (rowData) => {
        API.deleteData(EVENT_URL, rowData.id)
            .then(() => getDatasetFromApi());
    };

    return (
        <>
            {editing ?
                <EventForm record={event} handleSave={handleSave} handleCancel={toggleForm}/> :
                <EventList dataset={events} handleNew={handleNew} handleEdit={handleEdit} handleDelete={handleDelete}/>
            }
        </>
    )

}

export default EventContainer;
