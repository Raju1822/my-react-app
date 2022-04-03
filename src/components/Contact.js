import React, { Component } from "react";
import Header from "./Header";
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

    alert(this.state.Name +" your message is send to admin");
  }


  render() {
    return (
      <>
        <Header />
        <div className="container">
          <div className="my-5">
            <div className="text-center">
              <h2 className="display-6 text-center"> Developer Team </h2>
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
                          width="26%"
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
                            <a
                              href="https://github.com/Raju1822"
                              className="m-2 "
                            >
                              <i class="fa fa-github-square "></i>
                            </a>
                            <a
                              href="https://www.linkedin.com/in/raju-sahu-3baa95176/"
                              className="m-2 "
                            >
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

          {/* Contact page from here */}

          <div class=" text-center">
            <h2 className="display-6 text-center"> Contact Us </h2>
            <div className="row py-5">
              <div className="col-sm-1"></div>

              <div className="col-sm-5">
                <form onSubmit={this.SendMessage}>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      required="Name"
                      placeholder="Name"
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      required="Email"
                      placeholder="Email"
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      name="message"
                      placeholder="Message"
                      rows="5"

                      onChange={this.changeMessageHandler}
                    ></textarea>
                  </div>
                  <div>
                    <button type="submit" class="btn btn-warning form-control">
                      <i class="fa fa-send text-white mx-1"></i>
                      SEND
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-sm-6 mt-4">
                <div className="text-left ml-5">
                  <p className="text-warning">
                    <i class="fa fa-map-marker fa-2x"> </i>
                    <a
                      href="https://www.google.com/maps/place/National+Institute+of+Technology(NIT),+Raipur/@21.2497222,81.6050291,15z/data=!4m12!1m6!3m5!1s0x0:0x21543965c50c43c7!2sNational+Institute+of+Technology(NIT),+Raipur!8m2!3d21.2497222!4d81.6050291!3m4!1s0x0:0x21543965c50c43c7!8m2!3d21.2497222!4d81.6050291"
                      className="h4 text-decoration-none lead m-2"
                    >

                      Great Eastern Rd, Amanaka, Raipur, Chhattisgarh 492010
                    </a>
                  </p>
                  <p className="text-warning">
                    <i class="fa fa-phone fa-2x"> </i>
                    <a
                      className="h4 text-decoration-none lead m-2"
                      href="tel:9399217325"
                    >
                      (212) 555-23685
                    </a>
                  </p>
                  <p className="text-warning">
                    <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
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
                    <a href="##" target="_blank" class="p-3 text-warning">
                    <i class="fa fa-github fa-3x" aria-hidden="true"></i></a>

                    <a href="##" target="_blank" class="p-3 text-warning">
                    <i class="fa fa-codepen fa-3x" aria-hidden="true"></i></a>

                    <a href="##" target="_blank" class="p-3 text-warning">
                    <i class="fa fa-twitter fa-3x" aria-hidden="true"></i></a>

                    <a href="##" target="_blank" class="p-3 text-warning">
                    <i class="fa fa-instagram fa-3x" aria-hidden="true"></i></a>
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
