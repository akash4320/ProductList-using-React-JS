import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'reactstrap';
class ButtonType extends Component {
    render() {
        return (
            <Button id={this.props.id} className="ml-4" onClick={this.props.click} > {this.props.btnName}</Button>
            );
    }
}

export default ButtonType;