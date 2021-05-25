import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
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
                        <Label for="password">Password</Label>
                        <Input type="password" name="password"
                            value={this.state.password}
                            onChange={this.onChange} />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { login })(Login);
