import React, {useState} from "react";

export const Registration = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    }

    return(
        <div className="form-container">
            <h2>Registration</h2>
        <form className="registration-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} placeholder="full name" id="email" name="name"/>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email1" name="email"/>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password1" name="password"/>
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? <br></br> Register here</button>
        </div>
    )


}
