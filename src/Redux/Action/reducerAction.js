import ActionTypes from "../Constant/ActionType";


export const doCustRequest=()=>{
    return {
        type:ActionTypes.GET_CUSTOMERS
    }
}

export const doCustCreate=(payload)=>{
    return {
        type:ActionTypes.ADD_CUSTOMERS,
        payload
    }
}

export const doAddCustSuccess=(payload)=>{
    return {
        type:ActionTypes.ADD_CUSTOMERS_SUCCEED,
        payload
    }
}

export const doAddCustFailed=(payload)=>{
    return {
        type:ActionTypes.ADD_CUSTOMERS_FAILED,
        payload
    }
}

export const doCustReqSuccess=(payload)=>{
    return {
        type:ActionTypes.GET_CUSTOMERS_SUCCEED,
        payload
    }
}

export const doCustReqFailed=(payload)=>{
    return {
        type:ActionTypes.GET_CUSTOMERS_FAILED,
        payload
    }
}

export const doCustUpdate=(payload)=>{
    return {
        type:ActionTypes.UPDATE_CUSTOMERS,
        payload
    }
}

export const doCustUpdateSuccess=(payload)=>{
    return {
        type:ActionTypes.UPDATE_CUSTOMERS_SUCCEED,
        payload
    }
}

export const doCustUpdateFailed=(payload)=>{
    return {
        type:ActionTypes.UPDATE_CUSTOMERS_FAILED,
        payload
    }
}

export const doDeleteCust=(payload)=>{
    return {
        type:ActionTypes.DEL_CUSTOMERS,
        payload
    }
}

export const doDeleteCustSuccess=(payload)=>{
    return {
        type:ActionTypes.DEL_CUSTOMERS_SUCCED,
        payload
    }
}

export const doDeleteCustFailed=(payload)=>{
    return {
        type:ActionTypes.DEL_CUSTOMERS_FAILED,
        payload
    }
}