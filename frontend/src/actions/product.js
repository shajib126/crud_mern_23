import axios from 'axios'
export const createProduct = (productName,productCode,image,unitPrice,totalPrice)=>async(dispatch)=>{
    try {
        dispatch({
            type:"CreateProductRequest"
        })
        const {data} = await axios.post('/api/v1/createProduct',{productName,productCode,image,unitPrice,totalPrice},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        dispatch({
            type:"CreateProductSuccess",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:"CreateProductFailure",
            payload:error.response.data.message
        })
    }
}

export const readProduct = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"ReadProductRequest"
        })
        const {data} = await axios.get('/api/v1/readProduct')
        dispatch({
            type:"ReadProductSuccess",
            payload:data.data
        })
    } catch (error) {
        dispatch({
            type:"ReadProductFailure",
            payload:error.response.data.message
        })        
    }
}
export const readProductById = (id) => async(dispatch)=>{
    console.log(id);
    try {
        dispatch({
            type:"ReadProductByIdRequest"
        })
        const {data} = await axios.get(`/api/v1/readProduct/${id}`)
        dispatch({
            type:"ReadProductByIdSuccess",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:"ReadProductByIdFailure",
            payload:error.response.data.message
        })
    }
}
export const deleteProduct = (id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"DeleteProductRequest"
        })
        const {data} = await axios.get(`/api/v1/deleteProduct/${id}`)
        dispatch({
            type:"DeleteProductSuccess",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:"DeleteProductFailure",
            payload:error.response.data.message
        })        
    }
}

export const editProduct = (id,productName,productCode,image,unitPrice,totalPrice)=>async(dispatch)=>{
    console.log(id,productName,productCode,image,unitPrice,totalPrice);
    try {
        dispatch({
            type:"UpdateProductRequest"
        })
        const {data} = await axios.post(`/api/v1/updateProduct/${id}`,{productName,productCode,image,unitPrice,totalPrice},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        dispatch({
            type:"UpdateProductSuccess",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:"DeleteProductFailure",
            payload:error.response.data.message
        })
    }
}