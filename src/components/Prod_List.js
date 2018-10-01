import React from 'react';
import {Button} from 'reactstrap';
import './Prod_list.css'
const ProdList = (props) => {
    const listOfProd = props.dataarray.map(appn => {
        return(
            <div className = "card mb-1 mr-2">
                <div className = "figure">
                    <img className = "img-thumbnail" alt = {appn.name} src = {appn.image} height = "200px" width = "200px" style = {{float:"left",clear:"left",margin:"5px"}}/>
                        <Button className=" mr-1 close" 
                        style={{border:"solid",color:"white",background:"orangered "}} 
                        id={appn.id} 
                        onClick={props.change}>X</Button>
                    <span className = "card-body">
                        <h4>Product Name: {appn.name}</h4>
                        <p>Product Type: {appn.select}</p>
                        <p>Product Price: {appn.price}</p>
                        <p>Quantity: {appn.quantity}</p>
                        Availability:<ul type="none" key={appn.id}><li>{appn.city[0]}</li><li>{appn.city[1]}</li><li>{appn.city[2]}</li></ul>
                    </span>

                </div>
                <div>
                 
                </div>
            </div>
            );
    })
    return <div>{listOfProd}</div>;
}
export default ProdList;