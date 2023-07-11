'use client'
import React from "react"
import { singup } from "../../services/firebase/auth"
import "./register.css"

function Register() {

    const [state, setState] = React.useState({
        email: "",
        password: ""
    })

    function onChange(event){
        const value = event.target.value;
        const name = event.target.name;

        setState({
            ...state,
            [name]: value
        })
    }

    function onRegister () {
        const {email, password} = state;
        singup(email, password)
    }

    return (
        <div className="container">
            <input onChange={onChange} name="email" type="text" value={state.email}  />
            <input onChange={onChange} name="password" type="password" value={state.password} />
            <button onClick={onRegister}>registrarse</button>
        </div>
    )
}

export default Register;