import React from 'react';

function Button(props) {
    return (
        <button
            type={ props.type }
            className={ "btn waves-effect waves-light " + (props.className !== undefined ? props.className : '')}
            id={props.id}
        >
            { props.name }
        </button>
    )
}

export default Button;
