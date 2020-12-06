import React, { useEffect, useState, useMemo } from 'react';
import ReactDOM from "react-dom";
import DataTable from '../DataTable/DataTable';
import categoryService from "../../services/CategoryService";
import SearchInput from "../DataTable/SearchInput";
import BulkAction from "../DataTable/BulkAction";
import uuid from 'react-uuid';
import CustomAction from "../DataTable/CustomAction";
import CategoryListAction from "./CategoryListAction";

function List()
{

    const [loading, setLoading] = useState(true);
    const [bulkAction, setBulkAction] = useState([]);

    function subHeaderComponent() {
        return (
            <BulkAction key={ uuid() }/>
        )
    }

    const handleSelectRowsChange = (event) => {
        let categoryIds = [];
        event.selectedRows.forEach((value, key) => {
            categoryIds.push(value.id);
        })

        setBulkAction(categoryIds);
    }

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
        {
            cell: row =>  <CustomAction row={row} customActionComponent={ <CategoryListAction row={row} /> }/> ,
            allowOverflow: true,
            button: true,
            width: '56px',
        },
    ];


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
            onSelectedRowsChange={ handleSelectRowsChange }
            isLoading={ loading }
            //onRowClicked={onRowClicked}
        />
    )
}

export default List;

if (document.getElementById(window.qhnPrefix + 'backend_category_list')) {
    ReactDOM.render(<List />, document.getElementById(window.qhnPrefix + 'backend_category_list'));
}
