import React from 'react';

function Checkbox(props){
    return (
        <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input
                    type="checkbox"
                    className={ "custom-control-input " + ( props.className !== undefined ? props.className : '' )}
                    id={ props.id }
                    name={ props.name }
                />
                    <label className="custom-control-label" htmlFor={props.htmlFor}>{ props.label }</label>
                    {
                        props.isError ? (
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        ) : null
                    }
            </div>
        </div>
    )
}

export default Checkbox;
