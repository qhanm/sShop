import React, { useState, useEffect } from 'react';
import Input from "../../layouts/Input";
import Checkbox from "../../layouts/Checkbox";
import ReactDOM from "react-dom";
import ButtonBlock from "../../layouts/ButtonBlock";
import querystring from 'querystring';
import Loading from "../../layouts/Loadding";

import userService from "../../services/auth/UserService";

function Login()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        userService.login({email: 'nam.quach@dragonflyteam.com', password: '123456'}).then((result) => {
            console.log('result: ' + result);
        }).catch((error) => {
            console.log(error.response);
            console.log(error.response.data);
        })

        return () => {

        }
    }, [])

    console.log(querystring.stringify({limit: 100, page: 20}));
    return (
        <div className="card overflow-hidden parent-loading">
            <Loading />
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
                    <a href="index.html">
                        <div className="avatar-md profile-user-wid mb-4">
                            <span className="avatar-title rounded-circle bg-light">
                                <img src={ window.basePath + "qbackend/assets/images/logo.svg" } alt="" className="rounded-circle" height="34" />
                            </span>
                        </div>
                    </a>
                </div>
                <div className="p-2">
                    <form className="form-horizontal" autoComplete="on">
                        <Input label="Email" name="username" type="email" autoComplete="off" value={ email } onChange={ e => setEmail(e.target.value)}/>
                        <Input label="Password" name="password" type="password" value={ email } onChange={ e => setPassword(e.target.value) }/>
                        <Checkbox label="Remember me"  htmlFor="remember" id="remember" />
                        <div className="mt-3">
                            <ButtonBlock type="button" className="btn-primary" name={"login"} />
                        </div>
                        <div className="mt-4 text-center">
                            <a href="auth-recoverpw.html" className="text-muted">
                                <i className="mdi mdi-lock mr-1"></i> Forgot your password?
                            </a>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Login;


if (document.getElementById(window.qhnPrefix + 'backend_login')) {
    ReactDOM.render(<Login />, document.getElementById(window.qhnPrefix + 'backend_login'));
}
