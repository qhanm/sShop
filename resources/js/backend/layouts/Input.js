import React from 'react';
function Input(props)
{
    const { label, type, className, placeholder, value, onChange, autoComplete, error } = props;

    //console.log(error);
     return (
         <div className="form-group">
             <label>{ label }</label>
             <div>
                 <input
                     name={ name }
                     type={ type }
                     className={"form-control " + (className !== undefined ? className : '') }
                     placeholder={placeholder}
                     value={ value }
                     onChange={ onChange }
                     autoComplete={ autoComplete }
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

export default Input;
