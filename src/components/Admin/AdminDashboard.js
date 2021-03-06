import React, { Component } from "react";
import AdminService from "../../services/AdminService";
import "../../css/AdminDashboard.css";
import Admin from "../img/admin.png";

import AdminHeader from "./AdminHeader";
import EmployeeService from "../../services/EmployeeService";
import AppraisalService from "../../services/AppraisalService";
import ContactService from "../../services/ContactService";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: [],
      staff: [],
      contact: [],
    };
  }
  addEmployee() {
    window.location.href = "/addemployee";
  }

  deleteEmployee(employeeId) {
    EmployeeService.deleteEmployee(employeeId);
    alert("Employee of id " + employeeId + " is removed");
    this.props.history.push(`/contact/`);
  }

  editEmployee(employeeId) {
    this.props.history.push(`/add-employee/${employeeId}`);
  }

  viewEmployee(employeeId) {
    this.props.history.push(`/view-employee/${employeeId}`);
  }

  EditSalary(id) {
    this.props.history.push(`/editsalary/${id}`);
  }

  componentDidMount() {
    AdminService.getAdmin().then((res) => {
      this.setState({ admin: res.data });
    });
    EmployeeService.getEmployees().then((res) => {
      const persons = res.data;
      const longeur = res.data.length;
      this.setState({ staff: res.data, persons, longeur });
    });
    AppraisalService.getAllAppraisal().then((res) => {
      const TotalAppraisal = res.data.length;
      this.setState({ TotalAppraisal });
    });
    ContactService.getContact().then((res) => {
      const messages = res.data.length;
      this.setState({ contact: res.data, messages });
    });
  }

  // Contact message delete function
  DeleteMessage(messageid){
    ContactService.deleteMessage(messageid);
    alert("Message is deleted")
    window.location.reload();
  }

  Total() {
    let TotalSalary = 0;
    this.state.staff.map((employee) => (TotalSalary += employee.salary));
    return TotalSalary;
  }

  render() {
    return (
      <>
        <AdminHeader />

        <main role="main" className="">
          <section className="jumbotron text-center">
            <div className="container ">
              <h1 className="jumbotron-heading ">
                <img src={Admin} alt="profile-pic" />
              </h1>

              <div className="lead ">
                {this.state.admin.map((adm) => (
                  <p key={adm.id}>
                    <strong> Admin : </strong>
                    {adm.firstName} {adm.lastName}
                  </p>
                ))}
              </div>
              <p>
                <a href="#info">
                  {" "}
                  <button type="button" className="btn btn-primary m-2">
                    Profile
                  </button>
                </a>
                <button
                  type="button"
                  className="btn btn-secondary m-2"
                  data-toggle="modal"
                  data-target="#myModal"
                  // onClick={ this.Handlelogout()}
                >
                  Logout
                </button>
              </p>
            </div>
          </section>
          {/* Modal for admin logout */}
          <div className="container p-2">
            <div className="modal" id="myModal">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <h1 className="text-center">
                      <img src={Admin} alt="profile-pic" />
                    </h1>
                    <h4 className="modal-title text-center">Admin</h4>
                  </div>
                  <div className="modal-header">
                    <h5 className="text-muted">Do you want to logout?</h5>
                  </div>
                  <div className="modal-footer">
                    <a
                      href="/admin"
                      className="btn btn-warning "
                      data-dismiss="modal"
                    >
                      No
                    </a>
                    <a href="/" className="btn btn-success">
                      Yes
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Album Page  */}
          <div className="container">
            <div className="p-5 bg-info">
              <div className="row">
                <div className="col-md-3 mb-2">
                  <div className="card shadow text-center">
                    <div className="m-3">
                      <p className="card-text">
                        <i className="fa fa-users fa-2x"></i>
                      </p>
                      <p>{this.state.longeur}</p>
                    </div>
                    <div className="bg-warning text-white">
                      <p className="pt-2">Total Employess</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div className="card shadow text-center">
                    <div className="m-3">
                      <p className="card-text">
                        <i className="fa fa-file fa-2x"></i>
                      </p>
                      <p>{this.state.TotalAppraisal}</p>
                    </div>
                    <div className="bg-success text-white">
                      <p className="pt-2">Total Report</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div className="card shadow text-center">
                    <div className="m-3">
                      <p className="card-text">
                        <i className="fa fa-money fa-2x"></i>
                      </p>
                      <p>{this.Total()}</p>
                    </div>
                    <div className="bg-primary text-white">
                      <p className="pt-2">Total Salary</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card shadow text-center">
                    <div className="m-3">
                      <p className="card-text">
                        <i className="fa fa-bell fa-2x"></i>
                      </p>
                      <p>{this.state.messages}</p>
                    </div>
                    <div className="bg-danger text-white">
                      <p className="pt-2">Notification</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*        Employee Details here    */}

          <div className="container p-4 mt-5">
            <h2 className="text-center">Employees List </h2>

            <br></br>
            <div className="overflow-auto row">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th> Employee First Name</th>
                    <th> Employee Last Name</th>
                    <th> Employee Email Id</th>
                    <th> Update</th>
                    <th>Delete</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.staff.map((employee) => (
                    <tr key={employee.id}>
                      <td> {employee.firstName} </td>
                      <td> {employee.lastName}</td>
                      <td> {employee.emailId}</td>
                      <td>
                        <button
                          onClick={() => this.editEmployee(employee.id)}
                          className="btn btn-info"
                        >
                          Update{" "}
                        </button>{" "}
                      </td>
                      <td>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => this.deleteEmployee(employee.id)}
                          className="btn btn-danger"
                        >
                          Delete{" "}
                        </button>
                      </td>
                      <td>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => this.viewEmployee(employee.id)}
                          className="btn btn-warning"
                        >
                          View{" "}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="row"></div>
          </div>

          {/* Slider page verticle nav */}
          <section className="py-4 header">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div
                    className="nav flex-column nav-pills nav-pills-custom"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      className="nav-link mb-3 p-3 shadow active"
                      id="v-pills-home-tab"
                      data-toggle="pill"
                      href="#v-pills-home"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <i className="fa fa-user-circle-o mr-2"></i>
                      <span className="font-weight-bold small text-uppercase">
                        Personal information
                      </span>
                    </a>
                    <a
                      className="nav-link mb-3 p-3 shadow"
                      id="v-pills-profile-tab"
                      data-toggle="pill"
                      href="#v-pills-profile"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      <i className="fa fa-users mr-2"></i>
                      <span className="font-weight-bold small text-uppercase">
                        Employess
                      </span>
                    </a>
                    <a
                      className="nav-link mb-3 p-3 shadow"
                      id="v-pills-messages-tab"
                      data-toggle="pill"
                      href="#v-pills-messages"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      <i className="fa fa-money mr-2"></i>
                      <span className="font-weight-bold small text-uppercase">
                        Salary Table
                      </span>
                    </a>
                    <a
                      className="nav-link mb-3 p-3 shadow"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <i className="fa fa-bell mr-2"></i>
                      <span className="font-weight-bold small text-uppercase">
                        Messages
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade shadow rounded bg-white show active p-5"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <h4 className="mb-4" id="info">
                        Personal information
                      </h4>

                      <p className="text-muted m-5">
                        {this.state.admin.map((adm) => (
                          <p key={adm.id}>
                            <strong> Admin : </strong>
                            {adm.firstName} {adm.lastName}
                          </p>
                        ))}
                      </p>
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <h4 className="text-center mb-4">
                        Employee Table
                        <button
                          type="button"
                          className="btn btn-success mx-5 m-2"
                          onClick={this.addEmployee}
                        >
                          Add Employee
                        </button>
                      </h4>
                      <div className="overflow-auto text-muted mb-2">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th> Employee Id</th>
                              <th> Employee First Name</th>
                              <th> Employee Last Name</th>
                              <th> Employee Email</th>
                              <th>Update</th>
                              <th>Delete</th>
                              <th>View</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.staff.map((employee) => (
                              <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td> {employee.firstName} </td>
                                <td> {employee.lastName}</td>
                                <td> {employee.emailId}</td>
                                <td>
                                  <button
                                    onClick={() =>
                                      this.editEmployee(employee.id)
                                    }
                                    className="btn btn-info"
                                  >
                                    Update
                                  </button>
                                </td>
                                <td>
                                  <button
                                    style={{ marginLeft: "10px" }}
                                    onClick={() =>
                                      this.deleteEmployee(employee.id)
                                    }
                                    className="btn btn-danger"
                                  >
                                    Delete
                                  </button>
                                </td>
                                <td>
                                  <button
                                    style={{ marginLeft: "10px" }}
                                    onClick={() =>
                                      this.viewEmployee(employee.id)
                                    }
                                    className="btn btn-success"
                                  >
                                    View
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      <h4 className="text-center mb-4">Employees Salary</h4>
                      <div className="overflow-auto text-muted mb-2">
                        <table className="table text-center table-bordered">
                          <thead>
                            <tr>
                              <th> Employee Id</th>
                              <th> Employee Name</th>
                              <th>Salary</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.staff.map((employee) => (
                              <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>
                                  {employee.firstName} {employee.lastName}
                                </td>
                                <td> {employee.salary}</td>
                                <td>
                                  <button
                                    style={{ marginLeft: "10px" }}
                                    className="btn btn-info"
                                    onClick={() => this.EditSalary(employee.id)}
                                  >
                                    Edit
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <h4 className=" mb-4">Messages:</h4>
                      <p className="mb-2">
                        {this.state.contact.map((info) => (
                          <p key={info.id}>
                            <div className="card shadow-sm p-3">
                              <p className="text-center p-2 lead">
                                <u>{info.fullName} </u>
                              </p>
                              {/* <p className="text-muted text-center">{info.emailId}</p> */}
                              <p className="p-2">{info.message}</p>

                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={() =>
                                  this.DeleteMessage(info.id)
                                }
                              >
                                Delete Message
                              </button>
                            </div>
                          </p>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}
export default AdminDashboard;
