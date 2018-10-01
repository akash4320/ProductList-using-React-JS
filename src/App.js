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
// import axios from 'axios';

class App extends Component {
  state={
    dataArray:[],
    listArray:[]
  }
  componentDidMount(){
    Axios.get('./Product_List.json').then(res=>{
      let data=[];
      for(let i in res.data){
        data.push({id:i,name:res.data[i].name,image:res.data[i].image,price:res.data[i].price,
          quantity:res.data[i].quantity,select:res.data[i].select,payment:res.data[i].payment,
          city:res.data[i].city})
      }
      this.setState({dataArray:data,listArray:data});
    })
  }

  sortByPriceLH = () => {
    const listByPrice = this.state.dataArray;
    listByPrice.sort((a,b) => {return a.price - b.price})
    this.setState({
      listArray : listByPrice
    })
  }
  sortByPriceHL = () => {
    const listByPrice = this.state.dataArray;
    listByPrice.sort((a,b) => {return b.price - a.price})
    this.setState({
      listArray : listByPrice
    })
  }
  sortByQuantityLH = () => {
    const listByPrice = this.state.dataArray;
    listByPrice.sort((a,b) => {return a.quantity - b.quantity})
    this.setState({
      listArray : listByPrice
    })
  }
  sortByQuantityHL = () => {
    const listByPrice = this.state.dataArray;
    listByPrice.sort((a,b) => {return b.quantity - a.quantity})
    this.setState({
      listArray : listByPrice
    })
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
    
    const listBy = this.state.dataArray;
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
    this.setState({
      listArray : result
    })
  }

  filterCity = (e) => {
    const listByCity = this.state.dataArray;
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
    this.setState({
      listArray : result
    })
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
            </div>

        <ProdList dataarray={this.state.listArray} change={this.handleDelete}/>

        </div>
       </div>
      
    );
  }
}

export default App;
