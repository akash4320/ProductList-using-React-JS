import React, { Component } from 'react';
//import Aux from '../hoc/Auxiliary'
import {CustomInput,FormGroup} from 'reactstrap';

class RadioInput extends Component {
    render() {
        return (
                <FormGroup>
                <div>
                  <CustomInput type={this.props.type} name={this.props.name} label={this.props.label} id={this.props.label} onChange={this.props.change}/>
                </div>
                </FormGroup>


            );
    }
}

export default RadioInput;