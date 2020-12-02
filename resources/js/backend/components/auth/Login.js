import React, { useState, useEffect } from 'react';
import Input from "../../layouts/Input";
import Checkbox from "../../layouts/Checkbox";
import ReactDOM from "react-dom";
import ButtonBlock from "../../layouts/ButtonBlock";
import querystring from 'querystring';
import Loading from "../../layouts/Loadding";
import userService from "../../services/auth/UserService";
import PropTypes from 'prop-types';
import {getError} from "../../helpers/ErrorHelper";

function Login()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState([]);
    
    useEffect(() => {
        console.log(error);
    }, [error])

    let onLogin = (event) => {
        event.preventDefault();

        setLoading(true);

        userService.login({email: email, password: password}).then((result) => {
            setLoading(false);
        }).catch((er) => {
            setError(er.response.data.errors);
            setLoading(false);
        })
    }
   

    return (
        <div className={"card overflow-hidden sweet-loading " + (loading === true ? "parent-loading" : "")}>
            {
                loading === true ? <Loading /> : null
            }
            <div className="bg-soft-primary">
                <div className="row">
                    <div className="col-7">
                        <div className="text-primary p-4">
                            <h5 className="text-primary">Welcome Back !</h5>
                            <p>Sign in to continue to Skote.</p>
                        </div>
                    </div>
                    <div className="col-5 align-self-end">
                        <img src={ window.basePath + "qbackend/assets/images/profile-img.png"} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="card-body pt-0">
                <div>
                    <a href="#">
                        <div className="avatar-md profile-user-wid mb-4">
                            <span className="avatar-title rounded-circle bg-light">
                                <img src={ window.basePath + "qbackend/assets/images/logo.svg" } alt="" className="rounded-circle" height="34" />
                            </span>
                        </div>
                    </a>
                </div>
                <div className="p-2">
                    <form className="form-horizontal" autoComplete="on" onSubmit={ onLogin }>
                        <Input
                            label="Email"
                            name="email"
                            type="email"
                            autoComplete="off"
                            value={ email }
                            onChange={ e => setEmail(e.target.value)}
                            error={ getError(error, 'email') }
                        />
                        <Input
                            label="Password"
                            name="password"
                            type="password"
                            value={ email }
                            onChange={ e => setPassword(e.target.value) }
                            error={ getError(error, 'password') }
                        />
                        <Checkbox
                            label="Remember me"
                            htmlFor="remember"
                            id="remember"
                        />
                        <div className="mt-3">
                            <ButtonBlock type="submit" className="btn-primary" name={"Login"} />
                        </div>
                        <div className="mt-4 text-center">
                            <a href="#" className="text-muted">
                                <i className="mdi mdi-lock mr-1">
                                </i> Forgot your password?
                            </a>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

Login.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
}

export default Login;

if (document.getElementById(window.qhnPrefix + 'backend_login')) {
    ReactDOM.render(<Login />, document.getElementById(window.qhnPrefix + 'backend_login'));
}
