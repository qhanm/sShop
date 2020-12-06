import CustomAction from "../DataTable/CustomAction";
import CategoryListAction from "./CategoryListActionComponent";
import React from "react";

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
]

export default columns;
