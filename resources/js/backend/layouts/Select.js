import React from 'react';
import SelectBase from "react-select";

function Select(props)
{
    const { label, error, selected, options, onChange } = props;

    return (
        <div className="form-group">
            <label>{ label }</label>
            <div>
                <SelectBase
                    value={selected}
                    onChange={onChange}
                    options={options}
                />
                {
                    error !== null ? (
                        <ul className="parsley-errors-list filled" id="parsley-id-27" aria-hidden="false">
                            <li className="parsley-required">{ error }</li>
                        </ul>
                    ) : null
                }

            </div>
        </div>
    )
}

export default Select;
