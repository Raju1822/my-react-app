import React, { Component } from "react";
class AppraisalReport extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  SubmitForm() {
    alert("Form is submitted");
  }

  render() {
    return (
      <div className="container">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="text-center p-5">
            <h2>Appraisal Report</h2>
          </div>

          <div className="p-5">
            <form onSubmit={this.SubmitForm}>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Example select</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect2">
                  Example multiple select
                </label>
                <select
                  multiple
                  class="form-control"
                  id="exampleFormControlSelect2"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <button type="button" className="btn btn-primary m-2">
                Submit
              </button>
              <a href="/employee-home" className="btn btn-success mx-4">
                Cancel
              </a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AppraisalReport;
