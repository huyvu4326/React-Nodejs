import instance from "./instance";

export const getProducts = () => {
    return instance.get('/products');
}
export const deleteProducts = (id:number|string) => {
    return instance.delete(`/products/${id}`,{
        headers:{
            Authorization:`Bearer ${JSON.parse(localStorage.getItem('token')!)}`
        }
    })
}