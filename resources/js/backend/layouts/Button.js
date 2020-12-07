import React from 'react';

function Button(props) {

    const { type, className, id, name, handleClick } = props;

    return (
        <button
            onClick={ handleClick }
            type={ type === undefined ? 'button' : type }
            className={ "btn waves-effect waves-light " + (className !== undefined ? className : '')}
            id={id}
        >
            { name }
        </button>
    )
}

export default Button;
