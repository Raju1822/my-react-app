import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';


import avatar from "./img/avatar.png"
class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employees: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employees: res.data});
        })
    }
    cancel(){
        this.props.history.push('/admin');
    }

    render() {
        return (
            <>


      <div className="container">
        <div className="card border-0 shadow rounded-3 my-5">
        <h3 className = "text-center pt-5"> View Employee Details</h3>
          <div className="text-center p-2">
           <img src={avatar} alt="profile-pic" width="15%"/>
           <h5>{ this.state.employees.firstName }  { this.state.employees.lastName }</h5>
          </div>


           <p class="overflow-auto text-center mx-5">
                      <table className="table table-bordered">
                        <thead></thead>

                        <tbody>
                        <tr>
                            <td> Employee id: </td>
                            <td>{ this.state.employees.id }</td>
                          </tr>

                          <tr>
                            <td> Employee First Name: </td>
                            <td>{ this.state.employees.firstName }</td>
                          </tr>

                          <tr>
                            <td> Employee Last Name: </td>
                            <td>{ this.state.employees.lastName }</td>
                          </tr>

                          <tr>
                            <td> Employee Email Id: </td>
                            <td>{ this.state.employees.emailId }</td>
                          </tr>

                          <tr>
                            <td> Date of Joining: </td>
                            <td>{ this.state.employees.doj }</td>
                          </tr>

                          <tr>
                            <td> Employee Salary: </td>
                            <td>{ this.state.employees.salary }</td>
                          </tr>

                        </tbody>
                      </table>
                    </p>






                    <button onClick={ () => this.cancel()} className="btn btn-info m-3">Back</button>
        </div>

        </div>













        </>

        )
    }
}

export default ViewEmployeeComponent