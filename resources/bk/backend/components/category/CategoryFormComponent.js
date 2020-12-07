import React, {useEffect, useState} from 'react';
import Input from "../../layouts/Input";
import Select from "../../layouts/Select";
import Textarea from "../../layouts/Textarea";
import Button from "../../layouts/Button";
import categoryService from "../../services/CategoryService";
import Loading from "../../layouts/Loadding";
import Constant from '../../Constant';
import { convertToSlug } from '../../helpers/StringHelper';
import ArrayHelper from '../../helpers/ArrayHelper';


function CategoryFormComponent(props)
{
    const { isUpdate } = props;
    const { name, slug, description, parent_id } = props.row;
    const [loading, setLoading] = useState(true);
    const [Fname, setName] = useState(name);
    const [Fslug, setSlug] = useState(slug);
    const [Fparent, setParent] = useState(Constant.SELECT2_DEFAULT);
    const [Fdescription, setDescription] = useState(description);
    const [Fcategory, setCategory] = useState([]);
    const [change, setChange] = useState(true);
    const [FisUpdate, setIsUpdate] = useState(isUpdate);
    const [error, setError] = useState({
        name: null,
        slug: null
    });

    function handleOnchangeParent(event) {
        setParent(event);
    }

    useEffect(() => {
        categoryService.getAll({ per_page: 10000, sort: 'parent_id' }).then((result) => {
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

            console.log(ArrayHelper.treeData(result.data.data));

            setCategory(_category);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        })
    }, [change])

    useEffect(() => {
        setLoading(true);
        setName(name);
        setSlug(slug);
        setDescription(description);
        setIsUpdate(isUpdate);

        if(parent_id !== 0){
            categoryService.getOne(parent_id).then((result) => {
                //console.log(result.data.name);
                setParent({
                    value: result.data.id,
                    label: result.data.name,
                })
                setLoading(false);
            }).catch((err) => {
                console.log(err);
                setLoading(false);
            })
        }else{
            setParent(Constant.SELECT2_DEFAULT);
            setLoading(false);
        }

    }, [props])

    const handleOnClickCancel = () => {
        setName("");
        setSlug("");
        setDescription("");
        setParent(Constant.SELECT2_DEFAULT);
        setIsUpdate(false);
    }

    const handleOnClickSave = () => {
        let objError = {};
        console.log(name);
        if(Fname === ''){
            objError.name = "Name can not be blank";
        }

        if(Fslug === ''){
            objError.slug = "Slug can not be blank";
        }

        if(Object.keys(objError).length > 0){
            setError(objError)
        }else{
            console.log('call post');
            categoryService.post({name: 'name'}).then((result) => {
                console.log(result);
            }).catch((err) => {
                console.log(err);
            })   
        }
    }

    const handleOnChangeName = (event) => {
        if(event.target.value.length > 0){
            setError({
                ...error,
                name: null,
                slug: null,
            });
        }
        setName(event.target.value);
        setSlug(convertToSlug(event.target.value));
    }

    const handleOnChangeSlug = (event) => {
        if(event.target.value.length > 0){
            setError({
                ...error,
                slug: null
            });
        }
        setSlug(convertToSlug(event.target.value));
    }

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
                    value={ Fname }
                    onChange={ handleOnChangeName }
                    error={ error.name }
                />
                <Input
                    label="Slug"
                    name="slug"
                    type="text"
                    autoComplete="off"
                    value={ Fslug }
                    onChange={ handleOnChangeSlug }
                    error={ error.slug }
                />
                <Select
                    label={"Parent"}
                    options={ Fcategory }
                    selected={ Fparent }
                    onChange={ handleOnchangeParent }
                />
                <Textarea label="Description" value={Fdescription} row={3} onChange={ e => setDescription(e.target.value) }/>

                <div className="button-items">
                    <Button className={"btn-success"} name={"Save category"} handleClick={ handleOnClickSave }/>
                    {
                        FisUpdate === true ? <Button className="btn-light" name="Cancel" handleClick={ handleOnClickCancel } /> : null
                    }
                </div>
                
            </div>
        </div>
    )
}

export default CategoryFormComponent;

//if (document.getElementById(window.qhnPrefix + 'backend_category_form')) {
//    ReactDOM.render(<Form />, document.getElementById(window.qhnPrefix + 'backend_category_form'));
//}
