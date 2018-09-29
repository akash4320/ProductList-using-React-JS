import React, { Component } from 'react';
//import Aux from '../hoc/Auxiliary'
import {Input,FormGroup} from 'reactstrap';
import './Input.css'


class TextInput extends Component {
  
    render() {
        return (
                <FormGroup>
                <Input className="text_input" type={this.props.type} placeholder={this.props.placeholder} 
                id={this.props.id} name={this.props.name}  onChange={this.props.change}/>
                </FormGroup>
            );
    }
}

export default TextInput;