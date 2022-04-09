import React, { Component } from 'react'
import "../../css/Header.css";

class AdminHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
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
                <li className="nav-item active">
                  <a className="nav-link" href="##">
                    {" "}
                    <i className="fa fa-home mr-2"></i>
                     Admin <span className="sr-only">(current)</span>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/addEmployee">
                    <i className="fa fa-users mr-2" />
                    Add Employee
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
                    Droupdown
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
                  <a className="nav-link" href="/search">
                    <i className="fa fa-search mr-2"></i>
                    Search
                  </a>
                </li>

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
        )
    }
}

export default AdminHeader