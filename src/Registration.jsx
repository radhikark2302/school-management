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
        <div className="outside1">
            <h2>Create Account</h2>
        <div className="form-container">
            <form action="#" className="registration-form" onSubmit={handleSubmit}>
                <label htmlFor="name"></label>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" id="name" name="name" required autoFocus/>
                <label htmlFor="email"></label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email1" name="email" required/>
                <label htmlFor="password"></label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password1" name="password" required/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
        </div>
        <div>
        <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>Already have an account? <br></br>Sign In</button>
        </div>
    )


}
