import axios from "../../config/http-common";


const getAll = async()=>{
    try {
    const result = await axios.get("/cats/customers")
    return result
    } catch (error) {
     return error
    }
    
}

const getId = async (id) =>{
    try {
        const result = await axios.get(`/cats/${id}`)
    return result
    } catch (error) {
        return error
    }
}

const create = async (data) =>{
    try {
        const result = await axios.post("/cats/createcus", data)
    return result
    } catch (error) {
        return error
    }
}

const update = async (data)=>{
    try {
        const result = await axios.put(`/cats/${data.custId}`, data)
    return result
    } catch (error) {
        return error
    }
}

const remove = async (id) =>{
    try {
        const result = await axios.delete(`/cats/${id}`)
    return result
    } catch (error) {
        return error
    }
}

const ApiCustomers ={
    getAll,
    getId,
    create,
    update,
    remove
}

export default ApiCustomers