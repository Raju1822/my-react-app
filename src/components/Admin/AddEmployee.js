import React, { Component } from "react";
import EmployeeService from "../../services/EmployeeService";


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
      mobile: "",
      gender: "",
      doj:"",
      address:"",
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
  changeMobileHandler = (event) => {
    this.setState({ mobile: event.target.value });
  };
  changeGenderHandler = (event) => {
    this.setState({ gender: event.target.value });
  };
  changeDojHandler = (event) => {
    this.setState({ doj: event.target.value });
  };
  changeAddressHandler = (event) => {
    this.setState({ address: event.target.value });
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
      mobile: this.state.mobile,
      gender: this.state.gender,
      doj: this.state.doj,
      address: this.state.address,
    };
    console.log("employee => " + JSON.stringify(employee));
    EmployeeService.createEmployee(employee);
    window.location.href = "/admin";
    alert("Employee addedd successfuly..!");
  };

  cancel(){
    this.props.history.push('/employees');
}
  render() {
    return (

    <>

<div className="header">
                <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-3">
            <a className="navbar-brand" href="/">
              {/* <img src={NIT_Raipur} alt="page-icon"></img> */}
              NIT Raipur
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                  <a className="nav-link" href="/admin">
                    {" "}
                    <i className="fa fa-home mr-2"></i>
                     Admin <span className="sr-only">(current)</span>
                  </a>
                </li>

                <li className="nav-item active">
                  <a className="nav-link" href="/addEmployee">
                    <i className="fa fa-file mr-2" />
                    Add Employee
                  </a>
                </li>


                <li className="nav-item">
                  <a className="nav-link" href="/search">
                    <i className="fa fa-search mr-2"></i>
                    Search
                  </a>
                </li>

                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"

                    aria-expanded="false"
                  >
                    <i className="fa fa-user mr-2"></i>
                    Logins
                  </a>
                  <div
                    className="dropdown-menu p-2 my-2"
                    aria-labelledby="navbarDropdownMenuLink"
                  >

                    <a className="dropdown-item" href="##">
                      Feature 1
                    </a>
                    <a className="dropdown-item" href="##">
                      Feature 2
                    </a>
                    <a className="dropdown-item" href="##">
                      Feature 3
                    </a>
                  </div>
                </li> */}

                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    {" "}
                    <i className="fa fa-phone mr-2"></i>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
                </header>
        </div>

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
                <label> Gender: </label>
                <input
                  placeholder="Male/Female"
                  name="gender"
                  className="form-control"
                  required
                  value={this.state.gender}
                  onChange={this.changeGenderHandler}
                />
                </div>
                <div className="form-group">
                <label> Mobile No.: </label>
                <input
                  placeholder="Mobile"
                  name="mobile"
                  className="form-control"
                  required
                  value={this.state.mobile}
                  onChange={this.changeMobileHandler}
                />
              </div>
              <div className="form-group">
                <label> Date of Joining: </label>
                <input
                type="date"
                  placeholder="Enter Date"
                  name="doj"
                  className="form-control"
                  required
                  value={this.state.doj}
                  onChange={this.changeDojHandler}
                />
                </div>
              <div className="form-group">
                <label> Salary: </label>
                <input
                  placeholder="Salary"
                  name="salary"
                  className="form-control"
                  required
                  value={this.state.salary}
                  onChange={this.changeSalaryHandler}
                />
                </div>

            <div className="form-group">
                  <label> Address: </label>
                  <input
                    placeholder="Address"
                    name="address"
                    className="form-control"
                    required
                    value={this.state.address}
                    onChange={this.changeAddressHandler}
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


    </>

    );
  }
}
export default AddEmployee;
