 
import { endpoints } from '../config';
 
 export default class TenantService {

 static getData () {
    return new Promise((resolve, reject) => {
        fetch(`${endpoints.tenants.url}`)
            .then(response => {
                return response.json()})
            .then((data)=> {
                resolve(data)
            })
            .catch(error=> reject({message:"An error occured", error}))
        })
    }

    static getTenantDetails (id:any) {
        return new Promise((resolve, reject) => {
            fetch(`${endpoints.tenants.url}/${id}`)
            .then(response => {
                return response.json()})
            .then((data)=> {
                resolve(data)
            })
            .catch(error=> reject({message:`An error occured while fetching tenant's data`, error}))
        })
    }
 }
 