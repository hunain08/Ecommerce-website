/** @format */

import React from 'react';
import FormInput from "./form";
class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: "", password: "" });
    };
    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        placeholder='E-mail'
                        type='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <input type='submit' value='Sign-In' />
                </form>
            </div>
        );
    }
}
export default Signin;
