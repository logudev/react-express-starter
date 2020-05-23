import React from 'react';
import './customers.css'

class Customers extends React.Component {
    constructor() {
        super();
        this.state = {
            customers: []
        };
    }

    async componentDidMount () {
        console.log('Inside componentDidMount');
        const response= await fetch('/api/customers');
        const customers = await response.json();
        this.setState({
            customers
        }, () => console.log('Customers fetched', customers));
    }

    render() {
        return (
            <div>
                <h3>Customers</h3>
                <ul>
                    {this.state.customers.map(customer => 
                        <li key={customer.id}>{customer.name}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Customers;