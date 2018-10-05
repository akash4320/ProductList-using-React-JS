import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Input from './TextInput'
import Label from './Label'
import Radio from './Radio'
import CheckBox from './checkBox'
import Select from './Select'
import Button from './Button_type'
import { Form } from 'reactstrap';
import Axios from './Axios'

import { connect } from 'react-redux';
import { actions } from '../store';

class FormInput extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         image: '',
    //         price: '',
    //         quantity: '',
    //         select: '',
    //         payment: '',
    //         city: []
    //     }
    // }

    handle_event_name = (e) => {
        
      //  this.setState({ name: e.target.value });
        this.props.newName(e.target.value);
      //  console.log(this.state.name);
    }
    handle_event_image = (e) => {
      
       // this.setState({ image: e.target.value });
          this.props.newImage(e.target.value);
      //  console.log(this.state.image);
    }

    handle_event_price = (e) => {
        
        //this.setState({ price: e.target.value });
        this.props.newPrice(e.target.value);
      //  console.log(this.state.price);
    }

    handle_event_quantity = (e) => {
  
       // this.setState({ quantity: e.target.value });
          this.props.newQuantity(e.target.value);
      //  console.log(this.state.quantity);
    }

    handle_event_select = (e) => {
        
      //  this.setState({ select: e.target.value });
          this.props.newSelect(e.target.value);
     //   console.log(this.state.select);
    }

    handle_event_radio = (e) => {
       
       // this.setState({ payment: e.target.id });
          this.props.newPayment(e.target.value);
       // console.log(this.state.payment);
    }

    handle_event_checkbox = (e) => {
        
        let item = e.target.id;
        let isChecked = e.target.checked;
        if (isChecked) {
            this.props.city.push(item);
            // console.log(item);
            // console.log(isChecked);
            // console.log(this.state.city);
        }
        else{
        // console.log(isChecked);
        const index = this.props.city.indexOf(item);
        this.props.city.splice(index, 1);
        // console.log(this.state.city);
       }
    }
    resetting = () => {
        console.log(this.props.city);
        document.getElementById("myForm").reset();
    }

    savedata=()=>{
        const name=this.props.name;
        const image=this.props.image;
        const price=this.props.price;
        const quantity=this.props.quantity;
        const select=this.props.select;
        const payment=this.props.payment;
        const city=this.props.city;

        Axios.post('./Product_List.json',{name,image,price,quantity,select,payment,city})
        .then(response=>{
            console.log(response);
            window.location.reload();
        })
        .catch(error=>{
            console.log(error);
        })

        
    }



    render() {
        return (
            <Form id="myForm">

                <Label label="Product Name:"></Label>
                <Input type="text" name="name" id="textName" placeholder="Enter Name" change={this.handle_event_name} />


                <Label label="Product Type"></Label>
                <Select type="select" name="prod_type" id="prod_type" option1="Toy" option2="Clothes" option3="Appliances" change={this.handle_event_select} />

                <br />

                <Label label="Image URL:"></Label>
                <Input type="text" name="img_url" id="img_url" placeholder="Enter Image URL" change={this.handle_event_image} />

                <Label label="Price:"></Label>
                <Input type="text" name="price" id="price" placeholder="Enter Price" change={this.handle_event_price} />

                <Label label="Quantity:"></Label>
                <Input type="number" name="quantity" id="quantity" placeholder="Enter quantity" change={this.handle_event_quantity} />

                <Label label="Payment Mode" /> <br />
                <Radio type="radio" name="payment" label="COD" change={this.handle_event_radio} />
                <Radio type="radio" name="payment" label="Online Payment" change={this.handle_event_radio} />
                <Radio type="radio" name="payment" label="Both" change={this.handle_event_radio} />



                <Label label="Availability" /> <br />
                <CheckBox type="checkbox" name="city" option1="Bengaluru"
                    option2="Mumbai" option3="Delhi"
                    change={this.handle_event_checkbox} />

                <br />

                <br />

                <Button btnName="Submit" id="submit" click={this.savedata} />
                <Button btnName="Reset" id="Reset" click={this.resetting} />
            </Form>
        );


    }
}

function mapDispatchToProps(dispatch){
    return{
        newName(value){
            dispatch(actions.dataName(value));
        },
        newImage(value){
            dispatch(actions.dataImage(value));
        },
        newPrice(value){
            dispatch(actions.dataPrice(value));
        },
        newQuantity(value){
            dispatch(actions.dataQuantity(value));
        },
        newSelect(value){
            dispatch(actions.dataSelect(value));
        },
        newPayment(value){
            dispatch(actions.dataPayment(value));
        },
        newCity(value){
            dispatch(actions.dataCity(value));
        }
    }
  }
  
  function mapStateToProps(state){
    return {
            name:state.form.name,
            image:state.form.image,
            price:state.form.price,
            quantity:state.form.quantity,
            select:state.form.select,
            payment:state.form.payment,
            city:state.form.city
    };
  }

export default connect(mapStateToProps,mapDispatchToProps)(FormInput);
//export default FormInput;