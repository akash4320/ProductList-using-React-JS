import React from 'react';
import { FormGroup, Input } from 'reactstrap';

class PaymentFilter extends React.Component {
    render() {
        return (
            <FormGroup>
                <Input type="select" name="filter" id="filter" onChange = {this.props.onchange}>
                    <option>---Filter Payment---</option>
                    <option id = "COD">COD</option>
                    <option id = "Online Payment">Online Payment</option>
                    <option id = "Both">Both</option>
                </Input>
            </FormGroup>
        )
    }
}
export default PaymentFilter;