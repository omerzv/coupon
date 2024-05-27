import { store } from "../Redux/store"
import axios from "axios";
import { deleteCompany,deleteCustomer,addCompanies, 
    addCustomers,updateCustomers,updateCompanies ,addCompany,addCustomer } from "../Redux/clientSlice";




export const getAllCompaniesAndCustomer = async () => {
    var comp = [];
    var cust = [];
    
    await axios.get("http://localhost:8080/admin/getAllCompany")
        .then(function (response) {
            console.log(response.data)
            comp = response.data
            store.dispatch(addCompanies(comp))
        })
        .catch(function (error) { console.log(error) });

    await axios.get("http://localhost:8080/admin/getAllCustomers")
        .then(function (response) {
            console.log(response.data)
            cust = response.data
            store.dispatch(addCustomers(cust))
        })
        .catch(function (error) { console.log(error) });

    return [comp,cust];
}

export const updateCustomer=async(customer)=>{
   
    await axios.put("http://localhost:8080/admin/updateCustomer",customer)
    .then( function (response) {
        store.dispatch(updateCustomers(customer))
        console.log(response.data) })
    .catch(function (error) {
        console.log(error)
        
    });


}
export const updateCompany=async(company)=>{
   
    await axios.put("http://localhost:8080/admin/updateCompany",company)
    .then( function (response) {
        store.dispatch(updateCompanies(company))
        console.log(response.data) })
    .catch(function (error) {
        console.log(error)
        
    });
}

export const removeCompany=async(id)=>{
   
    await axios.delete("http://localhost:8080/admin/deleteCompany",{params: {
        id:id
      }})
    .then( function (response) {
        store.dispatch(deleteCompany(id))
        console.log(response.data) })
    .catch(function (error) {
        console.log(error)
        
    });
}

export const removeCustomer=async(id)=>{

    await axios.delete("http://localhost:8080/admin/deleteCustomer",{params: {
        id:id
      }})
    .then( function (response) {
        store.dispatch(deleteCustomer(id))
        console.log(response.data) })
    .catch(function (error) {
        console.log(error)
    });
}

export const AddCustomer=async(customer)=>{

    await axios.post("http://localhost:8080/admin/addCustomer",customer)
    .then( function (response) {
        store.dispatch(addCustomer(response.data))
        console.log(response.data) })
    .catch(function (error) {
        console.log(error)
    });
}
export const AddCompany=async(company)=>{

    await axios.post("http://localhost:8080/admin/addCompany",company)
    .then( function (response) {
        store.dispatch(addCompany(response.data))
        console.log(response.data) })
    .catch(function (error) {
        console.log(error)
    });
}


