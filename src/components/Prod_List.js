import React from 'react';
const ProdList = (props) => {
    const listOfProd = props.dataarray.map(appn => {
        return(
            <div className = "card mb-1 mr-2">
                <div className = "figure">
                    <img className = "img-thumbnail" alt = {appn.name} src = {appn.image} height = "200px" width = "200px" style = {{float:"left",clear:"left",margin:"5px"}}/>
                    <span className = "card-body">
                        <h4>Product Name: {appn.name}</h4>
                        <p>Product Type: {appn.select}</p>
                        <p>Product Price: {appn.price}</p>
                        <p>Quantity: {appn.quantity}</p>
                    </span>
                </div>
            </div>
            );
    })
    return <div>{listOfProd}</div>;
}
export default ProdList;