import React, { Component } from "react";
import EmployeeService from "../../services/EmployeeService";


class EditSalary extends Component {
  constructor(props) {
    super(props);

    this.state = {
        id: this.props.match.params.id,
        firstName:'',
        lastName:'',
        salary:''
    };
    this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
  }

  changeSalaryHandler= (event) => {
    this.setState({salary: event.target.value});
}

  componentDidMount(){

    EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
        let employee = res.data;
        this.setState({firstName: employee.firstName,lastName: employee.lastName,
            salary: employee.salary,
        });
    });
  }
  UpdateEmployeeSalary = (e) => {
    e.preventDefault();
    let employee = { salary: this.state.salary};
    console.log('employee => ' + JSON.stringify(employee));

    EmployeeService.updateEmployeeSalary(employee, this.state.id).then( res => {
            this.props.history.push('/admin');
        });
    alert("Employee salary is updated");
  }
  cancel(){
    this.props.history.push('/admin');
}

  render() {
    return (
     <>






     <div className="container">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="text-center p-5">
            <h2 className="py-5">Edit Employee Salary</h2>


              <form>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">Employee Name</label>
                    <div className="col-sm-10">
                    <input type="text" disabled className="form-control text-center" id="staticEmail" value={this.state.firstName +" "+ this.state.lastName} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Salary</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputPassword"
                    value={this.state.salary}
                    onChange={this.changeSalaryHandler}

                     />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.UpdateEmployeeSalary}>Submit</button>
                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
            </form>


            {/* <div className = "form-group row">
                    <label> First Name: </label>
                    <input placeholder="First Name" name="firstName" className="form-control"
                        value={this.state.firstName}
                    />
                    </div>
                    <div className = "form-group row">
                    <label> Salary: </label>
                    <input placeholder="First Name" name="firstName" className="form-control"
                        value={this.state.salary}
                    />
                    </div>
                 <button type="submit" className="btn btn-primary">Submit</button> */}





          </div>
        </div>
      </div>
     </>
    );
  }
}

export default EditSalary;
