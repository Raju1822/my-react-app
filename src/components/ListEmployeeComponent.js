import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import AdminHeader from './Admin/AdminHeader';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/addemployee');
    }

    cancel(){
        this.props.history.push('/admin');
    }

    render() {
        return (
         <>
         <AdminHeader/>

         <div className='container p-5'>
                 <h2 className="text-center">Employees List </h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                 </div>
                 <br></br>
                 <div className = " overflow-auto row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee First Name</th>
                                    <th> Employee Last Name</th>
                                    <th> Employee Email Id</th>
                                    <th> Update</th>
                                    <th>Delete</th>
                                    <th>View</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee =>
                                        <tr key = {employee.id}>
                                             <td> { employee.firstName} </td>
                                             <td> {employee.lastName}</td>
                                             <td> {employee.emailId}</td>
                                             <td><button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button> </td>
                                             <td><button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button></td>
                                             <td><button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button></td>
                                        </tr>
                                    )
                                }
                            </tbody>

                        </table>

                 </div>
                <div className='row'>
                <button onClick={ () => this.cancel()} className="btn btn-danger">Back</button>
                </div>

            </div>
         </>
        )
    }
}

export default ListEmployeeComponent