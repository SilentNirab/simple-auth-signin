
import {createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import {auth} from '../../firebase'




const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        });
        
    };


    return (
        <div className='signin-in-container'>
            <form onSubmit={signUp}>
                <h1>Create Account</h1>
                <input type="email"
                 placeholder='Enter your email'
                 value={email} 
                 onChange={(e) => setEmail(e.target.value)}
                  /> <br />
                <input type="password"
                 placeholder='Enter password'
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 /> <br />
                <input type="submit" value="signup" />
            </form>
        </div>
    );
};

export default SignUp;