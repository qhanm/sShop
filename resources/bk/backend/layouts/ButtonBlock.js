import React from 'react';

function ButtonBlock(props) {
    return (
        <button
            type={ props.type }
            className={ "btn btn-block waves-effect waves-light mb-1 " + (props.className !== undefined ? props.className : '')}
            id={props.id}
        >
            { props.name }
        </button>
    )
}

export default ButtonBlock;
