import React, { useState } from 'react';

const SignIn = ({ setLogin }) => {

    const [passVisible, setPassVisible] = useState(false)

    const changePassVisibleValue = () => {
        if (passVisible) {
            setPassVisible(false)
        } else {
            setPassVisible(true)
        }
    }

    return (
        <div className="signInForm">
            <h3>Sign In</h3>
            <form action="" className="loginForm pt-4">
                <div class="mb-3">
                    <label for="loginEmailInput" class="form-label">Email address</label>
                    <input type="email" class="form-control form-control-sm" id="loginEmailInput" placeholder="" />
                </div>
                <div class="mb-3">
                    <label for="loginPassInput" class="form-label">Password</label>
                    <div className="d-flex">
                        <input type={passVisible ? "text" : "password"} class="form-control form-control-sm " id="loginPassInput" placeholder="" />
                        <button type="button" onClick={changePassVisibleValue} className="btn btn-sm btn-light text-dark ms-auto passVisibleBtn">
                            {
                                passVisible ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                    </svg>
                            }
                        </button>
                    </div>
                </div>
                <div className="mb-2 py-3">
                    <button type="button" className="btn btn-outline-info btn-sm px-5 w-100">Continue with Google</button>
                </div>
                <div className="mb-2 d-flex">
                    <button type="submit" className="btn btn-outline-danger btn-sm px-5 ms-auto">Login</button>
                </div>
                <div className="mb-1 mt-4">
                    <div className="text-center">Don't have an account <button onClick={() => setLogin(false)} className="btn btn-light btn-sm">Create Account</button></div>
                </div>
            </form>
        </div>
    );
};

export default SignIn;