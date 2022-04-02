import React, { Component } from "react";
import AppraisalService from "../../services/AppraisalService";
import AuthService from "../../services/AuthService";
import EmployeeService from "../../services/EmployeeService";
import profile from "../img/avatar.png";
import AuthHeader from "./AuthHeader";

class AuthorityDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: [],
      appraisal: [],
      staff:[],
      id: "",
      reason: "",
      status: "1",
      stat: "2",
      // firstName:"",
      // lastName:"",
      // emailId:"",
    };
    this.changeIdHandler = this.changeIdHandler.bind(this);
    this.changeReasonHandler = this.changeReasonHandler.bind(this);
    this.Reject = this.Reject.bind(this);
  }



  PreviewReport(id) {
    this.props.history.push(`/preview/${id}`);
  }



  // For rejectioon of appraisal

  Reject() {
    let emp = {
      reason: this.state.reason,
      status: this.state.stat,
    };
    console.log("emp => " + JSON.stringify(emp));
    EmployeeService.updateEmployeeReason(emp, this.state.id);
    AppraisalService.deleteAppraisal(this.state.id);
    window.location.href = "/auth-home";
    alert("Appraisal form is rejected of employee Id: " + this.state.id);
  }
  changeIdHandler = (event) => {
    this.setState({ id: event.target.value });
  };
  changeReasonHandler = (event) => {
    this.setState({ reason: event.target.value });
  };

  // Form is accepted

  Accept(AppraisalId) {
    let emp = {
      reason: this.state.reason,
      status: this.state.status,
    };
    console.log("emp => " + JSON.stringify(emp));
    EmployeeService.updateEmployeeStatus(emp, AppraisalId);
    alert("Appraisal of Employee of id " + AppraisalId + " is Accepted");
    window.location.reload();
  }

  componentDidMount() {
    const authId = 1;
    AuthService.getAuthById(authId).then((res) => {
      this.setState({ auth: res.data });
    });
    AppraisalService.getAllAppraisal().then((res) => {
      const persons = res.data;
      const longeur = res.data.length;
      this.setState({ appraisal: res.data, persons, longeur });
    });
    EmployeeService.getEmployees().then((res) => {
      this.setState({ staff: res.data});
    });
  }

  Total(){
    let TotalMessage = 0;
    this.state.staff.map((employee) => (
    TotalMessage +=  employee.status
  ));
  return TotalMessage;
}

  logout() {
    alert("You will be logout..!");
    window.location.href = "/authority-login";
  }

  render() {
    return (
      <div>
        <AuthHeader />

        {/* profile picture  */}

        <section className="jumbotron text-center">
          <div className="container ">
            <h1 className="jumbotron-heading ">
              <img src={profile} alt="profile-pic" width="15%" />
            </h1>
            <p className="lead ">
              <b>Authority: </b>
              {this.state.auth.firstName} {this.state.auth.lastName}
            </p>
            <p>
              <button type="button" className="btn btn-primary m-2">
                Profile
              </button>
              <button
                type="button"
                className="btn btn-secondary m-2"
                data-toggle="modal"
                data-target="#myModal"
                onClick={this.logout}
              >
                Logout
              </button>
            </p>
          </div>

          <div class="jumbotron text-center">
            <div class="row w-100">
              <div class="col-md-3">
                <div class="card border-info mx-sm-1 p-3">
                  <div class="card border-info shadow text-info p-3 my-card">
                    <span class="fa fa-file" aria-hidden="true"></span>
                  </div>
                  <div class="text-info text-center mt-3">
                    <h4>Appraisal Report</h4>
                  </div>
                  <div class="text-info text-center mt-2">
                    <h1>0{this.state.longeur}</h1>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card border-success mx-sm-1 p-3">
                  <div class="card border-success shadow text-success p-3 my-card">
                    <span class="fa fa-envelope" aria-hidden="true"></span>
                  </div>
                  <div class="text-success text-center mt-3">
                    <h4>Messages</h4>
                  </div>
                  <div class="text-success text-center mt-2">
                    <h1>
                      {
                        this.Total()
                      }
                    </h1>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card border-danger mx-sm-1 p-3">
                  <div class="card border-danger shadow text-danger p-3 my-card">
                    <span class="fa fa-info" aria-hidden="true"></span>
                  </div>
                  <div class="text-danger text-center mt-3">
                    <h4>Information</h4>
                  </div>
                  <div class="text-danger text-center mt-2">
                    <h1>0</h1>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card border-warning mx-sm-1 p-3">
                  <div class="card border-warning shadow text-warning p-3 my-card">
                    <span class="fa fa-thumbs-up" aria-hidden="true"></span>
                  </div>
                  <div class="text-warning text-center mt-3">
                    <h4>Approved</h4>
                  </div>
                  <div class="text-warning text-center mt-2">
                    <h1>0</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal for reject */}

        <div className="container">
          <div className="modal" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <h1 className="text-center">
                    <img src={profile} alt="profile-pic" width="10%" />
                  </h1>
                  <h4 className="modal-title text-center">Authority</h4>
                </div>
                <div className="modal-header">
                  <h5 className="text-muted">
                    Do you want to Reject Appraisal Report ?
                  </h5>
                </div>

                <div className="container p-5">
                  <form>
                    <div className="form-group">
                      {" "}
                      Employee Id:{" "}
                      <input
                        type="text"
                        name="id"
                        value={this.state.id}
                        onChange={this.changeIdHandler}
                      />
                    </div>

                    <div className="form-group">Note to Reject: </div>
                    <textarea
                      rows="5"
                      cols="45"
                      name="reason"
                      placeholder="Write a note here..."
                      value={this.state.reason}
                      onChange={this.changeReasonHandler}
                    ></textarea>
                    <button className="btn btn-success" onClick={this.Reject}>
                      Submit{" "}
                    </button>
                    <a
                      href="##"
                      className="btn btn-warning m-2 "
                      data-dismiss="modal"
                    >
                      Cancel
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Appraisal report list */}
        <div className="container pb-5">
          <h2 className="text-center"> List of Appraisal Reports</h2>

          <br></br>
          <div className=" overflow-auto row text-center">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th> Employee Id</th>
                  <th> Employee Name</th>
                  <th> Officer Name</th>
                  <th> Preview</th>
                  <th>Approve</th>
                  <th>Reject</th>
                </tr>
              </thead>
              <tbody>
                {this.state.appraisal.map((employee) => (
                  <tr key={employee.id}>
                    <td> {employee.id} </td>
                    <td> {employee.a1} </td>
                    <td> {employee.b1}</td>

                    <td>
                      <button
                        onClick={() => this.PreviewReport(employee.id)}
                        className="btn btn-info"
                      >
                        Preview{" "}
                      </button>{" "}
                    </td>
                    <td>
                      <button
                        style={{ marginLeft: "10px" }}
                        className="btn btn-success"
                        onClick={() => this.Accept(employee.id)}
                      >
                        Accept{" "}
                      </button>
                    </td>
                    <td>
                      <button
                        style={{ marginLeft: "10px" }}
                        className="btn btn-danger"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        Reject{" "}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="row"></div>
        </div>

        {/* main page container  */}
        <section class="header">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <div
                  class="nav flex-column nav-pills nav-pills-custom"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    class="nav-link mb-3 p-3 shadow active"
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    <i class="fa fa-user-circle-o mr-2"></i>
                    <span class="font-weight-bold small text-uppercase">
                      Personal information
                    </span>
                  </a>

                  <a
                    class="nav-link mb-3 p-3 shadow"
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <i class="fa fa-calendar-minus-o mr-2"></i>
                    <span class="font-weight-bold small text-uppercase">
                      Reports
                    </span>
                  </a>

                  <a
                    class="nav-link mb-3 p-3 shadow"
                    id="v-pills-messages-tab"
                    data-toggle="pill"
                    href="#v-pills-messages"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    <i class="fa fa-star mr-2"></i>
                    <span class="font-weight-bold small text-uppercase">
                      Reviews
                    </span>
                  </a>

                  <a
                    class="nav-link mb-3 p-3 shadow"
                    id="v-pills-settings-tab"
                    data-toggle="pill"
                    href="#v-pills-settings"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    <i class="fa fa-users mr-2"></i>
                    <span class="font-weight-bold small text-uppercase">
                      Employees
                    </span>
                  </a>
                </div>
              </div>

              <div class="col-md-9">
                <div class="tab-content" id="v-pills-tabContent">
                  <div
                    class="tab-pane fade shadow rounded bg-white show active p-5"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <h4 class=" mb-4">Personal information</h4>
                    <p class="text-muted mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>

                  <div
                    class="tab-pane fade shadow rounded bg-white p-5"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <h4 class=" mb-4">Appraisal Forms</h4>
                    <p class="overflow-auto text-muted mb-2">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th> Employee Id</th>
                            <th> Employee Name</th>
                            <th> Officer Name</th>
                            <th> Preview</th>
                            <th>Approve</th>
                            <th>Reject</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.appraisal.map((employee) => (
                            <tr key={employee.id}>
                              <td> {employee.id} </td>
                              <td> {employee.a1} </td>
                              <td> {employee.b1}</td>

                              <td>
                              <button
                        onClick={() => this.PreviewReport(employee.id)}
                        className="btn btn-info"
                      >
                        Preview{" "}
                      </button>{" "}
                    </td>
                    <td>
                      <button
                        style={{ marginLeft: "10px" }}
                        className="btn btn-success"
                        onClick={() => this.Accept(employee.id)}
                      >
                        Accept{" "}
                      </button>
                    </td>
                    <td>
                      <button
                        style={{ marginLeft: "10px" }}
                        className="btn btn-danger"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        Reject{" "}
                      </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </p>
                  </div>

                  <div
                    class="tab-pane fade shadow rounded bg-white p-5"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <h4 class="font-italic mb-4">Reviews</h4>
                    <p class="font-italic text-muted mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>

                  <div
                    class="tab-pane fade shadow rounded bg-white p-5"
                    id="v-pills-settings"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <h4 class="font-italic mb-4">Employee Table</h4>
                    <p class="font-italic text-muted mb-2">Hi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AuthorityDashboard;
