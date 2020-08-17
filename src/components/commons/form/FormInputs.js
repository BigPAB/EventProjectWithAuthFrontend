import React from "react";
import {Dropdown} from "primereact/dropdown";


export const FormDropdown = ({events, field, optionId, optionValue, suggestions, label}) => {

    const handleChange = (e) => {
        events.setFieldValue(field, {[optionId]: e.value});
    }

    const getOptions = suggestions.map(option => {return {label: option[optionValue], value: option[optionId]}})

    return (
        <>
            <label>{label}</label><br />
            <Dropdown name={field} value={events.values[field][optionId]} options={getOptions} onChange={handleChange} placeholder="Select Data"/>
        </>
    )
}