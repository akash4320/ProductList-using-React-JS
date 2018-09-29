import React, { Component } from 'react';
import {Label} from 'reactstrap';

class Labelling extends Component {
    render() {
        return (
                
                <Label>{this.props.label}</Label>

            );
    }
}

export default Labelling;