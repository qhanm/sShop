import React, { useState } from 'react';
import SelectDefault from "../../layouts/SelectDefault";
import Button from "../../layouts/Button";

function BulkAction(props)
{
    const { options } = props;

    const [inputOption, setInputOption] = useState(options !== undefined ? options : [
        { value: 'delete', label: 'Delete' }
    ]);

    return (
        <div className="input-group qhn-select2-rjs qhn-select2-bulk-action">
            <SelectDefault options={ inputOption }/>
            <div className="input-group-append">
                <Button name="Bulk actions" type="button" className={"btn-outline-secondary"}/>
            </div>
        </div>
    )
}

export default BulkAction;
