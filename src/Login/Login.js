import { createUserWithEmailAndPassword, getAuth,sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import {useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import initializeAuthentication from './Firebase/firebase.init';



initializeAuthentication();


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/";

    const auth = getAuth();
    const { signInUsingGithub } = useAuth();
    const { signInUsingGoogle } = useAuth();

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                // const user = result.user;
                // console.log(user);
                history.push(redirect_uri)
            })
    }

    const handleGithubSignIn = () => {
        signInUsingGithub()
            .then(result => {
                // const user = result.user;
                // console.log(user);
                history.push(redirect_uri)
            })
    }
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();
        // console.log(email, password);
        if (password.length < 6) {
            setError('Password must be at least 6 character long')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must content to upper case');
            return;
        }
        isLogin ? processLogin(email, password) : createNewUser(email, password);
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                history.push(redirect_uri);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                history.push(redirect_uri);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => { })
    }



    return (
        <div className="m-5">
            <form onSubmit={handleRegistration}>
                <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
                {!isLogin && <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={handleNameChange} className="form-control" id="InputName" placeholder="Your Name" />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onChange={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registered?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>
                <br />
                <button onClick={handleResetPassword} type="button" className="btn btn-secondary btn-sm">Reset Password</button>
            </form>
            <br />
            <div>---------Please Sign In Different Way--------</div>
            <button className="btn" onClick={handleGoogleSignIn}>Google Sign In</button>
            <br />
            <button className="btn" onClick={handleGithubSignIn}>Git Hub Sign In</button>
        </div>
    );
};

export default Register;