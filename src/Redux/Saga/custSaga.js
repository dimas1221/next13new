import { call, put } from "@redux-saga/core/effects"
import ApiCustomers from "../Service/apiCustomers"
import { doCustRequest, doCustUpdate, doDeleteCust,doCustCreate, doCustReqSuccess, doAddCustSuccess, doCustUpdateSuccess, doDeleteCustSuccess, doCustReqFailed, doAddCustFailed, doCustUpdateFailed, doDeleteCustFailed } from "../Action/reducerAction"


function* handleCust(){
    try {
        const result = yield call(ApiCustomers.getAll)
        yield put(doCustReqSuccess(result.data))
    } catch (error) {
        yield put(doCustReqFailed)
    }
}

function* handleAddCust(action){
    try {
        const result = yield call(ApiCustomers.create, action.payload)
        yield put(doAddCustSuccess(result.data))
    } catch (error) {
        yield put(doAddCustFailed)
    }
}

function* handleUpdateCust(action){
    try {
        const result = yield call(ApiCustomers.update, action.payload)
        yield put(doCustUpdateSuccess(result.data))
    } catch (error) {
        yield put(doCustUpdateFailed(error))
    }
}

function* handleDelCust(action){
    try {
        yield call(ApiCustomers.remove, action.payload)
        yield put(doDeleteCustSuccess(action.payload))
    } catch (error) {
        yield put(doDeleteCustFailed(error))
    }
}

export {
    handleCust,
    handleAddCust,
    handleUpdateCust,
    handleDelCust
}