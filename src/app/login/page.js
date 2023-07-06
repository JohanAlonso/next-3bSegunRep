'use client'
import React from "react"
import { loging } from "../../services/firebase/auth"
import "./login.css"

export default function Login() {

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

    function onlogin () {
        const {email, password} = state;
        loging(email, password)
    }

    return (
        <div className="container">
            <input onChange={onChange} name="email" type="text" value={state.email}  />
            <input onChange={onChange} name="password" type="password" value={state.password} />
            <button onClick={onlogin}>Login</button>
        </div>
    )
}

