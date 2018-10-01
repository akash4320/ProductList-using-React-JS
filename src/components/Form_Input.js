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


class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: '',
            price: '',
            quantity: '',
            select: '',
            payment: '',
            city: []
        }
    }

    handle_event_name = (e) => {
        // console.log("hyo");
        this.setState({ name: e.target.value });
      //  console.log(this.state.name);
    }
    handle_event_image = (e) => {
        // console.log("hyo");
        this.setState({ image: e.target.value });
      //  console.log(this.state.image);
    }

    handle_event_price = (e) => {
        // console.log("hyo");
        this.setState({ price: e.target.value });
      //  console.log(this.state.price);
    }

    handle_event_quantity = (e) => {
        // console.log("hyo");
        this.setState({ quantity: e.target.value });

      //  console.log(this.state.quantity);
    }

    handle_event_select = (e) => {
        
        this.setState({ select: e.target.value });
     //   console.log(this.state.select);
    }

    handle_event_radio = (e) => {
       
        this.setState({ payment: e.target.id });
       // console.log(this.state.payment);
    }

    handle_event_checkbox = (e) => {
        
        let item = e.target.id;
        let isChecked = e.target.checked;
        if (isChecked) {
            this.state.city.push(item);
            // console.log(item);
            // console.log(isChecked);
            // console.log(this.state.city);
        }
        else{
        // console.log(isChecked);
        const index = this.state.city.indexOf(item);
        this.state.city.splice(index, 1);
        // console.log(this.state.city);
       }
    }
    resetting = () => {
        console.log(this.state.city);
        document.getElementById("myForm").reset();
    }

    savedata=()=>{
        const name=this.state.name;
        const image=this.state.image;
        const price=this.state.price;
        const quantity=this.state.quantity;
        const select=this.state.select;
        const payment=this.state.payment;
        const city=this.state.city;

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

export default FormInput;