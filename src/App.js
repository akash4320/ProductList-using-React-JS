import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import FormInput from './components/Form_Input'
import MyNavbar from './components/navbar'
import Axios from './components/Axios'
import ProdList from './components/Prod_List'

class App extends Component {
  state={
    dataArray:[]
  }
  componentDidMount(){
    Axios.get('./Product_List.json').then(res=>{
      let data=[];
      for(let i in res.data){
        data.push({id:i,name:res.data[i].name,image:res.data[i].image,price:res.data[i].price,
          quantity:res.data[i].quantity,select:res.data[i].select,payment:res.data[i].payment,
          city:res.data[i].city})
      }
      this.setState({dataArray:data});
    })
  }
  render() {
    return (
     <div className="App">
      <MyNavbar/>
      <div className="col-md-6 float-left" style={{borderRight:"solid",borderColor:"black",borderWidth:"1px"}}>
      <h3>Input Product Details</h3>
        <FormInput/>
        </div>

        
        <div className="col-md-6 float-left">
        <h2>Product List</h2>
        <ProdList dataarray={this.state.dataArray}/>

        </div>
       </div>
      
    );
  }
}

export default App;
