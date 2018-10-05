import {combineReducers } from 'redux';
const NEW_DataArray = 'NEW_DataArray';
const NEW_ListArray = 'NEW_ListArray';
const NEW_Name = 'NEW_Name';
const NEW_Price = 'NEW_Price';
const NEW_Quantity = 'NEW_Quantity';
const NEW_Image = 'NEW_Image';
const NEW_Select = 'NEW_Select';
const NEW_Payment = 'NEW_Payment';
const NEW_City = 'NEW_City';

const initialState = {
    dataArray:[],
    listArray:[]
};

export const actions = {
    dataArray(array1){
        return{
            type:NEW_DataArray,
            payload:array1
        }
    },
    listArray(array2){
        return{
            type:NEW_ListArray,
            payload:array2
        } 
    },
    dataName(value){
        return{
            type:NEW_Name,
            payload:value
        } 
    },
    dataImage(value){
        return{
            type:NEW_Image,
            payload:value
        } 
    },
    dataPrice(value){
        return{
            type:NEW_Price,
            payload:value
        } 
    },
    dataQuantity(value){
        return{
            type:NEW_Quantity,
            payload:value
        } 
    },
    dataSelect(value){
        return{
            type:NEW_Select,
            payload:value
        } 
    },
    dataPayment(value){
        return{
            type:NEW_Payment,
            payload:value
        } 
    },
    dataCity(value){
        return{
            type:NEW_City,
            payload:value
        } 
    },
}

function listReducer(state = initialState, action){
    switch(action.type){
        case NEW_DataArray:
        return{
            ...state,
            dataArray:action.payload
        };
        case NEW_ListArray:
        return{
            ...state,
            listArray:action.payload
        };
        default:
        return state;
    }
}

const initialFormState={
            name: '',
            image: '',
            price: '',
            quantity: '',
            select: '',
            payment: '',
            city: []
};

function formReducer(state=initialFormState, action){
    switch(action.type){
        case NEW_Name:
        return{
            ...state,
            name:action.payload
        };
        case NEW_Image:
        return{
            ...state,
            image:action.payload
        };
        case NEW_Price:
        return{
            ...state,
            price:action.payload
        };
        case NEW_Quantity:
        return{
            ...state,
            quantity:action.payload
        };
        case NEW_Select:
        return{
            ...state,
            select:action.payload
        };
        case NEW_Payment:
        return{
            ...state,
            payment:action.payload
        };
        case NEW_City:
        return{
            ...state,
            city:action.payload
        };

        default:
        return state;
    } 
}


export const rootReducer = combineReducers ({
    list:listReducer,
    form:formReducer
});