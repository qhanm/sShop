import React, { useState } from 'react';
import ReactDOM from "react-dom";
import CategoryFormComponent from "../../components/category/CategoryFormComponent";
import CategoryListComponent from "../../components/category/CategoryListComponent";

import ReactNotification from 'react-notifications-component'
import { ShowNotification } from '../../helpers/NotificationHelper';

function CategoryListPage()
{
    const [editRow, setEditRow] = useState({
        name: "",
        slug: "",
        description: "",
        parent_id: 0,
    });

    const [isUpdate, setIsUpdate] = useState(false);

    const handleOnClickEdit = (row) => {
        setIsUpdate(true);
        setEditRow(row);
    }

    const show = () => {
        return ShowNotification('', 'adasd', 'danger', 'bottom', 'bottom-right');
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <ReactNotification />
                    <button onClick={ show }>Click</button>
                </div> 
                <div className="col-md-4">
                    <CategoryFormComponent row={editRow} isUpdate={ isUpdate }/>
                </div>
                <div className="col-md-8">
                
                
                    <CategoryListComponent handleOnClickEdit={handleOnClickEdit} />
                </div>
            </div>
        </div>
    )
}

export default CategoryListPage;

if (document.getElementById(window.qhnPrefix + 'backend_page_category_list')) {
    ReactDOM.render(<CategoryListPage />, document.getElementById(window.qhnPrefix + 'backend_page_category_list'));
}
