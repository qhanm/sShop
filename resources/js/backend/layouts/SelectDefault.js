import React from 'react';
import SelectBase from "react-select";

function SelectDefault(props)
{
    const {selected, options, onChange } = props;

    return (
        <SelectBase
            value={selected}
            onChange={onChange}
            options={options}
        />
    )
}

export default SelectDefault;
