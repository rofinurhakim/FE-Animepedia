import React from 'react'
import "../style/login.css"
import { Link, useHistory } from 'react-router-dom'
import { LoginData, useForm } from '../service/auth'
import { useState } from 'react'

const Login = () => {

    const history = useHistory()
    const { form, inputChangeHanlder } = useForm();
    const [ loader, setloader ] = useState(false);

    const nextLogin = () => {
        history.push('/')
        history.go()
    }

    const submitForm = async () => {
        setloader(true)
        LoginData(form, setloader, nextLogin);
    }

    return ( 
        <div className="account-page">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img src= {`images/image1.png`}/>
                    </div>
                    <div className="col-2">
                        <div className="form-container">
                            <div className="form-btn">
                               <Link to ="/login"> Login </Link>
                               <Link to ="/register"> Register </Link>
                            </div>
                            <div className="login-form">
                            <p>Email</p>
                                <input 
                                id="email"
                                type="email" 
                                placeholder="email"
                                tabIndex="1"
                                required
                                autoFocus
                                name="email"
                                onChange={(e) => inputChangeHanlder(e)}                              
                                />
                            <p>Password</p>
                                <input 
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    tabIndex="2"
                                    required
                                    onChange={(e) => inputChangeHanlder(e)}
                                />
                                {!loader ? (
                                    <button 
                                    type="submit" 
                                    className="btn"
                                    onClick={() => submitForm()}
                                    >
                                        Login
                                    </button>

                                ) : (
                                    
                                    <button
                                    type="button"
                                    className="btn"
                                    disabled={true}
                                  >
                                    <span></span>
                                        Processing. . .
                                  </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Login