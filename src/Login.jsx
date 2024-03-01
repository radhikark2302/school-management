import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="outside">
            <h2>Student Portal</h2>
        <div className="form-container">
            <form className="login-form" onSubmit={handleSubmit}
                <label htmlFor="email"></label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email" name="email" required autoFocus/>
                <label htmlFor="password"></label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" required/>
                <button type="submit">Sign In</button>
            </form>
        </div>
        <div>
             <button className="link-btn" onClick={() => props.onFormSwitch('registration')}>Don't have an account? <br></br> Register here</button>
        </div>
        </div>
    )
}
