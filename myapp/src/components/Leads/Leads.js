import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Button, Table } from 'reactstrap';

import { getLeads, deleteLead } from '../../actions/leads';
class Leads extends Component {
    // static propTypes = {
    //     leads: PropTypes.array.isRequired
    // };   
    componentDidMount() {
        this.props.getLeads();
    }
    render() {
        return (
            <div>
                <h1>Leads List</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.leads.map(lead => {
                                return (<tr key={lead.id}>
                                    <td>{lead.id}</td>
                                    <td>{lead.name}</td>
                                    <td>{lead.email}</td>
                                    <td>{lead.message}</td>
                                    <td><Button color="danger" onClick={this.props.deleteLead.bind(this, lead.id)}>Delete</Button></td>
                                </tr>);
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        leads: state.leads.leads
    }
};


export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
