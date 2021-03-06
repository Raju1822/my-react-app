import axios from "axios";

// const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/staff";

const EMPLOYEE_API_BASE_URL = "https://spring2n23.herokuapp.com/api/staff";

class EmployeeService {
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  createEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }

  getEmployeeById(employeeId) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + employeeId);
  }

  updateEmployee(employee, employeeId) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + employeeId, employee);
  }

  updateEmployeeReason(employee, employeeId) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/reason/" + employeeId, employee);
  }

  updateEmployeeStatus(employee, employeeId) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/status/" + employeeId, employee);
  }

  updateEmployeeSalary(employee, employeeId) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/salary/" + employeeId, employee);
  }

  deleteEmployee(employeeId) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + employeeId);
  }
}

export default new EmployeeService();
