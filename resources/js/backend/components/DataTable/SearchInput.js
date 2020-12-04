import React, { useState } from 'react';

function SearchInput(props)
{
    const { search, onChangeSearch } = props;
    const [inputSearch, setInputSearch] = useState(search === undefined ? "" : search);
    const onChangeText = (e) => {
        setInputSearch(e.target.value)
        onChangeSearch(inputSearch)
    }

    return (
        <div className="input-group qhn-select2-rjs">
            <input
                type="text"
                className="form-control"
                value={ inputSearch }
                onChange={ onChangeText }
            />
            <div className="input-group-append">
                <span className="input-group-text">
                    <i className="bx bx-search-alt-2"></i>
                </span>
            </div>
        </div>
    )
}


export default SearchInput;
