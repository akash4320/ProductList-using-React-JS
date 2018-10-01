import React from 'react';
import { FormGroup, Input } from 'reactstrap';

class CityFilter extends React.Component {
    render() {
        return (
            <FormGroup>
                <Input type="select" name="filter" id="filter" onChange = {this.props.onchange}>
                    <option>--Filter By City--</option>
                    <option id = "Bengaluru">Bengaluru</option>
                    <option id = "Mumbai">Mumbai</option>
                    <option id = "Delhi">Delhi</option>
                </Input>
            </FormGroup>
        )
    }
}
export default CityFilter;