import React, { Component } from "react";
import Header from "./Header";
import raju from "./img/raju.png";
import hemanth from "./img/hemanth.png";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Header />

        <div className="container">
          <div className=" my-5">
            <div className="text-center p-5">
              <h2>Developers</h2>
            </div>

            <div className="container">
              <div class="row">
                <div class="col-sm-6">
                  <div className="text-center my-2">
                    <div className="card border-0 shadow rounded-3 my-4 ">
                      <div className="card-body p-4 p-sm-5">
                        <img
                          className="rounded-circle"
                          src={raju}
                          alt="profile-pic"
                          width="25%"
                        />
                        <h5 className="card-title text-center mb-5 fw-light fs-5">
                          Raju Sahu
                        </h5>
                        <div>
                          <p>Phone No : 09054343930</p>
                          <p>Email Id : abc@gmail.com</p>
                        </div>

                        <div class="icons ">
                          <h2>
                            <a href="##" className="m-2 ">
                              <i class="fa fa-github-square "></i>
                            </a>
                            <a href="##" className="m-2 ">
                              <i class="fa fa-linkedin-square"></i>
                            </a>
                            <a href="##" className="m-2 ">
                              <i class="fa fa-instagram"></i>
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div className="text-center my-2">
                    <div className="card border-0 shadow rounded-3 my-4 ">
                      <div className="card-body p-4 p-sm-5 ">
                        <img
                          className="rounded-circle"
                          src={hemanth}
                          alt="profile-pic"
                          width="25%"
                        />
                        <h5 className="card-title text-center mb-5 fw-light fs-5">
                          Hemanth
                        </h5>

                        <div>
                          <p>Phone No : 09054343930</p>
                          <p>Email Id : abc@gmail.com</p>
                        </div>

                        <div class="icons ">
                          <h2>
                            <a href="##" className="m-2 ">
                              <i class="fa fa-github-square "></i>
                            </a>
                            <a href="##" className="m-2 ">
                              <i class="fa fa-linkedin-square"></i>
                            </a>
                            <a href="##" className="m-2 ">
                              <i class="fa fa-instagram"></i>
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
