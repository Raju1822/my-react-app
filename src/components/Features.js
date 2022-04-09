import React, { Component } from "react";

import "../css/Sidebar.css"
import avatar from "./img/avatar.png"
import emp from "./img/emp1.png"
import s1 from "./img/slide.jpg"
import s2 from "./img/slide2.jpg"
import s3 from "./img/slide3.jpg"
import admin1 from "./img/admin1.jpg"
import s4 from "./img/box1.jpg"
import s5 from "./img/box2.jpg"
import s6 from "./img/box3.jpg"


class Feature extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
                <li className="nav-item ">
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
                <li className="nav-item active">
                  <a className="nav-link" href="/feature">
                    <i className="fa fa-star mr-2" />
                    Features
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


<main role="main" id="top">

<div id="myCarousel" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">




    <div className="carousel-item active bg-white">
     <img className="img-fluid" src={s1}  alt="first slide"/>


    <div className="container">
        <div className="carousel-caption">
          <h1 className="text-dark">CLOUD BASED EMPLOYEE MANAGEMENT SYSTEM</h1>
          {/* <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
          <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p> */}
        </div>
      </div>
    </div>





    <div className="carousel-item bg-white">
    <img className="img-fluid" src={s2}  alt="second slide"/>
      <div className="container">
        <div className="carousel-caption">
        <h1 className="text-dark">REACT FRONTEND</h1>
          {/* <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
          <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p> */}
        </div>
      </div>
    </div>

    <div className="carousel-item bg-white">
    <img className="img-fluid" src={s3}  alt="third slide"/>

      <div className="container">
        <div className="carousel-caption">
        <h1 className="text-dark">SPRING BOOT BACKEND</h1>
          {/* <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
          <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p> */}
        </div>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>




<div className="container marketing">


  <div className="row lead text-justify">
    <div className="col-lg-4">
      <img className="rounded-circle border " src={admin1} alt="Generic placeholder" width="140" height="140"/>
      <h2>Admin</h2>
      <p className="text-justify">Admin is the head of the project. admin can add, update, delete details about an employee and also the same can be done for the salary details.</p>
      <p className="text-justify">Admin will be able to manage all the detials about the employees of an organisation and also be able to see his details.</p>
      <p><a className="btn btn-outline-primary" href="/" role="button">View details &raquo;</a></p>
    </div>
    <div className="col-lg-4">
      <img className="rounded-circle border" src={avatar} alt="Generic placeholder2" width="140" height="140"/>
      <h2>Authority</h2>
      <p className="text-justify">Authority portal can be used by an authority to see their deatils, messages that they receive from any employee.</p>
      <p className="text-justify">Authority can preview, accept or reject the appraisal report that has been sent an employee for approval and also can send message a reason for rejection</p>
      <p><a className="btn btn-outline-danger" href="/authority-login" role="button">View details &raquo;</a></p>
    </div>
    <div className="col-lg-4">
      <img className="rounded-circle border" src={emp} alt="Generic placeholder3" width="140" height="140"/>
      <h2>Employee</h2>
      <p className="text-justify">Employee can view their details and also can see their schedule for various classes and messages sent by an authority.</p>
      <p className="text-justify">Employee can create an appraisal report and send it to an authority for approval or rejection and also can download the appraisal report created.</p>
      <p><a className="btn btn-outline-warning" href="/employee-login" role="button">View details &raquo;</a></p>
    </div>
  </div>




  <hr className="featurette-divider"/>

  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
      <p className="lead text-justify">
      An employee management system is a software, that helps your employees to give their best efforts every day to achieve the goals of your organization. It guides and manages employees efforts in the right direction. It also securely stores and manages personal and other work-related details for your employees.

<b><br/>Admin:</b>
Person who manages all employee's information and also has the role of editing, updating, adding new information based on requirements.

<b><br/>Authority:</b>
Persons who are the head of various departments are called as authority, they are responsible for various higher level institutional works.

<b><br/>Employee:</b>
All the persons who work in an institution are called as employees.
      </p>
    </div>
    <div className="col-md-5">
      <img className="featurette-image img-fluid mx-auto" src={s4} alt="Generic placeholder4"/>
    </div>
  </div>

  <hr className="featurette-divider"/>

  <div className="row featurette">
    <div className="col-md-7 order-md-2">
      <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
      <p className="lead text-justify">
      Cloud computing is a general term for anything that involves delivering hosted services over the internet. These services are divided into three main categories or types of cloud computing: infrastructure as a service (IaaS), platform as a service (PaaS) and software as a service (SaaS).

      <b><br/>Infrastructure as a service (IaaS): </b>

Infrastructure as a service (IaaS) is a standardized, highly automated offering in which computing resources owned by a service provider, complemented by storage and networking capabilities, are offered to customers on demand. Resources are scalable and elastic in near real time and metered by use.

<b><br/>Platform as a service (PaaS): </b>

Platform as a service. Platform as a service (PaaS) is a complete development and deployment environment in the cloud, with resources that enable you to deliver everything from simple cloud-based apps to sophisticated, cloud-enabled enterprise applications.

<b><br/>Software as a service (SaaS): </b>

Software as a service (or SaaS) is a way of delivering applications over the Internet as a service. Instead of installing and maintaining software, you simply access it via the Internet, freeing yourself from complex software and hardware management.
<br/>
The global cloud computing market size is expected to grow from USD 445.3 billion in 2021 to USD 947.3 billion by 2026, at a Compound Annual Growth Rate (CAGR) of 16.3% during the forecast period. Digital business transformation has entered a more challenging and urgency-driven phase due to the COVID-19 pandemic.
      </p>
    </div>
    <div className="col-md-5 order-md-1">
      <img className="featurette-image img-fluid mx-auto" src={s5} alt="Generic placeholder5"/>
    </div>
  </div>

  <hr className="featurette-divider"/>

  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
      <p className="lead text-justify">

<ol>
  <li>Effective and proper management of employee information and also helps in effective decision making regarding their well being.</li>
  <li>Greatly reduces the cost of maintaing the website as manual cost as well as cost to purchase different servers are not needed as it's done using cloud services</li>
  <li>Scaling up the website on the increase in amunt data is also easily done.Backup storage and data restore when failed.</li>
  <li>Improved collaboration, excellent accessibility, unlimited storage capacity, good data security, mobility.</li>
</ol>




      </p>
    </div>
    <div className="col-md-5">
    <img className="featurette-image img-fluid mx-auto" src={s6} alt="Generic placeholder6"/>
    </div>
  </div>

  <hr className="featurette-divider"/>


  <p className="text-center"><a href="#top" className="text-decoration-none">Back to top &uarr;</a></p>
</div>



</main>













      </>
    );
  }
}

export default Feature;
