import React from 'react';

function Input(props)
{
     return (
         <div className="form-group">
             <label>{ props.label }</label>
             <div>
                 <input
                     name={ props.name }
                     type={ props.type }
                     className={"form-control " + (props.className !== undefined ? props.className : '') }
                     placeholder={props.placeholder}
                     value={ props.value }
                     onChange={ props.onChange }
                     autoComplete={ props.autoComplete }
                 />
                 {
                     props.isError ? (
                         <ul className="parsley-errors-list filled" id="parsley-id-27" aria-hidden="false">
                             <li className="parsley-required">This value is required.</li>
                         </ul>
                     ) : null
                 }

             </div>
         </div>
     )
}

export default Input;
