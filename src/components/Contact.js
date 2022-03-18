import React, { Component } from "react";
class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="text-center p-5 text-primary">
            <h2>Developers</h2>

          </div>

          <div className="text-center p-5">
            <h4>1. Raju Sahu</h4>
            <div className="overflow-auto text-muted">
              <table className="table table-bordered">
                <thead>
                  <tr className="text-success">
                    <th>Mobile Number</th>
                    <th>Email Id</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-danger">
                    <td>9399217325</td>
                    <td>naimishsahu08@gmail.com</td>
                    <td>
                      Great Eastern Rd, Amanaka, Raipur, Chhattisgarh 492010
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="overflow-auto text-center p-5">
            <h4>2. Hemanth</h4>
            <div className="overflow-auto text-muted ">
              <table className="table table-bordered">
                <thead>
                  <tr className="text-success">
                    <th>Mobile Number</th>
                    <th>Email Id</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-danger">
                    <td>XXXX-XXXX</td>
                    <td>abc@gmail.com</td>
                    <td>
                      Great Eastern Rd, Amanaka, Raipur, Chhattisgarh 492010
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
