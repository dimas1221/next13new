import ActionTypes from "../Constant/ActionType";

const initialState ={
    customers:[] 
}
function customersReducers(state = initialState, action) {
    switch(action.type){
        case ActionTypes.GET_CUSTOMERS:
            return{...state};
        case ActionTypes.ADD_CUSTOMERS:
            return{...state};
        case ActionTypes.UPDATE_CUSTOMERS:
            return {...state}
        case ActionTypes.DEL_CUSTOMERS:
            return{...state }
        case ActionTypes.GET_CUSTOMERS_SUCCEED:
            return{...state, customers: action.payload};
        case ActionTypes.ADD_CUSTOMERS_SUCCEED:
            return{...state, customers: [...state.customers, action.payload]};
        case ActionTypes.UPDATE_CUSTOMERS_SUCCEED:
            return applyUpdateCust(state, action)
        case ActionTypes.DEL_CUSTOMERS_SUCCED:
            return{
                ...state,
                customers:state.customers.filter(customers => customers.id !== action.payload.id)
            }
        case ActionTypes.GET_CUSTOMERS_FAILED:
            return{...state, customers: action.payload};
        case ActionTypes.ADD_CUSTOMERS_FAILED:
            return{...state, customers: [...state.customers, action.payload]};
        case ActionTypes.UPDATE_CUSTOMERS_FAILED:
            return applyUpdateCust(state, action)
        case ActionTypes.DEL_CUSTOMERS_FAILED:
            return{
                ...state,
                customers:state.customers.filter(customers => customers.id !== action.payload.id)
            } 
          
        default:
            return {...state, customers:action.payload}
    }
}

const applyUpdateCust = async (state, action)=>{
    return state.customers.map((customers)=>{
        if(customers.custId === action.payload.custId){
            return{
                ...state,
                ...action.payload,
            };
        }else{
            return state;
        }
    });
}

export default customersReducers;