import React, { Component } from "react";
import StaffService from "../../services/StaffService";
class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.SubmitForm = this.SubmitForm.bind(this);
    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
      password: "",
      salary: "",
    };
  }
  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };
  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  changeSalaryHandler = (event) => {
    this.setState({ salary: event.target.value });
  };
  SubmitForm = (e) => {
    // alert("hello"+ employee.firstName );
    // axios.post('http://localhost:8080/api/staff', employee)
    // .then(res => console.log(res.data));
    e.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
      password: this.state.password,
      salary: this.state.salary,
    };
    console.log("employee => " + JSON.stringify(employee));
    StaffService.createEmployee(employee);
    window.location.href = "/admin";
    alert("Employee addedd successfuly..!");
  };

  cancel(){
    this.props.history.push('/employees');
}
  render() {
    return (
      <div className="container">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="text-center p-5">
            <h2>Add New Employee</h2>
          </div>
          <div className="p-5">
            <form onSubmit={this.SubmitForm} method="post">
              <div className="form-group">
                <label> First Name: </label>
                <input
                  placeholder="First Name"
                  name="firstName"
                  required
                  className="form-control"
                  value={this.state.firstName}
                  onChange={this.changeFirstNameHandler}
                />
              </div>
              <div className="form-group">
                <label> Last Name: </label>
                <input
                  placeholder="Last Name"
                  name="lastName"
                  className="form-control"
                  required
                  value={this.state.lastName}
                  onChange={this.changeLastNameHandler}
                />
              </div>
              <div className="form-group">
                <label> Email Id: </label>
                <input
                type="email"
                  placeholder="name@example.com"
                  name="emailId"
                  className="form-control"
                  required
                  value={this.state.emailId}
                  onChange={this.changeEmailHandler}
                />
              </div>
              <div className="form-group">
                <label> Password: </label>
                <input
                  placeholder="password"
                  name="password"
                  className="form-control"
                  required
                  value={this.state.password}
                  onChange={this.changePasswordHandler}
                />
              </div>
              <div className="form-group">
                <label> Salary: </label>
                <input
                  placeholder="password"
                  name="salary"
                  className="form-control"
                  required
                  value={this.state.salary}
                  onChange={this.changeSalaryHandler}
                />
              </div>
              <button className="btn btn-primary m-2">
                Submit
              </button>
              <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default AddEmployee;
