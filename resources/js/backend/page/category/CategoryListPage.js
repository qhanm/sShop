import React from 'react';
import ReactDOM from "react-dom";
import CategoryFormComponent from "../../components/category/CategoryFormComponent";
import CategoryListComponent from "../../components/category/CategoryListComponent";

function CategoryListPage()
{
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <CategoryFormComponent />
                </div>
                <div className="col-md-8">
                    <CategoryListComponent />
                </div>
            </div>
        </div>
    )
}

export default CategoryListPage;

if (document.getElementById(window.qhnPrefix + 'backend_page_category_list')) {
    ReactDOM.render(<CategoryListPage />, document.getElementById(window.qhnPrefix + 'backend_page_category_list'));
}
