import React, { Component } from "react";
import Header from "./Header";
import logo from "./img/logo.jpg"
import avatar from "./img/admin.png"

class Home extends Component {
  constructor(props) {
    super(props);
    this.changeFirstNameHandler = this.changeEmailHandler.bind(this);
    this.changeLastNameHandler = this.changePasswordHandler.bind(this);
    this.SubmitForm = this.SubmitForm.bind(this);

    this.state = {
      emailId: "",
      password: "",

    };
  }

  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };
  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  SubmitForm = () => {
    // e.preventDefault();
    let admin = {
      emailId: this.state.emailId,
      password: this.state.password,
    };

    if(admin.emailId ==="admin@gmail.com" && admin.password ==="1234")
    {
      this.props.history.push('/admin');
    }
    else{
      alert("Please enter correct Email/Password");
      // alert("Please enter correct Email/Password"+"\n Entered Email:  "+ admin.emailId + "\n Entered Password:  "+ admin.password);
    }
  };



  render() {
    return (
      <div>


        <Header/>


        <div className="container">
        <div className="row">
        <div className="col-sm-8">
            <div className="col-md-8 text-center display-6 pt-5 ">
              <img className="img-fluid" src={logo} alt="pictures" width="60%"/>
              <p className="pt-3">National Institute of Technology </p>
              <p>Raipur</p>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="text-center my-2">
              <h1 className="display-4">Admin Portal</h1>

              <div className="card border-0 shadow rounded-3 my-4 ">
                <div className="card-body p-4 p-sm-5 ">
                <img src={avatar} alt="profile-pic" width="25%"/>
                  <h5 className="card-title text-center mb-5 fw-light fs-5">
                    Admin Sign In
                  </h5>

                  <form onSubmit={this.SubmitForm} >
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="name@example.com"
                        id="email"
                        required
                        value={this.state.emailId}
                  onChange={this.changeEmailHandler}
                      />
                      <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        id="password"
                        required


                        value={this.state.password}
                  onChange={this.changePasswordHandler}
                      />
                      <label htmlFor="password">Password</label>
                    </div>

                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="rememberPasswordCheck"

                      />
                      <label
                        className="form-check-label"
                        htmlFor="rememberPasswordCheck"
                      >
                        Remember password
                      </label>
                    </div>
                    <div className="d-grid">
                      <button
                        className="btn btn-primary btn-login text-uppercase fw-bold"
                        value="Submit"
                        type="submit"
                      >
                        Sign in
                      </button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>

      </div>

    );
  }
}

export default Home;
