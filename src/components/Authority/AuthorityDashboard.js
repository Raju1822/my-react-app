import React, { Component } from "react";
import profile from "../img/avatar.png";


class AuthorityDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  FunctionPreview() {
    window.location.href = "/preview";
  }
  Reject() {
    alert("Form is rejected");
  }

  render() {
    return (
      <div>



        {/* profile picture  */}

        <section className="jumbotron text-center">
          <div className="container ">
            <h1 className="jumbotron-heading ">
              <img src={profile} alt="profile-pic" width="15%" />
            </h1>
            <p className="lead ">Authority Name Here</p>
            <p>
              <button type="button" className="btn btn-primary m-2">
                Profile
              </button>
              <button
                type="button"
                className="btn btn-secondary m-2"
                data-toggle="modal"
                data-target="#myModal"
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
                      <table className="table table-bordered text-center">
                        <thead>
                          <tr>
                            <th> Employee id</th>
                            <th> Officer 1</th>
                            <th> Officer 2</th>
                            <th>Preview Report</th>
                            <th>Approve </th>
                            <th>Reject </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>id</td>
                            <td> Name_first</td>
                            <td>Name_Second</td>
                            <td>
                              <button
                                style={{ marginLeft: "10px" }}
                                className="btn btn-warning"
                                onClick={this.FunctionPreview}
                              >
                                {" "}
                                Preview
                              </button>
                            </td>
                            <td>
                              <button
                                style={{ marginLeft: "10px" }}
                                className="btn btn-success"
                              >
                                {" "}
                                Accept
                              </button>
                            </td>
                            <td>
                              {" "}
                              <button
                                style={{ marginLeft: "10px" }}
                                className="btn btn-danger"
                                onClick={this.Reject}
                              >
                                {" "}
                                Reject
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
