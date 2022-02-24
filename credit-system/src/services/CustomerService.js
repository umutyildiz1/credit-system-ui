import axios from "axios";

class CustomerService {

    create(request){
        return axios.post("/api/customers/create",request)
    }

    
}

export default UserService