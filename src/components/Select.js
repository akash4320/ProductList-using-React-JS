import React, { Component } from 'react';
//import Aux from '../hoc/Auxiliary'
import {Input,FormGroup} from 'reactstrap';
import './Input.css'

class Selected extends Component {
    render() {
        return (
                <FormGroup>
                <div>
                <Input className="text_input" type={this.props.type} name={this.props.type} id={this.props.type} onChange={this.props.change}>
                  <option>---SELECT---</option>
                  <option>{this.props.option1}</option>
                  <option>{this.props.option2}</option>
                  <option>{this.props.option3}</option>
                </Input>
                </div>
                </FormGroup>


            );
    }
}

export default Selected;