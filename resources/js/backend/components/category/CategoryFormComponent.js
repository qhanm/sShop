import React, {useEffect, useState} from 'react';
import Input from "../../layouts/Input";
import Select from "../../layouts/Select";
import Textarea from "../../layouts/Textarea";
import Button from "../../layouts/Button";
import categoryService from "../../services/CategoryService";
import Loading from "../../layouts/Loadding";

function CategoryFormComponent(props)
{
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState(props.name === undefined ? '' : props.name);
    const [slug, setSlug] = useState(props.slug === undefined ? '' : props.slug);
    const [parent, setParent] = useState(props.parent === undefined ? { value: 0, label: 'None' } : props.parent);
    const [description, setDescription] = useState(props.description === undefined ? '' : props.description);
    const [category, setCategory] = useState([]);

    function handleOnchangeParent(event) {
        setParent(event);
        console.log(event)
    }

    useEffect(() => {
        categoryService.getAll({ parent_id: 0, per_page: 10000 }).then((result) => {
            let _category = [];
            _category.push({
                value: 0,
                label: 'None',
            })
            result.data.data.forEach((value) => {
                _category.push({
                    value: value.id,
                    label: value.name
                })
            })

            setCategory(_category);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        })
    }, [props])

    return (
        <div className={"card " + (loading === true ? "parent-loading" : "")}>
            {
                loading === true ? <Loading /> : null
            }
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
                <Select
                    label={"Parent"}
                    options={ category }
                    selected={ parent }
                    onChange={ handleOnchangeParent }
                />
                <Textarea label="Description" value={description} row={3} onChange={ e => setDescription(e.target.value) }/>
                <Button className={"btn-success"} name={"Save category"} />
            </div>
        </div>
    )
}

export default CategoryFormComponent;

//if (document.getElementById(window.qhnPrefix + 'backend_category_form')) {
//    ReactDOM.render(<Form />, document.getElementById(window.qhnPrefix + 'backend_category_form'));
//}
