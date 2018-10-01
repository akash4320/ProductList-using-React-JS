import React from 'react';
import { FormGroup, Input } from 'reactstrap';

class SelectFilter extends React.Component {
    render() {
        return (
            <FormGroup>
                <Input type="select" name="filter" id="filter" onChange = {this.props.onchange}>
                    <option>---Filter By---</option>
                    <option id = "Toy">ProductType : Toys</option>
                    <option id = "Clothes">ProductType : Clothes</option>
                    <option id = "Appliances">ProductType : Appliances</option>
                </Input>
            </FormGroup>
        )
    }
}
export default SelectFilter;