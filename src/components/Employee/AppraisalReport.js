import React, { Component } from "react";
import AppraisalService from "../../services/AppraisalService";
class AppraisalReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a1: "",
      a2: "",
      b1: "",
      b2: "",
      b3: "",
      b4: "",
      b5: "",
      b6: "",
      b7: "",
      c1: "",
      c2: "",
      c3: "",
      c4: "",
      c5: "",
      c6: "",
      c7: "",
      d1: "",
      d2: "",
      d3: "",
      d4: "",
      d5: "",
      d6: "",
      d7: "",
      d8: "",
      d9: "",
      d10: "",
      d11: "",
      d12: "",
      d13: "",
      d14: "",
      d15: "",
      d16: "",
      d17: "",
      d18: "",
      d19: "",
      d20: "",
      d21: "",
      d22: "",
      d23: "",
      d24: "",
      d25: "",
      d26: "",
      d27: "",
      d28: "",
      d29: "",
      d30: "",
      d31: "",
      d32: "",
      d33: "",
      d34: "",
      d35: "",
      d36: "",
      d37: "",
      d38: "",
      d39: "",
      d40: "",
      d41: "",
      d42: "",
      d43: "",
      d44: "",
      d45: "",
      d46: "",
      e1: "",
      e2: "",
      e3: "",
      e4: "",
      e5: "",
      e6: "",
      e7: "",
      e8: "",
      e9: "",
      e10: "",
      e11: "",
      e12: "",
      f1: "",
      f2: "",
      f3: "",
      f4: "",
      f5: "",
      f6: "",
      f7: "",
      f8: "",
      f9: "",
      f10: "",
      f11: "",
    };
    this.changeA1Handler = this.changeA1Handler.bind(this);
    this.SubmitForm = this.SubmitForm.bind(this);
  }

  changeA1Handler = (event) => {
    this.setState({ a1: event.target.value });
  };
  changeA2Handler = (event) => {
    this.setState({ a2: event.target.value });
  };
  changeB1Handler = (event) => {
    this.setState({ b1: event.target.value });
  };
  changeB2Handler = (event) => {
    this.setState({ b2: event.target.value });
  };
  changeB3Handler = (event) => {
    this.setState({ b3: event.target.value });
  };
  changeB4Handler = (event) => {
    this.setState({ b4: event.target.value });
  };
  changeB5Handler = (event) => {
    this.setState({ b5: event.target.value });
  };
  changeB6Handler = (event) => {
    this.setState({ b6: event.target.value });
  };
  changeB7Handler = (event) => {
    this.setState({ b7: event.target.value });
  };
  changeC1Handler = (event) => {
    this.setState({ c1: event.target.value });
  };
  changeC2Handler = (event) => {
    this.setState({ c2: event.target.value });
  };
  changeC3Handler = (event) => {
    this.setState({ c3: event.target.value });
  };
  changeC4Handler = (event) => {
    this.setState({ c4: event.target.value });
  };
  changeC5Handler = (event) => {
    this.setState({ c5: event.target.value });
  };
  changeC6Handler = (event) => {
    this.setState({ c6: event.target.value });
  };
  changeC7Handler = (event) => {
    this.setState({ c7: event.target.value });
  };
  changeD1Handler = (event) => {
    this.setState({ d1: event.target.value });
  };
  changeD2Handler = (event) => {
    this.setState({ d2: event.target.value });
  };
  changeD3Handler = (event) => {
    this.setState({ d3: event.target.value });
  };
  changeD4Handler = (event) => {
    this.setState({ d4: event.target.value });
  };
  changeD5Handler = (event) => {
    this.setState({ d5: event.target.value });
  };
  changeD6Handler = (event) => {
    this.setState({ d6: event.target.value });
  };
  changeD7Handler = (event) => {
    this.setState({ d7: event.target.value });
  };
  changeD8Handler = (event) => {
    this.setState({ d8: event.target.value });
  };
  changeD9Handler = (event) => {
    this.setState({ d9: event.target.value });
  };
  changeD10Handler = (event) => {
    this.setState({ d10: event.target.value });
  };
  changeD11Handler = (event) => {
    this.setState({ d11: event.target.value });
  };
  changeD12Handler = (event) => {
    this.setState({ d12: event.target.value });
  };
  changeD13Handler = (event) => {
    this.setState({ d13: event.target.value });
  };
  changeD14Handler = (event) => {
    this.setState({ d14: event.target.value });
  };
  changeD15Handler = (event) => {
    this.setState({ d15: event.target.value });
  };
  changeD16Handler = (event) => {
    this.setState({ d16: event.target.value });
  };
  changeD17Handler = (event) => {
    this.setState({ d17: event.target.value });
  };
  changeD18Handler = (event) => {
    this.setState({ d18: event.target.value });
  };
  changeD19Handler = (event) => {
    this.setState({ d19: event.target.value });
  };
  changeD20Handler = (event) => {
    this.setState({ d20: event.target.value });
  };
  changeD21Handler = (event) => {
    this.setState({ d21: event.target.value });
  };
  changeD22Handler = (event) => {
    this.setState({ d22: event.target.value });
  };
  changeD23Handler = (event) => {
    this.setState({ d23: event.target.value });
  };
  changeD24Handler = (event) => {
    this.setState({ d24: event.target.value });
  };
  changeD25Handler = (event) => {
    this.setState({ d25: event.target.value });
  };
  changeD26Handler = (event) => {
    this.setState({ d26: event.target.value });
  };
  changeD27Handler = (event) => {
    this.setState({ d27: event.target.value });
  };
  changeD28Handler = (event) => {
    this.setState({ d28: event.target.value });
  };
  changeD29Handler = (event) => {
    this.setState({ d29: event.target.value });
  };
  changeD30Handler = (event) => {
    this.setState({ d30: event.target.value });
  };
  changeD31Handler = (event) => {
    this.setState({ d31: event.target.value });
  };
  changeD32Handler = (event) => {
    this.setState({ d32: event.target.value });
  };
  changeD33Handler = (event) => {
    this.setState({ d33: event.target.value });
  };
  changeD34Handler = (event) => {
    this.setState({ d34: event.target.value });
  };
  changeD35Handler = (event) => {
    this.setState({ d35: event.target.value });
  };
  changeD36Handler = (event) => {
    this.setState({ d36: event.target.value });
  };
  changeD37Handler = (event) => {
    this.setState({ d37: event.target.value });
  };
  changeD38Handler = (event) => {
    this.setState({ d38: event.target.value });
  };
  changeD39Handler = (event) => {
    this.setState({ d39: event.target.value });
  };
  changeD40Handler = (event) => {
    this.setState({ d40: event.target.value });
  };
  changeD41Handler = (event) => {
    this.setState({ d41: event.target.value });
  };
  changeD42Handler = (event) => {
    this.setState({ d42: event.target.value });
  };
  changeD43Handler = (event) => {
    this.setState({ d43: event.target.value });
  };
  changeD44Handler = (event) => {
    this.setState({ d44: event.target.value });
  };
  changeD45Handler = (event) => {
    this.setState({ d45: event.target.value });
  };
  changeD46Handler = (event) => {
    this.setState({ d46: event.target.value });
  };
  changeE1Handler = (event) => {
    this.setState({ e1: event.target.value });
  };
  changeE2Handler = (event) => {
    this.setState({ e2: event.target.value });
  };
  changeE3Handler = (event) => {
    this.setState({ e3: event.target.value });
  };
  changeE4Handler = (event) => {
    this.setState({ e4: event.target.value });
  };
  changeE5Handler = (event) => {
    this.setState({ e5: event.target.value });
  };
  changeE6Handler = (event) => {
    this.setState({ e6: event.target.value });
  };
  changeE7Handler = (event) => {
    this.setState({ e7: event.target.value });
  };
  changeE8Handler = (event) => {
    this.setState({ e8: event.target.value });
  };
  changeE9Handler = (event) => {
    this.setState({ e9: event.target.value });
  };
  changeE10Handler = (event) => {
    this.setState({ e10: event.target.value });
  };
  changeE11Handler = (event) => {
    this.setState({ e11: event.target.value });
  };
  changeE12Handler = (event) => {
    this.setState({ e12: event.target.value });
  };
  changeF1Handler = (event) => {
    this.setState({ f1: event.target.value });
  };
  changeF2Handler = (event) => {
    this.setState({ f2: event.target.value });
  };
  changeF3Handler = (event) => {
    this.setState({ f3: event.target.value });
  };
  changeF4Handler = (event) => {
    this.setState({ f4: event.target.value });
  };
  changeF5Handler = (event) => {
    this.setState({ f5: event.target.value });
  };
  changeF6Handler = (event) => {
    this.setState({ f6: event.target.value });
  };
  changeF7Handler = (event) => {
    this.setState({ f7: event.target.value });
  };
  changeF8Handler = (event) => {
    this.setState({ f8: event.target.value });
  };
  changeF9Handler = (event) => {
    this.setState({ f9: event.target.value });
  };
  changeF10Handler = (event) => {
    this.setState({ f10: event.target.value });
  };
  changeF11Handler = (event) => {
    this.setState({ f11: event.target.value });
  };

  SubmitForm = (e) => {
    e.preventDefault();

    let appraisal = {
      a1: this.state.a1,
      a2: this.state.a2,

      b1: this.state.b1,
      b2: this.state.b2,
      b3: this.state.b3,
      b4: this.state.b4,
      b5: this.state.b5,
      b6: this.state.b6,
      b7: this.state.b7,

      c1: this.state.c1,
      c2: this.state.c2,
      c3: this.state.c3,
      c4: this.state.c4,
      c5: this.state.c5,
      c6: this.state.c6,
      c7: this.state.c7,

      d1: this.state.d1,
      d2: this.state.d2,
      d3: this.state.d3,
      d4: this.state.d4,
      d5: this.state.d5,
      d6: this.state.d6,
      d7: this.state.d7,
      d8: this.state.d8,
      d9: this.state.d9,
      d10: this.state.d10,
      d11: this.state.d11,
      d12: this.state.d12,
      d13: this.state.d13,
      d14: this.state.d14,
      d15: this.state.d15,
      d16: this.state.d16,
      d17: this.state.d17,
      d18: this.state.d18,
      d19: this.state.d19,
      d20: this.state.d20,
      d21: this.state.d21,
      d22: this.state.d22,
      d23: this.state.d23,
      d24: this.state.d24,
      d25: this.state.d25,
      d26: this.state.d26,
      d27: this.state.d27,
      d28: this.state.d28,
      d29: this.state.d29,
      d30: this.state.d30,
      d31: this.state.d31,
      d32: this.state.d32,
      d33: this.state.d33,
      d34: this.state.d34,
      d35: this.state.d35,
      d36: this.state.d36,
      d37: this.state.d37,
      d38: this.state.d38,
      d39: this.state.d39,
      d40: this.state.d40,
      d41: this.state.d41,
      d42: this.state.d42,
      d43: this.state.d43,
      d44: this.state.d44,
      d45: this.state.d45,
      d46: this.state.d46,
      d47: this.state.d47,
      d48: this.state.d48,

      e1: this.state.e1,
      e2: this.state.e2,
      e3: this.state.e3,
      e4: this.state.e4,
      e5: this.state.e5,
      e6: this.state.e6,
      e7: this.state.e7,
      e8: this.state.e8,
      e9: this.state.e9,
      e10: this.state.e10,
      e11: this.state.e11,
      e12: this.state.e12,

      f1: this.state.f1,
      f2: this.state.f2,
      f3: this.state.f3,
      f4: this.state.f4,
      f5: this.state.f5,
      f6: this.state.f6,
      f7: this.state.f7,
      f8: this.state.f8,
      f9: this.state.f9,
      f10: this.state.f10,
      f11: this.state.f11,
      f12: this.state.f12,
    };
    console.log("appraisal => " + JSON.stringify(appraisal));
    AppraisalService.createAppraisal(appraisal);
    this.props.history.push("/employee-home");
    alert("Form is submitted");
  };

  render() {
    return (
      <div className="container">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="p-5">
            <form onSubmit={this.SubmitForm}>
              {/*<!-- Different id names for naming in database table columns -->
              <!-- a1-a2 -->
              <!-- b1-b7 -->
              <!-- c1-c7 -->
              <!-- d1-d46 -->
              <!-- e1-e12 -->
              <!-- f1-f11 -->*/}
              <div>
                <div className="d-flex justify-content-center">
                  <p>
                    <h3>Annual Performance Appraisal Report</h3>
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <p>
                    <h3>for</h3>
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <p>
                    <h3>Officers (Technical) </h3>
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <p>
                    <h3>of National Institute of Technology, Raipur</h3>
                  </p>
                </div>
                <br />
                <br />
                <div className="d-flex justify-content-center">
                  <p>
                    <h3>Officers (Technical)</h3>
                  </p>
                </div>
                {/* {/<!-- a1-a2 -->/} */}

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    Name of Officer:
                  </label>
                  <div className="col-sm-4">
                    <input
                      type="text"
                      className="form-control"
                      name="a1"
                      required value={this.state.a1}
                      onChange={this.changeA1Handler}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    Report for the year / period ending:
                  </label>
                  <div className="col-sm-4">
                    <input
                      type="text"
                      className="form-control"
                      name="a2"
                      required value={this.state.a2}
                      onChange={this.changeA2Handler}
                    />
                  </div>
                </div>
              </div>
              <hr color="black" />
              {/*<!-- Part 1 -->
              <!-- b1-b7 -->*/}
              <div>
                <p>Part-1</p>
                <div className="d-flex justify-content-center">
                  <h4>PERSONAL DATA</h4>
                </div>
                <br />
                <div className="d-flex justify-content-center">
                  <p>
                    (To be filled by Concerned Section/Department of the
                    Institute)
                  </p>
                </div>

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    1. Name of Officer{" "}
                  </label>
                  <div className="col-sm-4">
                    <input
                      type="text"
                      className="form-control"
                      name="b1"
                      required value={this.state.b1}
                      onChange={this.changeB1Handler}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    2. Date of Birth (DD/MM/YY)
                  </label>
                  <div className="col-sm-4">
                    <input
                      type="date"
                      className="form-control"
                      name="b2"
                      required value={this.state.b2}
                      onChange={this.changeB2Handler}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    3. Date of continuous appointment To the present grade{" "}
                  </label>
                  <label className="col-sm-2 col-form-label">Date</label>
                  <div className="col-sm-2">
                    <input
                      type="date"
                      className="form-control"
                      name="b3"
                      required value={this.state.b3}
                      onChange={this.changeB3Handler}
                    />
                  </div>
                  <label className="col-sm-2 col-form-label">Grade</label>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      name="b4"
                      required value={this.state.b4}
                      onChange={this.changeB4Handler}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  4. Present post and date of appointment thereto
                  <label className="col-sm-2 col-form-label">Post</label>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      name="b5"
                      required value={this.state.b5}
                      onChange={this.changeB5Handler}
                    />
                  </div>
                  <label className="col-sm-2 col-form-label">Date</label>
                  <div className="col-sm-2">
                    <input
                      type="date"
                      className="form-control"
                      name="b6"
                      required value={this.state.b6}
                      onChange={this.changeB6Handler}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    5. Period of absence from duty (on training leave etc.)
                    during the year. If he has under gone training, specify
                  </label>
                  <div className="col-sm-4">
                    <input
                      type="text"
                      className="form-control"
                      name="b7"
                      required value={this.state.b7}
                      onChange={this.changeB7Handler}
                    />
                  </div>
                </div>
              </div>
              <hr color="black" />
              {/*<!-- Part - 2 -->
              <!-- c1-c7 -->*/}
              <div>
                <p>Part-2</p>
                <div className="d-flex justify-content-center">
                  <p>
                    <h4>To be filled in by the Officer reported upon</h4>
                  </p>
                </div>
                <br />
                <div className="d-flex justify-content-center">
                  <p>
                    (Please read carefully the instructions before filing the
                    entries)
                  </p>
                </div>
                {/* {/<!-- Part -2 ( part - 1) -->/} */}
                <div className="form-group">
                  <label for="c1">1. Brief description of duties</label>
                  <textarea
                    className="form-control"
                    name="c1"
                    rows="3"
                    required value={this.state.c1}
                    onChange={this.changeC1Handler}
                  ></textarea>
                </div>

                {/*    {/<!-- Part -2 ( part - 2) -->/} */}
                <div className="">
                  <p>
                    2. Please specify targets/objectives/goals(in quantitative
                    or other terms) of work you set for yourself or that were
                    set for you, eight to ten items of work in the order of
                    priority and your achievement against each target .(Example
                    : Annual Action Plan for your Division).
                  </p>
                  <p className="overflow-auto">
                    <table className="table table-bordered">
                      <tr>
                        <td>Targets/Objectives/Goals</td>
                        <td>Achievements</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              name="c2"
                              rows="3"
                              required value={this.state.c2}
                              onChange={this.changeC2Handler}
                            ></textarea>
                          </div>
                        </td>
                        <td>
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              name="c3"
                              rows="3"
                              required value={this.state.c3}
                              onChange={this.changeC3Handler}
                            ></textarea>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </p>
                </div>

                {/* {/<!-- Part -2 ( part - 3 ) -->/} */}
                <div>
                  <p>
                    3. Assessment by Reporting Authority and Reviewing Authority
                  </p>
                  <p>
                    (A) Please state briefly, the shortfalls with reference to
                    the targets/objectives/goals referred to in item 2. Please
                    specify constraints, if any, in achieving the targets.
                  </p>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="c4"
                      rows="3"
                      required value={this.state.c4}
                      onChange={this.changeC4Handler}
                    ></textarea>
                  </div>
                  <p>
                    (B) Please also indicate items in which there have been
                    significantly higher achievements and your contribution
                    thereto.
                  </p>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="c5"
                      rows="3"
                      required value={this.state.c5}
                      onChange={this.changeC5Handler}
                    ></textarea>
                  </div>
                </div>

                {/* {/<!-- Part -2 ( part - 4) -->/} */}
                <div>
                  <p>
                    4. Please state whether the annual return on immovable
                    property for the preceding calendar year was filed within
                    the prescribed date i.e. 31st January of the year following
                    the calendar year. If not , the date of filing the return
                    should be given.
                  </p>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="c6"
                      rows="3"
                      required value={this.state.c6}
                      onChange={this.changeC6Handler}
                    ></textarea>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Signature of officer reported upon{" "}
                  </label>
                  <div className="col-sm-4">
                    <input
                      type="text"
                      className="form-control"
                      name="c7"
                      required value={this.state.c7}
                      onChange={this.changeC7Handler}
                    />
                  </div>
                </div>
              </div>

              <hr color="black" />
              {/*<!-- Part - 3 -->
              <!-- d1-d46 -->*/}
              <div>
                <p>Part-3</p>
                <div className="d-flex justify-content-center">
                  <p>
                    <h5>
                      Numerical grading is to be awarded by reporting and
                      reviewing authority which should be on a scale of 1-10,
                      where 1 refers to the lowest grade and 10 to the highest.
                    </h5>
                  </p>
                </div>

                <br />
                <div className="d-flex justify-content-center">
                  <p>
                    (Please read carefully the guidelines before filing the
                    entries)
                  </p>
                </div>

                <ol>
                  <li>
                    The columns in the APAR should be filled with due care and
                    attention and after devoting adequate time.
                  </li>
                  <li>
                    It is expected that any grading of 1 or 2 (against work
                    output or attributes or overall grade) would be adequately
                    justified in the pen-picture by way of specific failures and
                    similarly, any grade of 9 or 10 would be justified with
                    respect to specific accomplishment. Grades of 1-2 or 9-10
                    are expected to be rare occurrences and hence the need to
                    justify them. In awarding a numerical grade the reporting
                    and reviewing authorities should rate the officer against a
                    larger population of his/her peers that may be currently
                    working under them.
                  </li>
                  <li>
                    APARs graded between 8 and 10 will be rated as 'outstanding'
                    and will be given a score of 9 for the purpose of
                    calculating average scores for empanelment/promotion.
                  </li>
                  <li>
                    APARs graded between 6 and short of 8 will be rated as 'very
                    good' and will be given a score of 7.
                  </li>
                  <li>
                    APARs graded between 4 and 6 short of 6 will be rated as
                    'good' and will be given a score of 5.
                  </li>
                  <li>APARs graded below 4 will be given a score of zero.</li>
                </ol>

                {/* {/<!-- Part - 3 (A) -->/} */}
                <div>
                  <div>
                    <p>
                      (A) Assessment of work output (weightage to this section
                      would be 40%)
                    </p>
                    <p className="overflow-auto">
                      <table className="table table-bordered">
                        <tr>
                          <td ></td>
                          <td >Reporting Authority</td>
                          <td >
                            Reviewing Authority(Refer Para 2 of part-5)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            i) Accomplishment of planned work/work allotted as
                            per subjects allotted
                          </td>
                          <td>
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="d1"
                                rows="1"
                                required value={this.state.d1}
                                onChange={this.changeD1Handler}
                              ></textarea>
                            </div>
                          </td>
                          <td>
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="d2"
                                rows="1"
                                required value={this.state.d2}
                                onChange={this.changeD2Handler}
                              ></textarea>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>ii) Quality of output</td>
                          <td>
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="d3"
                                rows="1"
                                required value={this.state.d3}
                                onChange={this.changeD3Handler}
                              ></textarea>
                            </div>
                          </td>
                          <td>
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="d4"
                                rows="1"
                                required value={this.state.d4}
                                onChange={this.changeD4Handler}
                              ></textarea>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>iii) Analytical ability</td>
                          <td>
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="d5"
                                rows="1"
                                required value={this.state.d5}
                                onChange={this.changeD5Handler}
                              ></textarea>
                            </div>
                          </td>
                          <td>
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="d6"
                                rows="1"
                                required value={this.state.d6}
                                onChange={this.changeD6Handler}
                              ></textarea>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            iv) Accomplishment of exceptional work/unforeseen
                            tasks performed
                          </td>
                          <td>
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="d7"
                                rows="1"
                                required value={this.state.d7}
                                onChange={this.changeD7Handler}
                              ></textarea>
                            </div>
                          </td>
                          <td>
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="d8"
                                rows="1"
                                required value={this.state.d8}
                                onChange={this.changeD8Handler}
                              ></textarea>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Overall Grading on 'Work Output'</td>
                          <td>
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="d9"
                                rows="1"
                                required value={this.state.d9}
                                onChange={this.changeD9Handler}
                              ></textarea>
                            </div>
                          </td>
                          <td>
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="d10"
                                rows="1"
                                required value={this.state.d10}
                                onChange={this.changeD10Handler}
                              ></textarea>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </p>
                  </div>

                  {/* {/<!-- Part - 3(B) -->/} */}
                  <div>
                    <div>
                      <p>
                        (B) Assessment of personal attributes (weightage to this
                        would be 30%)
                      </p>
                      <p className="overflow-auto">
                        <table className="table table-bordered">
                          <tr>
                            <td ></td>
                            <td >Reporting Authority</td>
                            <td >
                              Reviewing Authority(Refer Para 2 of part-5)
                            </td>
                          </tr>
                          <tr>
                            <td>i) Attitude to work</td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d11"
                                  rows="1"
                                  required value={this.state.d11}
                                  onChange={this.changeD11Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d12"
                                  rows="1"
                                  required value={this.state.d12}
                                  onChange={this.changeD12Handler}
                                ></textarea>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>ii) Sense of responsibility</td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d13"
                                  rows="1"
                                  required value={this.state.d13}
                                  onChange={this.changeD13Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d14"
                                  rows="1"
                                  required value={this.state.d14}
                                  onChange={this.changeD14Handler}
                                ></textarea>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>iii) Maintenance of Discipline</td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d15"
                                  rows="1"
                                  required value={this.state.d15}
                                  onChange={this.changeD15Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d16"
                                  rows="1"
                                  required value={this.state.d16}
                                  onChange={this.changeD16Handler}
                                ></textarea>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>iv) Communication skills</td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d17"
                                  rows="1"
                                  required value={this.state.d17}
                                  onChange={this.changeD17Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d18"
                                  rows="1"
                                  required value={this.state.d18}
                                  onChange={this.changeD18Handler}
                                ></textarea>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>v) Leadership qualities</td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d19"
                                  rows="1"
                                  required value={this.state.d19}
                                  onChange={this.changeD19Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d20"
                                  rows="1"
                                  required value={this.state.d20}
                                  onChange={this.changeD20Handler}
                                ></textarea>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>vi) Capacity to work in team spirit</td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d21"
                                  rows="1"
                                  required value={this.state.d21}
                                  onChange={this.changeD21Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d22"
                                  rows="1"
                                  required value={this.state.d22}
                                  onChange={this.changeD22Handler}
                                ></textarea>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>vii) Capacity to adhere to time-schedule</td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d23"
                                  rows="1"
                                  required value={this.state.d23}
                                  onChange={this.changeD23Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d24"
                                  rows="1"
                                  required value={this.state.d24}
                                  onChange={this.changeD24Handler}
                                ></textarea>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>viii) Inter-personal relations</td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d25"
                                  rows="1"
                                  required value={this.state.d25}
                                  onChange={this.changeD25Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d26"
                                  rows="1"
                                  required value={this.state.d26}
                                  onChange={this.changeD26Handler}
                                ></textarea>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>ix) Overall bearing and personality</td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d27"
                                  rows="1"
                                  required value={this.state.d27}
                                  onChange={this.changeD27Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d28"
                                  rows="1"
                                  required value={this.state.d28}
                                  onChange={this.changeD28Handler}
                                ></textarea>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Overall Grading on 'Personal Attributes'</td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d29"
                                  rows="1"
                                  required value={this.state.d29}
                                  onChange={this.changeD29Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d30"
                                  rows="1"
                                  required value={this.state.d30}
                                  onChange={this.changeD30Handler}
                                ></textarea>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </p>
                    </div>
                  </div>

                  {/* {/<!-- Part -3 (C) -->/} */}
                  <div>
                    <div>
                      <p>
                        (C) Assessment of functional competency (weightage to
                        this section would be 30%)
                      </p>
                      <p className="overflow-auto">
                        <table className="table table-bordered">
                          <tr>
                            <td ></td>
                            <td >Reporting Authority</td>
                            <td >
                              Reviewing Authority(Refer Para 2 of part-5)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              i) Technical knowledge of Rules /procedures in the
                              area of function and ability to apply the
                              correctly
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d31"
                                  rows="1"
                                  required value={this.state.d31}
                                  onChange={this.changeD31Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d32"
                                  rows="1"
                                  required value={this.state.d32}
                                  onChange={this.changeD32Handler}
                                ></textarea>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              ii) Knowledge of Rules/Regulations/Procedures in
                              the area of function
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d33"
                                  rows="1"
                                  required value={this.state.d33}
                                  onChange={this.changeD33Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d34"
                                  rows="1"
                                  required value={this.state.d34}
                                  onChange={this.changeD34Handler}
                                ></textarea>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>iii) Decision making ability</td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d35"
                                  rows="1"
                                  required value={this.state.d35}
                                  onChange={this.changeD35Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d36"
                                  rows="1"
                                  required value={this.state.d36}
                                  onChange={this.changeD36Handler}
                                ></textarea>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>iv) Coordination Ability</td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d37"
                                  rows="1"
                                  required value={this.state.d37}
                                  onChange={this.changeD37Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d38"
                                  rows="1"
                                  required value={this.state.d38}
                                  onChange={this.changeD38Handler}
                                ></textarea>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              v) Ability to motivate and develop subordinates
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d39"
                                  rows="1"
                                  required value={this.state.d39}
                                  onChange={this.changeD39Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d40"
                                  rows="1"
                                  required value={this.state.d40}
                                  onChange={this.changeD40Handler}
                                ></textarea>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>vi) Initiative</td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d41"
                                  rows="1"
                                  required value={this.state.d41}
                                  onChange={this.changeD41Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d42"
                                  rows="1"
                                  required value={this.state.d42}
                                  onChange={this.changeD42Handler}
                                ></textarea>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>Overall Grading on 'Functional Competency'</td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d43"
                                  rows="1"
                                  required value={this.state.d43}
                                  onChange={this.changeD43Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="d44"
                                  rows="1"
                                  required value={this.state.d44}
                                  onChange={this.changeD44Handler}
                                ></textarea>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </p>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">
                        Signature of Reporting officer{" "}
                      </label>
                      <div className="col-sm-4">
                        <input
                          type="text"
                          className="form-control"
                          name="d45"
                          required value={this.state.d45}
                          onChange={this.changeD45Handler}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">
                        Signature of the Reviewing Officer
                      </label>
                      <div className="col-sm-4">
                        <input
                          type="text"
                          className="form-control"
                          name="d46"
                          required value={this.state.d46}
                          onChange={this.changeD46Handler}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr color="black"></hr>
              {/*<!-- Part - 4 -->
              <!-- e1-e12 -->*/}
              <div>
                <p>Part-4</p>
                <br />
                <div className="d-flex justify-content-center">
                  <p>
                    <h4>GENERAL</h4>
                  </p>
                </div>
                <br />

                <div>
                  {/* {/<!-- Part -4 (part 1) -->/} */}
                  <p>1. Relations with the public (wherever applicable)</p>
                  <p>
                    (Please comment on the Officer’s accessibility to the public
                    and responsiveness to their needs)
                  </p>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="e1"
                      rows="3"
                      required value={this.state.e1}
                      onChange={this.changeE1Handler}
                    ></textarea>
                  </div>

                  {/* {/<!-- Part -4 (part 2) -->/} */}
                  <p>2. Training</p>
                  <p>
                    (Please give recommendations for training with a view to
                    further improving the effectiveness and capabilities of the
                    Officer)
                  </p>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="e2"
                      rows="1"
                      required value={this.state.e2}
                      onChange={this.changeE2Handler}
                    ></textarea>
                  </div>

                  {/* {/<!-- Part -4 (part 3) -->/} */}
                  <p>3. State of health</p>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="e3"
                      rows="2"
                      required value={this.state.e3}
                      onChange={this.changeE3Handler}
                    ></textarea>
                  </div>

                  {/* {/<!-- Part -4 (part 4) -->/} */}
                  <p>4. Integrity </p>
                  <p>(Please comment on the integrity of the Officer)</p>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="e4"
                      rows="2"
                      required value={this.state.e4}
                      onChange={this.changeE4Handler}
                    ></textarea>
                  </div>

                  {/* {/<!-- Part -4 (part 5) -->/} */}
                  <p>
                    5. Pen picture by Reporting Officer (in about 100 words) on
                    the overall qualities of the official including area of
                    strengths and lesser strengths, extraordinary achievements,
                    significant failures (ref: 3(A) and 3(B)of Part-2) and
                    attitude towards weaker sections.
                  </p>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="e5"
                      rows="4"
                      required value={this.state.e5}
                      onChange={this.changeE5Handler}
                    ></textarea>
                  </div>

                  {/* {/<!-- Part -4 (part 6) -->/} */}
                  <p>
                    6. Overall numerical grading on the basis of weightage given
                    in section A,B and C in part-3 of the report
                  </p>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="e6"
                      rows="1"
                      required value={this.state.e6}
                      onChange={this.changeE6Handler}
                    ></textarea>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Signature of the Reporting Officer{" "}
                    </label>
                    <div className="col-sm-4">
                      <input
                        type="text"
                        className="form-control"
                        name="e7"
                        required value={this.state.e7}
                        onChange={this.changeE7Handler}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Name in Block Letters:{" "}
                    </label>
                    <div className="col-sm-4">
                      <input
                        type="text"
                        className="form-control"
                        name="e8"
                        required value={this.state.e8}
                        onChange={this.changeE8Handler}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Designation:{" "}
                    </label>
                    <div className="col-sm-4">
                      <input
                        type="text"
                        className="form-control"
                        name="e9"
                        required value={this.state.e9}
                        onChange={this.changeE9Handler}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      During the period of Report:{" "}
                    </label>
                    <div className="col-sm-4">
                      <input
                        type="text"
                        className="form-control"
                        name="e10"
                        required value={this.state.e10}
                        onChange={this.changeE10Handler}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Place : </label>
                    <div className="col-sm-4">
                      <input
                        type="text"
                        className="form-control"
                        name="e11"
                        required value={this.state.e11}
                        onChange={this.changeE11Handler}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Date: </label>
                    <div className="col-sm-4">
                      <input
                        type="date"
                        className="form-control"
                        name="e12"
                        required value={this.state.e12}
                        onChange={this.changeE12Handler}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr color="black" />
              {/*<!-- Part - 5 -->
              <!-- f1-f11 -->*/}
              <div>
                <div>
                  <p>Part-5</p>

                  {/* {/<!-- Part - 5(part 1) -->/} */}
                  <p>1. REMARKS OF THE REVIEWING OFFICER</p>
                  <p>Length of service under the Reviewing Officer</p>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="f1"
                      rows="1"
                      required value={this.state.f1}
                      onChange={this.changeF1Handler}
                    ></textarea>
                  </div>

                  {/* {/<!-- Part - 5(part 2) -->/} */}
                  <p>
                    2. Do you agree with the assessment made by the reporting
                    officer with respect to the work output and the various
                    attributes in Part-3 and Part-4? Do you agree with the
                    assessment of reporting officer in respect of extraordinary
                    achievements /significant failures of the officer reported
                    upon ?(Ref: Part- 3(A)(iv) and Part-4(5)) (In case you do
                    not agree with any of the numerical assessments of
                    attributes please record your assessment in the column
                    provided for you in that section and initials your entries.)
                  </p>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="f2"
                      rows="1"
                      required value={this.state.f2}
                      onChange={this.changeF2Handler}
                    ></textarea>
                  </div>

                  {/* {/<!-- Part - 5(part 3) -->/} */}
                  <p>
                    3. In case of disagreement, please specify the reasons. Is
                    there anything you wish to modify or add?{" "}
                  </p>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="f3"
                      rows="2"
                      required value={this.state.f3}
                      onChange={this.changeF3Handler}
                    ></textarea>
                  </div>

                  {/* {/<!-- Part -5 (part 4) -->/} */}
                  <p>
                    4. Pen picture by Reviewing Officer. Please comment (in
                    about 100 words) on the overall qualities of the Officer
                    including area of strengths and lesser strength and his
                    attitude towards weaker sections.
                  </p>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="f4"
                      rows="2"
                      required value={this.state.f4}
                      onChange={this.changeF4Handler}
                    ></textarea>
                  </div>

                  {/* {/<!-- Part -5 (part 5) -->/} */}
                  <p>
                    5. Overall numerical grading on the basis of weightage given
                    in section- A, section- B and section- C in part-3 of the
                    report
                  </p>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="f5"
                      rows="1"
                      required value={this.state.f5}
                      onChange={this.changeF5Handler}
                    ></textarea>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Signature of the Reviewing Officer{" "}
                    </label>
                    <div className="col-sm-4">
                      <input
                        type="text"
                        className="form-control"
                        name="f6"
                        required value={this.state.f6}
                        onChange={this.changeF6Handler}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Name in Block Letters:{" "}
                    </label>
                    <div className="col-sm-4">
                      <input
                        type="text"
                        className="form-control"
                        name="f7"
                        required value={this.state.f7}
                        onChange={this.changeF7Handler}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Designation:{" "}
                    </label>
                    <div className="col-sm-4">
                      <input
                        type="text"
                        className="form-control"
                        name="f8"
                        required value={this.state.f8}
                        onChange={this.changeF8Handler}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      During the period of Report:{" "}
                    </label>
                    <div className="col-sm-4">
                      <input
                        type="text"
                        className="form-control"
                        name="f9"
                        required value={this.state.f9}
                        onChange={this.changeF9Handler}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Place : </label>
                    <div className="col-sm-4">
                      <input
                        type="text"
                        className="form-control"
                        name="f10"
                        required value={this.state.f10}
                        onChange={this.changeF10Handler}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Date: </label>
                    <div className="col-sm-4">
                      <input
                        type="date"
                        className="form-control"
                        name="f11"
                        required value={this.state.f11}
                        onChange={this.changeF11Handler}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary m-2"
                onClick={this.SubmitForm}
              >
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
