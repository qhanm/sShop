import React, { useEffect, useState } from 'react';
import DataTable from "react-data-table-component";
import ReactDOM from "react-dom";

import Form from "./Form";
import Input from "../../layouts/Input";
import {getError} from "../../helpers/ErrorHelper";
import categoryService from "../../services/CategoryService";

const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' }];
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
    const [category, setCategory] = useState([]);
    function getSubHeaderComponent() {
        return (
            <div>
                <div className="input-group">
                    <input type="text" className="form-control" />
                    <div className="input-group-append">
                        <span className="input-group-text">
                            <i className="bx bx-search-alt-2"></i>
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    useEffect(() => {
        categoryService.getAll().then((result) => {
            setCategory(result.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return(
        <DataTable
            title="CategoryService list"
            columns={columns}
            data={category}
            actions={ getSubHeaderComponent() }

        />
    )
}

export default List;

if (document.getElementById(window.qhnPrefix + 'backend_category_list')) {
    ReactDOM.render(<List />, document.getElementById(window.qhnPrefix + 'backend_category_list'));
}
