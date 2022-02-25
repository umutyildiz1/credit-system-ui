import axios from "axios";

class CustomerService {

    create(request,token){
        const headers= {'Authorization':`Bearer ${token}`}
       axios.post("/api/customers/create",request,{headers})
        
    }
    get(sid,token){
        const headers= {'Authorization':`Bearer ${token}`}
      return axios.get("/api/customers/"+sid,{headers})
        
    }


    
}

export default CustomerService