import React, { useContext } from 'react';
import loginImg from '../../images/Group 140.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
const Login = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    else {
        firebase.app();
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleLogin = (e) => {
        var GoogleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(GoogleProvider)
            .then((result) => {
                var user = result.user;

                const userInfo = {
                    name: user.displayName,
                    email: user.email
                }
                setLoggedInUser(userInfo);
                history.replace(from)
            }).catch((error) => {
                console.log('err', error);
            });

        e.preventDefault()
    }
    return (
        <main className='container'>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div style={{ width: '100%', height: 'auto' }} className='shadow-sm p-3 mb-5 bg-body rounded'>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" className="btn btn-primary" disabled>Submit</button>
                            <div className='pt-3 text-center'>
                                <button onClick={googleLogin} className="btn btn-success">Login with Google</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                    <img style={{ height: '700px' }} src={loginImg} alt="" className="img-fluid rounded float-end" />
                </div>
            </div>
        </main>
    );
};

export default Login;