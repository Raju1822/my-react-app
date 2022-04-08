import React, { Component } from "react";
import Header from "./Header";
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
        <Header />


<main role="main">

<div id="myCarousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">




    <div class="carousel-item active bg-white">
     <img class="img-fluid" src={s1}  alt="first slide"/>


    <div class="container">
        <div class="carousel-caption">
          <h1 className="text-dark">BEST CLOUD BASED EMPLOYEE MANAGEMENT</h1>
          {/* <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
          <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p> */}
        </div>
      </div>
    </div>





    <div class="carousel-item bg-white">
    <img class="img-fluid" src={s2}  alt="second slide"/>
      <div class="container">
        <div class="carousel-caption">
        <h1 className="text-dark">REACT FRONTEND</h1>
          {/* <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
          <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p> */}
        </div>
      </div>
    </div>

    <div class="carousel-item bg-white">
    <img class="img-fluid" src={s3}  alt="third slide"/>

      <div class="container">
        <div class="carousel-caption">
        <h1 className="text-dark">SPRING BOOT BACKEND</h1>
          {/* <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
          <p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p> */}
        </div>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>




<div class="container marketing">


  <div class="row lead text-justify">
    <div class="col-lg-4">
      <img class="rounded-circle border " src={admin1} alt="Generic placeholder image" width="140" height="140"/>
      <h2>Admin</h2>
      <p className="text-justify">Admin is the head of the project. admin can add, update, delete details about an employee and also the same can be done for the salary details.</p>
      <p className="text-justify">Admin will be able to manage all the detials about the employees of an organisation and also be able to see his details.</p>
      <p><a class="btn btn-outline-primary" href="/" role="button">View details &raquo;</a></p>
    </div>
    <div class="col-lg-4">
      <img class="rounded-circle border" src={avatar} alt="Generic placeholder image" width="140" height="140"/>
      <h2>Authority</h2>
      <p className="text-justify">Authority portal can be used by an authority to see their deatils, messages that they receive from any employee.</p>
      <p className="text-justify">Authority can preview, accept or reject the appraisal report that has been sent an employee for approval and also can send message a reason for rejection</p>
      <p><a class="btn btn-outline-danger" href="/authority-login" role="button">View details &raquo;</a></p>
    </div>
    <div class="col-lg-4">
      <img class="rounded-circle border" src={emp} alt="Generic placeholder image" width="140" height="140"/>
      <h2>Employee</h2>
      <p className="text-justify">Employee can view their details and also can see their schedule for various classes and messages sent by an authority.</p>
      <p className="text-justify">Employee can create an appraisal report and send it to an authority for approval or rejection and also can download the appraisal report created.</p>
      <p><a class="btn btn-outline-warning" href="/employee-login" role="button">View details &raquo;</a></p>
    </div>
  </div>




  <hr class="featurette-divider"/>

  <div class="row featurette">
    <div class="col-md-7">
      <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
      <p class="lead">
      An employee management system is a software, that helps your employees to give their best efforts every day to achieve the goals of your organization. It guides and manages employees efforts in the right direction. It also securely stores and manages personal and other work-related details for your employees.

Admin
Person who manages all employee's information and also has the role of editing, updating, adding new information based on requirements.

Authority
Persons who are the head of various departments are called as authority, they are responsible for various higher level institutional works.

Employee
All the persons who work in an institution are called as employees.
      </p>
    </div>
    <div class="col-md-5">
      <img class="featurette-image img-fluid mx-auto" src={s4} alt="Generic placeholder image"/>
    </div>
  </div>

  <hr class="featurette-divider"/>

  <div class="row featurette">
    <div class="col-md-7 order-md-2">
      <h2 class="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
      <p class="lead">
      Cloud computing is a general term for anything that involves delivering hosted services over the internet. These services are divided into three main categories or types of cloud computing: infrastructure as a service (IaaS), platform as a service (PaaS) and software as a service (SaaS).

Iaas

Infrastructure as a service (IaaS) is a standardized, highly automated offering in which computing resources owned by a service provider, complemented by storage and networking capabilities, are offered to customers on demand. Resources are scalable and elastic in near real time and metered by use.

Paas

Platform as a service. Platform as a service (PaaS) is a complete development and deployment environment in the cloud, with resources that enable you to deliver everything from simple cloud-based apps to sophisticated, cloud-enabled enterprise applications.

Saas

Software as a service (or SaaS) is a way of delivering applications over the Internet as a service. Instead of installing and maintaining software, you simply access it via the Internet, freeing yourself from complex software and hardware management.

The global cloud computing market size is expected to grow from USD 445.3 billion in 2021 to USD 947.3 billion by 2026, at a Compound Annual Growth Rate (CAGR) of 16.3% during the forecast period. Digital business transformation has entered a more challenging and urgency-driven phase due to the COVID-19 pandemic.
      </p>
    </div>
    <div class="col-md-5 order-md-1">
      <img class="featurette-image img-fluid mx-auto" src={s5} alt="Generic placeholder image"/>
    </div>
  </div>

  <hr class="featurette-divider"/>

  <div class="row featurette">
    <div class="col-md-7">
      <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
      <p class="lead">
      Advantage 1
Effective and proper management of employee information and also helps in effective decision making regarding their well being.

Advantage 2
Greatly reduces the cost of maintaing the website as manual cost as well as cost to purchase different servers are not needed as it's done using cloud services

Advantage 3
Scaling up the website on the increase in amunt data is also easily done.Backup storage and data restore when failed.

Advantage 4
Improved collaboration, excellent accessibility, unlimited storage capacity, good data security, mobility.
      </p>
    </div>
    <div class="col-md-5">
    <img class="featurette-image img-fluid mx-auto" src={s6} alt="Generic placeholder image"/>
    </div>
  </div>

  <hr class="featurette-divider"/>


  <p class="text-center"><a href="#">Back to top</a></p>
</div>



</main>













      </>
    );
  }
}

export default Feature;
