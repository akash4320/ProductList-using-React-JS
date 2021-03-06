import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import FormInput from './components/Form_Input'
import MyNavbar from './components/navbar'
import Axios from './components/Axios'
import ProdList from './components/Prod_List'
import Filter from './components/SelectFilter'
import Sort from './components/SelectSort'
import CityFilter from './components/CityFilter'
import FilterPayment from './components/FilterPayment'

import { connect } from 'react-redux';
import { actions } from './store';

// import axios from 'axios';

class App extends Component {
  // state={
  //   dataArray:[],
  //   listArray:[]
  // }
  componentDidMount(){
    Axios.get('./Product_List.json').then(res=>{
      let data=[];
      for(let i in res.data){
        data.push({id:i,name:res.data[i].name,image:res.data[i].image,price:res.data[i].price,
          quantity:res.data[i].quantity,select:res.data[i].select,payment:res.data[i].payment,
          city:res.data[i].city})
      }
     // this.setState({dataArray:data,listArray:data});
      this.props.newdataArray(data);
      this.props.newlistArray(data);
    })
  }

  sortByPriceLH = () => {
    const listByPrice = this.props.dataArray;
    listByPrice.sort((a,b) => {return a.price - b.price})
    // this.setState({
    //   listArray : listByPrice
    // })
    this.props.newlistArray(listByPrice);
  }
  sortByPriceHL = () => {
    const listByPrice = this.props.dataArray;
    listByPrice.sort((a,b) => {return b.price - a.price})
    // this.setState({
    //   listArray : listByPrice
    // })

    this.props.newlistArray(listByPrice);
  }
  sortByQuantityLH = () => {
    const listByPrice = this.props.dataArray;
    listByPrice.sort((a,b) => {return a.quantity - b.quantity})
    // this.setState({
    //   listArray : listByPrice
    // })

    this.props.newlistArray(listByPrice);
  }
  sortByQuantityHL = () => {
    const listByPrice = this.props.dataArray;
    listByPrice.sort((a,b) => {return b.quantity - a.quantity})
    // this.setState({
    //   listArray : listByPrice
    // })

    this.props.newlistArray(listByPrice);
  }
  sortBy = (e) => {
    const sorter = e.target.value;
    if(sorter === "Price : High to Low")
      this.sortByPriceHL();
    else if(sorter === "Price : Low to High")
      this.sortByPriceLH();
    else if(sorter === "Quantity : High to Low")
      this.sortByQuantityHL();
    else
      this.sortByQuantityLH();
  }
  filterBy = (e) => {
    
    const listBy = this.props.dataArray;
    const filter = e.target.value;
    let result = [];
    if(filter === "ProductType : Clothes")
      result = listBy.filter((a) => {return a.select === "Clothes"})
    else if(filter === "ProductType : Appliances")
      result = listBy.filter((a) => {return a.select === "Appliances"})
    else if(filter === "ProductType : Toys")
      result = listBy.filter((a) => {return a.select === "Toy"})
    else
      this.componentDidMount()
    // this.setState({
    //   listArray : result
    // })

    this.props.newlistArray(result);
  }

  filterCity = (e) => {
    const listByCity = this.props.dataArray;
    const filter = e.target.value;
    let result = [];
    if(filter === "Bengaluru")
      result = listByCity.filter((a) => {return a.city.includes("Bengaluru")})
    else if(filter === "Mumbai")
      result = listByCity.filter((a) => {return a.city.includes("Mumbai")})
    else if(filter === "Delhi")
      result = listByCity.filter((a) => {return a.city.includes("Delhi")})
    else
      this.componentDidMount()
    // this.setState({
    //   listArray : result
    // })

    this.props.newlistArray(result);
  }

  handleDelete=(e)=>{
    const id = e.target.id;
    console.log(id);

    Axios.delete('./Product_List/'+id+'.json')
    .then(response=>{
      console.log(response);
      window.location.reload();
  })
  }

  filterByPayment = (e) => {
    
    const listBy = this.props.dataArray;
    const filter = e.target.value;
    console.log(filter);
    let result = [];
    if(filter === "COD")
      result = listBy.filter((a) => {return a.payment === "COD"})
    else if(filter === "Online Payment")
      result = listBy.filter((a) => {return a.payment === "Online Payment"})
    else if(filter === "Both")
      result = listBy.filter((a) => {return a.payment === "Both"})
    else
      this.componentDidMount()
    // this.setState({
    //   listArray : result
    // })

    this.props.newlistArray(result);
  }

  render() {
    return (
     <div className="App">
      <MyNavbar/>
      <div className="col-md-4 float-left">
      <h3>Input Product Details</h3>
        <FormInput/>
        </div>

        
        <div className="col-md-8 float-left" style={{borderLeft:"solid",borderColor:"black",borderWidth:"1px"}}>
        <h2>Product List</h2>
        <div className="row mb-2">
              <span className = "ml-1"><Sort onchange = {this.sortBy}/></span>
              <span className = "ml-2"><Filter onchange = {this.filterBy}/></span>
              <span className = "ml-2"><CityFilter onchange={this.filterCity}/></span>
              <span className = "ml-2"><FilterPayment onchange={this.filterByPayment}/></span>
            </div>

        <ProdList dataarray={this.props.listArray} change={this.handleDelete}/>

        </div>
       </div>
      
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
      newdataArray(array){
          dispatch(actions.dataArray(array));
      },
      newlistArray(array){
          dispatch(actions.listArray(array));
      }
  }
}

function mapStateToProps(state){
  return {
      dataArray:state.list.dataArray,
      listArray:state.list.listArray
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
//export default App;
