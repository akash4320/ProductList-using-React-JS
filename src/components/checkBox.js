import React, { Component } from 'react';
//import Aux from '../hoc/Auxiliary'
import {CustomInput,FormGroup} from 'reactstrap';

class CheckBoxed extends Component {
    render() {
        return (
                <FormGroup>
                <div >
                  <CustomInput type={this.props.type} name={this.props.name} label={this.props.option1}
                   id={this.props.option1} checkin={this.props.checked} onChange={this.props.change}/>

                  <CustomInput type={this.props.type} name={this.props.name} label={this.props.option2}
                   id={this.props.option2} onChange={this.props.change} />

                  <CustomInput type={this.props.type} name={this.props.name} label={this.props.option3}
                   id={this.props.option3} onChange={this.props.change} />
                </div>
                </FormGroup>


            );
    }
}

export default CheckBoxed;