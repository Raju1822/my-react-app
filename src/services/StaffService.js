import axios from 'axios';

const STAFF_API_BASE_URL = "http://localhost:8080/api/staff";

// const STAFF_API_BASE_URL = "https://spring2n23.herokuapp.com/api/staff";

class StaffService{

    getAllStaff(){
        return axios.get(STAFF_API_BASE_URL);
    }

    createEmployee(employee){
        // alert("hello"+ employee.firstName)
        return axios.post(STAFF_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(STAFF_API_BASE_URL + '/' + employeeId);
    }

    deleteEmployeebyId(employeeId){

        return axios.delete(STAFF_API_BASE_URL + '/' + employeeId);
    }
}

export default new StaffService()