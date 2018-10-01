import React from 'react';
import { FormGroup, Input } from 'reactstrap';
class SelectSort extends React.Component {
    render() {
        return (
            <FormGroup>
                <Input type="select" name="sort" id="sort" onChange = {this.props.onchange}>
                    <option>---Sort By---</option>
                    <option id = "PLH">Price : Low to High</option>
                    <option id = "PHL">Price : High to Low</option>
                    <option id = "QLH">Quantity : Low to High</option>
                    <option id = "OHL">Quantity : High to Low</option>
                </Input>
            </FormGroup>
        )
    }
}
export default SelectSort;