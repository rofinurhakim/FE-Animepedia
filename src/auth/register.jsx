import React from 'react'
import "../style/login.css"
import { Link, useHistory } from 'react-router-dom'
import { RegisterData, useForm } from '../service/auth'
import { useState } from 'react'

const Register = () => {

    const history = useHistory()
    const { form, inputChangeHanlder } = useForm()
    const [ loader, setLoader ] = useState(false)

    const nextLogin = () => {
        console.log('bismillah')
        history.push('/login')
        history.go()
    }

    const submitForm = () => {
        setLoader(true)
        RegisterData(form, setLoader, nextLogin)
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
                            <form method="POST" className="form">
                                <div className="login-form">
                                <p> Full Name </p>
                                <input 
                                    id="nama_lengkap"
                                    type="text"
                                    placeholder="Full_Name"
                                    name="nama_lengkap"
                                    autoFocus
                                    onChange={(e) => inputChangeHanlder(e)}
                                />
                                <p>Email</p>
                                <input 
                                    id="email"
                                    type="email" 
                                    placeholder="email"
                                    name="email"
                                    onChange={(e) => inputChangeHanlder(e)}
                                    />
                               <p>Password</p>
                                <input 
                                    id="password"
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    onChange={(e) => inputChangeHanlder(e)}
                                    />

                                <p>Password confirmation</p> 
                                <input 
                                    type="password"
                                    id="passwordKonfirmasi" 
                                    name="passwordKonfirmasi"
                                    placeholder="confirmation"
                                    onChange={(e) => inputChangeHanlder(e)}
                                
                                />   
                                    {!loader ? (
                                        <button 
                                        type="button" 
                                        class="btn"
                                        onClick={() => submitForm()}
                                        >
                                            Register
                                        </button>    
                                    ) : (
                                        <button
                                        type="button"
                                        className="btn"
                                        disabled={true}
                                    >
                                        <span></span>
                                        Processing
                                    </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register