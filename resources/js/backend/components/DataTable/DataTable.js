import React, { useEffect, useState } from 'react';
import BaseDataTable from "react-data-table-component";
import PropTypes from 'prop-types';
import queryString from 'query-string';
import SearchInput from "./SearchInput";

DataTable.propTypes = {
    title: PropTypes.string,
    columns: PropTypes.array,
    pagination: PropTypes.object,
}

function DataTable(props)
{
    const { columns, title, apiService, sortDefault, actionHeader, isSearch, customHeaderComponent } = props;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        per_page: 20,
        page: 1,
        sort: sortDefault.attribute,
        search: "",
    })

    const [pagination, setPagination] = useState({
        total: 0,
        to: 20,
        current_page: 1
    })

    useEffect(() => {
        apiService.getAll(filters).then((result) => {
            setData(result.data.data);
            setLoading(false);
            setPagination(result.data.meta);
        }).catch((err) => {
            setLoading(false);
            console.log(err);
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

        let sort = column.selector;
        if(sortDirection === 'desc') sort = '-' + sort;

        setFilters({
            ...filters,
            sort,
        })
    }

    function handleSearch(text) {
        setFilters({ ...filters, search: text });
    }

    const subHeaderComponent = () => {

        let headerComponent = [];

        if(customHeaderComponent !== undefined){
            headerComponent.push(customHeaderComponent);
        }

        if(isSearch === true){
            headerComponent.push(<SearchInput key={0} onChangeSearch={ handleSearch }/>)
        }

        return headerComponent;
    }

    return (
        <BaseDataTable
            title={ title }
            columns={columns}
            data={data}
            sortServer={true}
            onSort={ handleSort }
            pagination
            selectableRows={true}
            subHeader
            paginationServer={true}
            subHeaderAlign={'right'}
            paginationTotalRows={ pagination.total }
            paginationPerPage={ pagination.to }
            paginationDefaultPage={ pagination.current_page }
            onChangePage={ handleChangePage }
            onChangeRowsPerPage={ handleChangeRowPerPage }
            progressPending={ loading }
            subHeaderComponent={ subHeaderComponent() }
        />
    )
}

export default DataTable;
