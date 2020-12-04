import React, { useEffect, useState, useMemo } from 'react';
import ReactDOM from "react-dom";
import DataTable from '../DataTable/DataTable';
import categoryService from "../../services/CategoryService";
import SearchInput from "../DataTable/SearchInput";
import BulkAction from "../DataTable/BulkAction";

const columns = [
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Slug',
        selector: 'slug',
        sortable: true,
    },
    {
        name: 'Description',
        selector: 'description',
        sortable: true,
        right: true,
    },
];

function List()
{

    function subHeaderComponent() {
        return (
            <BulkAction key={1}/>
        )
    }

    return(
        <DataTable
            title="Category List"
            columns={columns}
            sortServer={true}
            selectableRows={true}
            apiService={ categoryService }
            sortDefault={ {attribute: 'name'} }
            isSearch={true}
            customHeaderComponent={ subHeaderComponent() }
        />
    )
}

export default List;

if (document.getElementById(window.qhnPrefix + 'backend_category_list')) {
    ReactDOM.render(<List />, document.getElementById(window.qhnPrefix + 'backend_category_list'));
}
