import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { connect } from 'react-redux';
import { addLead } from '../../actions/leads';
class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
        //this.onChange = this.onChange.bind(this);
    }
    onChange = (e) => {
        this.setState(prevState => ({
            [e.target.name]: e.target.value
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addLead(this.state);
        this.setState({
            name: '',
            email: '',
            message: ''

        })
    }
    render() {
        return (
            <div>
                <h1>Add Lead Forms</h1>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" value={this.state.name} name="name" onChange={(e) => this.onChange(e)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" value={this.state.email} name="email" onChange={(e) => this.onChange(e)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="message">Message</Label>
                        <Input type="textarea" value={this.state.message} name="message" onChange={(e) => this.onChange(e)} />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        )
    }
}
export default connect(null, { addLead })(Forms);