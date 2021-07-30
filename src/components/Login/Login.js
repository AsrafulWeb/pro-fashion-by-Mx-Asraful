import React, { useState } from 'react';
import './Login.css';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const Login = () => {

    const [visibleLoginForm, setVisibleLoginForm] = useState(true)

    return (
        <div className="loginComp">
            <div className="container">
                <div className="row">
                    <div style={{ margin: "0 auto" }} className="col-4 card mt-5">
                        <div className="card-body">
                            {
                                visibleLoginForm ?
                                    <SignIn setLogin={setVisibleLoginForm} />
                                    :
                                    <SignUp setLogin={setVisibleLoginForm} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;