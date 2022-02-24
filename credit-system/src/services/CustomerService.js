import axios from "axios";

class CustomerService {

    create(request,token){
        const headers= {'Authorization':`Bearer ${token}`}
       axios.post("/api/customers/create",request,{headers})
        
    }

    
}

export default CustomerService