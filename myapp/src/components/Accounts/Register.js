import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { register } from '../../actions/auth';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { createMessage } from '../../actions/messages';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmpassword: ''
        }
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = e => {
        e.preventDefault();
        const { username, email, password, confirmpassword } = this.state;
        if (password !== confirmpassword) {
            this.props.createMessage({
                passwordNotMatch: "Passwords do not match"
            })
        } else {
            const newUser = {
                username,
                password,
                email
            }
            this.props.register(newUser)
        }
    }
    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username"
                            value={this.state.username}
                            onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email"
                            value={this.state.email}
                            onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password"
                            value={this.state.password}
                            onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="confirmpassword">Password</Label>
                        <Input type="password" name="confirmpassword"
                            value={this.state.confirmpassword}
                            onChange={this.onChange} />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register, createMessage })(Register);