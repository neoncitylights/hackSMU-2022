import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
//import GoogleButton from 'react-google-button';
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {

    //Setting the email value
    const [email, setEmail] = useState("");

    //Setting the password value of the user
    const [password, setPassword] = useState("");

    //Setting the errors that could be issues incase of a wrong submission/access
    const [error, setError] = useState("");


    // Using the context created to obtain the function value to handle logging in for the user
    const { logIn } = useUserAuth();

    // Using the navigate hook to route the application to different pages
    const navigate = useNavigate();

    // This function is an async function to handle the promise taken for handling the submission and awaits until the request sent to the FirebaseAPI works


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            setError("");
            await logIn(email, password);
            navigate("/home");
        }
        catch (err) {
            setError(err.message);
        }
    }
    return (
        <>
            <div className='app-content'>
                <h2 className='mb-3'>Login</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3' controrlId="formBasicEmail">
                        <Form.Control
                            className="search-bar"
                            style={{ width: '25ch' }}
                            type="email"
                            placeholder='Email address'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className='mb-3' controrlId="formBasicPassword">
                        <Form.Control
                            style={{ width: '25ch' }}
                            className="search-bar"
                            type="password"
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                        <Button className='autocomplete-button' variant="primary" type="Submit">
                            <mark>Login</mark>
                        </Button>


                    <div className="p-4 mt-1 text-center">
                        Forgot Password? <Link to="/RecoverPassword">Recover Password</Link>
                    </div>
                </Form>
                <hr />

            </div>
            <div className="p-4 box mt-3 text-center">
                Don't have an account? <Link to="/Register">Sign up</Link>
            </div>
        </>
    )
};

export default Login;
/*
                    {/*             <Form.Group className='mb-3' controrlId= "formBasicAge">
                <Form.Control type= "age" placeholder='Age'/>
            </Form.Group> */

