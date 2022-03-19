import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';

import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import Home from './components/Home';
import EmployeeLogin from './components/Employee/EmployeeLogin';

import Contact from './components/Contact';
import AuthorityLogin from './components/Authority/AuthorityLogin';
import AdminDashboard from './components/Admin/AdminDashboard';
import AddEmployee from './components/Admin/AddEmployee';
import EmployeeDashboard from './components/Employee/EmployeeDashboard';
import AuthorityDashboard from './components/Authority/AuthorityDashboard';
import PreviewReport from './components/Authority/PreviewReport';
import AppraisalReport from './components/Employee/AppraisalReport';
import Search from './components/Search';

function App() {
  return (
    <div>
        <Router>


                <div>
                    <Switch>
                          <Route path = "/" exact component = {Home}></Route>

                          <Route path = "/employee-login" exact component = {EmployeeLogin}></Route>
                          <Route path = "/authority-login" exact component = {AuthorityLogin}></Route>

                          <Route path = "/admin" exact component = {AdminDashboard}></Route>
                          <Route path = "/addemployee" exact component = {AddEmployee}></Route>
                          <Route path = "/employee-home"  component = {EmployeeDashboard}></Route>
                          <Route path = "/appraisal-report" exact component = {AppraisalReport}></Route>

                          <Route path = "/auth-home" exact component = {AuthorityDashboard}></Route>
                          <Route path = "/preview" exact component = {PreviewReport}></Route>


                          <Route path = "/listemployee" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>

                          <Route path = "/contact" component = {Contact}></Route>
                          <Route path = "/search" component = {Search}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>

  );
}

export default App;