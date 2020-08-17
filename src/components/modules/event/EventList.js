import React from 'react';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";

const EventList = ({dataset, handleNew, handleEdit, handleDelete}) => {

    const renderUser = (event) => {
        return event.user.username
    }
    const renderActions = () => {
        return (
            (rowData) =>
                <span style={{color: 'blue', cursor:'pointer'}} >
                    <Button label="" icon="pi pi-pencil" className="p-button-raised" onClick={() => handleEdit(rowData)}/>
                    <Button label="" icon="pi pi-trash" className="p-button-raised" onClick={() => window.confirm(('Deseja realmente excluir esse cliente'))?handleDelete(rowData):null} />
                </span>
        )
    };

    const columns = [
        {field: "id", header: ('ID')},
        {field: "name", header: ('Nome')},
        {field: "date", header: ('Date'), sortable: false},
        {field: "user", header: ('User'), body:(event) => renderUser(event)},
        {field:"", header: ('Ações'), sortable: false, body: renderActions(), style: {width: '8em', textAlign: 'center'} },
    ];

    return (
        <>
            <Button label="" icon="pi pi-plus" className="p-button-raised" onClick={handleNew}/>
            <DataTable
            // ref={(el) => dataTable = el}
            value={dataset}
            rows={10}
            style={{width: '100%'}}
        >
            {columns.map((col) => {
                return <Column
                    key={col.field}
                    field={col.field}
                    header={col.header}
                    style={col.style}
                    body={col.body === undefined ? null : col.body}
                />;
            })}
        </DataTable>
            </>
    )

}

export default EventList;