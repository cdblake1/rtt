import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
    render() {
        return (
            <div className="col-md-4 text-center b-container">
                <button className="btn buttons sign-up">Sign Up</button>
                <button className="btn buttons featured">Featured</button>
            </div>
        );
    }
}

export default SignUp;
