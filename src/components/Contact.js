import React, { Component } from "react";

import raju from "./img/raju.png";
import hemanth from "./img/hemanth.png";
import ContactService from "../services/ContactService";
// import "../css/Sidebar.css"

class Contact extends Component {
  constructor(props) {
    super(props);
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.SendMessage = this.SendMessage.bind(this);
    this.state = {
      Name: "",
      Email: "",
      Message: ""
    };
  }

  changeNameHandler = (event) => {
    this.setState({ Name: event.target.value });
  };
  changeEmailHandler = (event) => {
    this.setState({ Email: event.target.value });
  };
  changeMessageHandler = (event) => {
    this.setState({ Message: event.target.value });
  };

  SendMessage(){
    let mails = {
      fullName:this.state.Name,
      emailId:this.state.Email,
      message:this.state.Message
    }
    console.log("mails => " + JSON.stringify(mails));
    ContactService.createContact(mails);

    alert(this.state.Name +" your message is send to Admin");
    window.location.reload();
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
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    {" "}
                    <i className="fa fa-home mr-2"></i>
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/search">
                    <i className="fa fa-search mr-2"></i>
                    Search
                  </a>
                </li>

                <li className="nav-item dropdown">
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
                    <a className="dropdown-item" href="/authority-login">
                      Authority Login
                    </a>
                    <a className="dropdown-item" href="/employee-login">
                      Employee Login
                    </a>
                    {/* <a className="dropdown-item" href="/">
                      Something else here
                    </a> */}
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/feature">
                    <i className="fa fa-star mr-2" />
                    Features
                  </a>
                </li>
                <li className="nav-item active">
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
          <div className="my-5">
            <div className="text-center">
              <h2 className="display-6 text-center"> Developer Team </h2>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <div className="text-center my-2">
                    <div className="card border-0 shadow rounded-3 my-4 ">
                      <div className="card-body p-4 p-sm-5">
                        <img
                          className="rounded-circle"
                          src={raju}
                          alt="profile-pic"
                          width="26%"
                        />
                        <h5 className="card-title text-center mb-5 fw-light fs-5">
                          Raju Sahu
                        </h5>
                        <div>
                          <p>Phone No : 09054343930</p>
                          <p>Email Id : abc@gmail.com</p>
                        </div>

                        <div className="icons ">
                          <h2>
                            <a
                              href="https://github.com/Raju1822"
                              className="m-2 "
                            >
                              <i className="fa fa-github-square "></i>
                            </a>
                            <a
                              href="https://www.linkedin.com/in/raju-sahu-3baa95176/"
                              className="m-2 "
                            >
                              <i className="fa fa-linkedin-square"></i>
                            </a>
                            <a href="##" className="m-2 ">
                              <i className="fa fa-instagram"></i>
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
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

                        <div className="icons ">
                          <h2>
                            <a href="##" className="m-2 ">
                              <i className="fa fa-github-square "></i>
                            </a>
                            <a href="##" className="m-2 ">
                              <i className="fa fa-linkedin-square"></i>
                            </a>
                            <a href="##" className="m-2 ">
                              <i className="fa fa-instagram"></i>
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

          {/* Contact page from here */}

          <div className=" text-center">
            <h2 className="display-6 text-center"> Contact Us </h2>
            <div className="row py-5">
              <div className="col-sm-1"></div>

              <div className="col-sm-5">
                <form onSubmit={this.SendMessage}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      required="Name"
                      placeholder="Name"
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      required="Email"
                      placeholder="Email"
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Message"
                      rows="5"

                      onChange={this.changeMessageHandler}
                    ></textarea>
                  </div>
                  <div>
                    <button type="submit" className="btn btn-warning form-control">
                      <i className="fa fa-send text-white mx-1"></i>
                      SEND
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-sm-6 mt-4">
                <div className="text-left ml-5">
                  <p className="text-warning">
                    <i className="fa fa-map-marker fa-2x"> </i>
                    <a
                      href="https://www.google.com/maps/place/National+Institute+of+Technology(NIT),+Raipur/@21.2497222,81.6050291,15z/data=!4m12!1m6!3m5!1s0x0:0x21543965c50c43c7!2sNational+Institute+of+Technology(NIT),+Raipur!8m2!3d21.2497222!4d81.6050291!3m4!1s0x0:0x21543965c50c43c7!8m2!3d21.2497222!4d81.6050291"
                      className="h4 text-decoration-none lead m-2"
                    >

                      Great Eastern Rd, Amanaka, Raipur, Chhattisgarh 492010
                    </a>
                  </p>
                  <p className="text-warning">
                    <i className="fa fa-phone fa-2x"> </i>
                    <a
                      className="h4 text-decoration-none lead m-2"
                      href="tel:9399217325"
                    >
                      (212) 555-23685
                    </a>
                  </p>
                  <p className="text-warning">
                    <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                    <a
                      href="mailto:naimishsahu08@gmail.com"
                      className="h4 text-decoration-none lead m-2"
                    >
                      admin@gmail.com
                    </a>
                  </p>
                </div>




                  <p className="mt-5">
                  <hr/>
                    <a href="##" target="_blank" className="p-3 text-warning">
                    <i className="fa fa-github fa-3x" aria-hidden="true"></i></a>

                    <a href="##" target="_blank" className="p-3 text-warning">
                    <i className="fa fa-codepen fa-3x" aria-hidden="true"></i></a>

                    <a href="##" target="_blank" className="p-3 text-warning">
                    <i className="fa fa-twitter fa-3x" aria-hidden="true"></i></a>

                    <a href="##" target="_blank" className="p-3 text-warning">
                    <i className="fa fa-instagram fa-3x" aria-hidden="true"></i></a>
                  </p>



        <hr/>



              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
