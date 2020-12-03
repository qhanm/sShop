import React from 'react';
function Textarea(props)
{
    //const { label, className, placeholder, defaultValue, onChange, error, row } = props;

    return (
        <div className="form-group">
            <label>{ props.label }</label>
            <div>
                <textarea
                    name={ props.name }
                    className={ "form-control " + (props.className !== undefined ? props.className : '') }
                    onChange={ props.onChange }
                    placeholder={ props.placeholder }
                    rows={ props.row === undefined ? 2 : props.row }
                    value={ props.value }
                >
                    { props.value }
                </textarea>
                {
                    props.error !== null ? (
                        <ul className="parsley-errors-list filled" id="parsley-id-27" aria-hidden="false">
                            <li className="parsley-required">{ props.error }</li>
                        </ul>
                    ) : null
                }

            </div>
        </div>
    )
}

export default Textarea;
