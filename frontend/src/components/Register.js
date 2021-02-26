import React, { useState } from "react";
const Validator = require('validator')
const isEmpty = require('is-empty')

import AuthService from "../services/auth"

export function Register() {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const handleChangeUsername = function (e) {
        setUsername(e.target.value)
    }

    const handleChangeEmail = function (e) {
        setEmail(e.target.value)
    }

    const handleChangePassword = function (e) {
        setPassword(e.target.value)
    }

    const handleChangePassword2 = function (e) {
        setPassword2(e.target.value)
    }

    const checkData = function (password, password2, email) {
        let errors = {}

        email = !isEmpty(email) ? email : ""
        password = !isEmpty(password) ? password : ""
        password2 = !isEmpty(password2) ? password2 : ""

        if (!Validator.isEmail(email)) {
            errors.email = "Email is invalid"
        }

        if (!Validator.isLength(password, { min: 6, max: 30})) {
            errors.password = "Password must be at least 6 characters"
        }
    
        if (!Validator.equals(password, password2)) {
            errors.password2 = "Passwords must match";
        }

        return errors
        

    }

    const handleSubmit = function (e) {
        setError(null)
        setLoading(true)
        e.preventDefault();

        setError(checkData(password, password2, email))

        const data = {
            username: username,
            email: email,
            password: password1
        }

        console.log(data)

        setLoading(false)
    }


    return (
        <form className="container mt-4" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div class="row">
                <div class="input-field col s12">
                    <input id="username" type="text" className="validate" onChange={handleChangeUsername} required />
                    <label htmlFor="username">Username</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="email" type="email" className="validate" onChange={handleChangeEmail} required />
                    <label htmlFor="email">Email</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="password" type="password" className="validate" onChange={handleChangePassword} required />
                    <label htmlFor="password">Password</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="password2" type="password" className="validate" onChange={handleChangePassword2} required />
                    <label htmlFor="password2">Confirm password</label>
                </div>
            </div>
            <a className="waves-effect waves-light btn" disabled={loading}>Sign Up</a>
        </form>
    );
}
