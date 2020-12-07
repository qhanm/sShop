import React from 'react';
import DataTable from "react-data-table-component";

function CustomDataTable(props)
{
    const { data, columns, title } = props;

    return (
        <DataTable
            title={ title }
            columns={ columns }
            data={ data }
        />
    )
}

export default CustomDataTable;
