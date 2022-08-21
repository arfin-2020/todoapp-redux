import { ADD, DELETE, REMOVE_ALL } from "./actionTypes";


export const add = (data) =>{
    return{
        type: ADD,
        payload:{
            id: Math.random(),
            data: data
        }

    };
};

export const remove = (id)=>{
    return{
        type: DELETE,
        id: id
    };
};

export const removeAll = () =>{
    return{
        type: REMOVE_ALL,

    };
};