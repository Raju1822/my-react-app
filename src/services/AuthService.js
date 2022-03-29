import axios from 'axios';

// const AUTH_API_BASE_URL = "http://localhost:8080/api/auth";

 const AUTH_API_BASE_URL = "https://spring2n23.herokuapp.com/api/auth";

class StaffService{

    getAllAuth(){
        return axios.get(AUTH_API_BASE_URL);
    }

    createAuth(auth){
        // alert("hello"+ employee.firstName)
        return axios.post(AUTH_API_BASE_URL, auth);
    }

    getAuthById(authId){
        return axios.get(AUTH_API_BASE_URL + '/' + authId);
    }

    deleteEAuthbyId(authId){

        return axios.delete(AUTH_API_BASE_URL + '/' + authId);
    }
}

export default new StaffService()