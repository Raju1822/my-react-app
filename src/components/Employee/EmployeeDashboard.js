import React, { Component } from "react";
import EmployeeService from "../../services/EmployeeService";
import AppraisalService from "../../services/AppraisalService";
import profile from "../img/avatar.png";
import EmployeeHeader from "./EmployeeHeader";

class EmployeeDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      appraisal: [],
    };
  }

  componentDidMount() {
    const employeeId = 3;
    EmployeeService.getEmployeeById(employeeId).then((res) => {
      this.setState({ employees: res.data });
    });
    AppraisalService.getAppraisalById(employeeId).then((res) => {
      this.setState({ appraisal: res.data });
    });
  }

  logout() {
    alert("You want to logout ?");
    window.location.href = "/employee-login";
  }

  getMesaage(){
    if(this.state.employees.status === 0)
      return <p>Your have not created any appraisal report yet..!</p>
    if(this.state.employees.status === 1)
     return <p>Your appraisal report has been accepted..!</p>
    if(this.state.employees.status === 2)
     return <p>Your Appraisal report have been rejected.<br />Reason:<br /> {this.state.employees.reason} </p>
    else
    return <p>No new message here.</p>


  }

  render() {
    return (
      <div>
        <EmployeeHeader />

        {/* profile picture  */}

        <section className="jumbotron text-center">
          <div className="container ">
            <h1 className="jumbotron-heading ">
              <img src={profile} alt="profile-pic" width="15%" />
            </h1>
            <p className="lead ">
              {" "}
              <b>Employee: </b>
              {this.state.employees.firstName} {this.state.employees.lastName}
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
        </section>

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
                      Appraisal Report
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
                      Information
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
                    <i class="fa fa-envelope mr-2"></i>
                    <span class="font-weight-bold small text-uppercase">
                      Messages
                    </span>
                  </a>
                </div>
              </div>

              <div class="col-md-9">
                <div class="tab-content" id="v-pills-tabContent">
                  <div
                    class=" tab-pane fade shadow rounded bg-white show active p-5"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <h4 class=" mb-4">
                      {" "}
                      <b>Welcome : </b>
                      {this.state.employees.firstName}{" "}
                      {this.state.employees.lastName}
                    </h4>
                    <p class="text-muted m-5 ">
                      <p>
                        <b> Employee Id: </b> {this.state.employees.id}{" "}
                      </p>
                      <p>
                        <b> First Name: </b> {this.state.employees.firstName}{" "}
                      </p>
                      <p>
                        <b> Last Name: </b> {this.state.employees.lastName}{" "}
                      </p>
                      <p>
                        <b> Email Id: </b> {this.state.employees.emailId}{" "}
                      </p>
                      <p>
                        <b> Salary: </b> {this.state.employees.salary}{" "}
                      </p>
                    </p>
                  </div>

                  <div
                    class="tab-pane fade shadow rounded bg-white p-5"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <h4 class="text-center mb-4">
                      Appraisal Report{" "}
                      <a
                        href="/appraisal-report"
                        className="btn btn-success m-4"
                      >
                        Create Appraisal
                      </a>
                    </h4>

                    <p class="overflow-auto text-muted mb-2 text-center">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th> Employee Id</th>
                            <th> Employee Name</th>
                            <th> Officer Name</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{this.state.appraisal.id}</td>
                            <td>{this.state.appraisal.a1}</td>
                            <td>{this.state.appraisal.b1}</td>
                            <td>
                              <button
                                style={{ marginLeft: "10px" }}
                                className="btn btn-info"
                              >
                                View
                              </button>
                            </td>
                          </tr>
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
                    <h4 class=" mb-4 text-center">
                      Department : department of employee
                    </h4>

                    <h5 className="text-center">Year:2022-23</h5>
                    <p className=" text-center">Time Table</p>
                    <div className="overflow-auto">
                      <table class="table table-bordered no-more-tables text-center">
                        <thead>
                          <tr>
                            <th>Day</th>
                            <th>Time</th>
                            <th>Subject</th>
                            <th>Year</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>Monday</td>
                            <td>10:00 - 11:00</td>
                            <td>sub1</td>
                            <td>1st year</td>
                          </tr>
                          <tr>
                            <td>Tuesday</td>
                            <td>11:30 - 12:30</td>
                            <td>sub2</td>
                            <td>2nd year</td>
                          </tr>
                          <tr>
                            <td>Wednesday</td>
                            <td>02:00 - 03:00</td>
                            <td>Sub3</td>
                            <td>3rd year</td>
                          </tr>
                          <tr>
                            <td>Thursday</td>
                            <td>10:30 - 11:30</td>
                            <td>Sub4</td>
                            <td>4th year</td>
                          </tr>
                          <tr>
                            <td>Friday</td>
                            <td>10:00 - 12:00</td>
                            <td>Extra class</td>
                            <td>Any</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade shadow rounded bg-white p-5"
                    id="v-pills-settings"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <h4 class=" mb-4">Messages</h4>
                    <p class="text-muted mb-2">
                      {
                        this.getMesaage()
                      }
                    </p>
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

export default EmployeeDashboard;
