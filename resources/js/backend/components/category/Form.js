import React, { useState } from 'react';
import Input from "../../layouts/Input";
import ReactDOM from "react-dom";
import Select from "../../layouts/Select";
import Textarea from "../../layouts/Textarea";
import Button from "../../layouts/Button";

function Form(props)
{
    const [name, setName] = useState(props.name === undefined ? '' : props.name);
    const [slug, setSlug] = useState(props.slug === undefined ? '' : props.slug);
    const [parent, setParent] = useState(props.parent === undefined ? 0 : props.parent);
    const [description, setDescription] = useState(props.description === undefined ? '' : props.description);
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ]

    function handleOnchangeParent(event) {
        setParent(event);
    }

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title mb-4">Create New Categories</h4>
                <Input
                    label="Name"
                    name="name"
                    type="text"
                    autoComplete="off"
                    value={ name }
                    onChange={ e => setName(e.target.value)}
                    error={ null }
                />
                <Input
                    label="Slug"
                    name="slug"
                    type="text"
                    autoComplete="off"
                    value={ slug }
                    onChange={ e => setSlug(e.target.value)}
                    error={ null }
                />
                <Select label={"Parent"} options={ options } selected={parent} onChange={ handleOnchangeParent }/>
                <Textarea label="Description" value={description} row={3} onChange={ e => setDescription(e.target.value) }/>
                <Button className={"btn-success"} name={"Save category"} />
            </div>
        </div>
    )
}

export default Form;

if (document.getElementById(window.qhnPrefix + 'backend_category_form')) {
    ReactDOM.render(<Form />, document.getElementById(window.qhnPrefix + 'backend_category_form'));
}
