import { ADD, DELETE, REMOVE_ALL } from "./actionTypes";

const initialState = {
    todoList:[],
    
}
const todoReducer = (state = initialState, action) =>{
    switch(action.type){
    
        case ADD :
            const {id, data} = action.payload;
            return{
                ...state,
                todoList:[
                    ...state.todoList,
                    {
                         id: id,
                         data: data,      
                    }
                ] 
            };
        case DELETE:
            const newList = state.todoList.filter((element)=>element.id !== action.id)
           
            return{
                ...state,
                todoList: newList,
            };

            case REMOVE_ALL:
            return{
                ...state,
                todoList:[]
            }
            default: 
            return state;
            
    }
    
}

export default todoReducer;