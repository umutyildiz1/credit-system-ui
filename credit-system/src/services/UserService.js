import axios from "axios";

class UserService {

    create(request){
        return axios.post("/api/users/signup",request)
    }

    login(request){
        return axios.post("/api/users/signin",request)
    }
    
    getUser(sid){
        return axios.get("/api/users/get/"+sid)
    }
}

export default UserService