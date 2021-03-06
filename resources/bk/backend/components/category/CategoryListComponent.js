import React, { useEffect, useState, useRef } from 'react';
import DataTable from "react-data-table-component";
import categoryService from "../../services/CategoryService";
import SearchInput from "../DataTable/SearchInput";
import BulkAction from "../DataTable/BulkAction";
import uuid from 'react-uuid';
import CustomAction from "../DataTable/CustomAction";
import Loading from '../../layouts/Loadding';

function CategoryListComponent(props)
{
    const { handleOnClickEdit } = props

    const typingTimeoutRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [bulkAction, setBulkAction] = useState([]);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({
        per_page: 2,
        page: 1,
        sort: "name",
        search: "",
    });

    const [pagination, setPagination] = useState({
        total: 0,
        to: 20,
        current_page: 1
    })

    const handleHeaderComponent = () => {
        return (
            <div>
                <BulkAction key={ uuid() }/>
                <SearchInput key={uuid()} search={search} onChangeSearch={ handleSearch }/>
            </div>
        )
    }

    const handleSelectRowsChange = (event) => {
        let categoryIds = [];
        event.selectedRows.forEach((value, key) => {
            categoryIds.push(value.id);
        })

        setBulkAction(categoryIds);
    }

    useEffect(() => {
        categoryService.getAll(filters).then((result) => {
            setData(result.data.data);
            setLoading(false);
            setPagination(result.data.meta);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        })
    }, [filters])

    const handleChangePage = (page, totalRows) => {
        setLoading(true);
        setFilters({
            ...filters,
            page
        })
    }

    const handleChangeRowPerPage = (currentRowPerPage, currentPage) => {
        setLoading(true);
        const per_page = currentRowPerPage;
        setFilters({
            ...filters,
            per_page,
            page: 1,
        })
    }

    const handleSort = (column, sortDirection) => {
        setLoading(true);
        let sort = column.selector;
        if(sortDirection === 'desc') sort = '-' + sort;

        setFilters({
            ...filters,
            sort,
        })
    }

    function handleSearch(text) {
        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            setLoading(true);
            setFilters({ ...filters, search: text });
            setSearch(text);
        }, 500);


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
            cell: row =>  <CustomAction row={row} handleOnClickEdit={ handleOnClickEdit }/> ,
            allowOverflow: true,
            button: true,
            width: '56px',
        },
    ]

    return(
        <div className={ "card" + (loading === true ? parent-loading : "") }>
            {
                loading === true ? <Loading /> : null
            }
            <div className="card-body">
                <DataTable
                    title="Category List"
                    columns={ columns }
                    data={ data }
                    onSort={ handleSort }
                    sortServer={true}
                    selectableRows={true}
                    apiService={ categoryService }
                    sortDefault={ {attribute: 'name'} }
                    persistTableHead // show table head
                    subHeaderComponent={ handleHeaderComponent() }
                    onSelectedRowsChange={ handleSelectRowsChange }
                    pagination
                    paginationServer
                    paginationTotalRows={ pagination.total }
                    paginationPerPage={ pagination.to }
                    paginationDefaultPage={ pagination.current_page }
                    onChangePage={ handleChangePage }
                    onChangeRowsPerPage={ handleChangeRowPerPage }
                    subHeader
                    paginationComponentOptions={
                        { rowsPerPageText: 'Rows per page:', rangeSeparatorText: 'of', noRowsPerPage: true, selectAllRowsItem: false, selectAllRowsItemText: 'All' }
                    }
                />
            </div>
        </div>
    )
}

export default CategoryListComponent;

//if (document.getElementById(window.qhnPrefix + 'backend_category_list')) {
//    ReactDOM.render(<List />, document.getElementById(window.qhnPrefix + 'backend_category_list'));
//}
