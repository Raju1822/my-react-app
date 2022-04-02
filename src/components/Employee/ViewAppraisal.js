import React, { Component } from "react";
import AppraisalService from "../../services/AppraisalService";


class ViewAppraisal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,

    };

  }

  componentDidMount(){
        AppraisalService.getAppraisalById(this.state.id).then( (res) =>{
            let appraisal = res.data;
            this.setState({

              a1: appraisal.a1,
              a2: appraisal.a2,

              b1: appraisal.b1,
              b2: appraisal.b2,
              b3: appraisal.b3,
              b4: appraisal.b4,
              b5: appraisal.b5,
              b6: appraisal.b6,
              b7: appraisal.b7,

              c1: appraisal.c1,
              c2: appraisal.c2,
              c3: appraisal.c3,
              c4: appraisal.c4,
              c5: appraisal.c5,
              c6: appraisal.c6,
              c7: appraisal.c7,

              d1: appraisal.d1,
              d2: appraisal.d2,
              d3: appraisal.d3,
              d4: appraisal.d4,
              d5: appraisal.d5,
              d6: appraisal.d6,
              d7: appraisal.d7,
              d8: appraisal.d8,
              d9: appraisal.d9,
              d10: appraisal.d10,
              d11: appraisal.d11,
              d12: appraisal.d12,
              d13: appraisal.d13,
              d14: appraisal.d14,
              d15: appraisal.d15,
              d16: appraisal.d16,
              d17: appraisal.d17,
              d18: appraisal.d18,
              d19: appraisal.d19,
              d20: appraisal.d20,
              d21: appraisal.d21,
              d22: appraisal.d22,
              d23: appraisal.d23,
              d24: appraisal.d24,
              d25: appraisal.d25,
              d26: appraisal.d26,
              d27: appraisal.d27,
              d28: appraisal.d28,
              d29: appraisal.d29,
              d30: appraisal.d30,
              d31: appraisal.d31,
              d32: appraisal.d32,
              d33: appraisal.d33,
              d34: appraisal.d34,
              d35: appraisal.d35,
              d36: appraisal.d36,
              d37: appraisal.d37,
              d38: appraisal.d38,
              d39: appraisal.d39,
              d40: appraisal.d40,
              d41: appraisal.d41,
              d42: appraisal.d42,
              d43: appraisal.d43,
              d44: appraisal.d44,
              d45: appraisal.d45,
              d46: appraisal.d46,
              d47: appraisal.d47,
              d48: appraisal.d48,

              e1: appraisal.e1,
              e2: appraisal.e2,
              e3: appraisal.e3,
              e4: appraisal.e4,
              e5: appraisal.e5,
              e6: appraisal.e6,
              e7: appraisal.e7,
              e8: appraisal.e8,
              e9: appraisal.e9,
              e10: appraisal.e10,
              e11: appraisal.e11,
              e12: appraisal.e12,

              f1: appraisal.f1,
              f2: appraisal.f2,
              f3: appraisal.f3,
              f4: appraisal.f4,
              f5: appraisal.f5,
              f6: appraisal.f6,
              f7: appraisal.f7,
              f8: appraisal.f8,
              f9: appraisal.f9,
              f10: appraisal.f10,
              f11: appraisal.f11,
              f12: appraisal.f12,
            });
        });

}

cancel(){
  window.location.href='/employee-home';
}

PrintFunction(){
    window.print();
  }

  render() {
    return (
      <div className="container">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="text-center pt-5">
            <h2>Appraisal Report</h2>
            <hr></hr>
          </div>

          <div className="p-5">
          <form>
              {/*<!-- Different id names for naming in database table columns -->
              <!-- a1-a2 -->
              <!-- b1-b7 -->
              <!-- c1-c7 -->
              <!-- d1-d46 -->
              <!-- e1-e12 -->
              <!-- f1-f11 -->*/}
              <div >
                <div className="d-flex justify-content-center text-center">
                  <p>
                    <h5>Annual Performance Appraisal Report</h5>
                    <h5>for</h5>
                    <h5>Officers (Technical) </h5>
                    <h5>of National Institute of Technology, Raipur</h5>
                    <h5 className="pt-5">Officers (Technical)</h5>
                  </p>
                </div>


                {/* {/<!-- a1-a2 -->/} */}

                <div className="form-group row pt-5">
                  <label className="col-sm-2 col-form-label">
                    Name of Officer:
                  </label>
                  <div className="col-sm-4">
                    <input
                      type="text"
                      className="form-control text-primary"
                      name="a1"
                      value={this.state.a1}
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
                      className="form-control text-primary"
                      name="a2"
                         value={this.state.a2}
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
                      className="form-control text-primary"
                      name="b1"
                         value={this.state.b1}
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
                      className="form-control text-primary"
                      name="b2"
                         value={this.state.b2}
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
                      className="form-control text-primary"
                      name="b3"
                         value={this.state.b3}
                      onChange={this.changeB3Handler}
                    />
                  </div>
                  <label className="col-sm-2 col-form-label">Grade</label>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-control text-primary"
                      name="b4"
                         value={this.state.b4}
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
                      className="form-control text-primary"
                      name="b5"
                         value={this.state.b5}
                      onChange={this.changeB5Handler}
                    />
                  </div>
                  <label className="col-sm-2 col-form-label">Date</label>
                  <div className="col-sm-2">
                    <input
                      type="date"
                      className="form-control text-primary"
                      name="b6"
                         value={this.state.b6}
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
                      className="form-control text-primary"
                      name="b7"
                         value={this.state.b7}
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
                    className="form-control text-primary"
                    name="c1"
                    rows="3"
                       value={this.state.c1}
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
                              className="form-control text-primary"
                              name="c2"
                              rows="3"
                                 value={this.state.c2}
                              onChange={this.changeC2Handler}
                            ></textarea>
                          </div>
                        </td>
                        <td>
                          <div className="form-group">
                            <textarea
                              className="form-control text-primary"
                              name="c3"
                              rows="3"
                                 value={this.state.c3}
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
                      className="form-control text-primary"
                      name="c4"
                      rows="3"
                         value={this.state.c4}
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
                      className="form-control text-primary"
                      name="c5"
                      rows="3"
                         value={this.state.c5}
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
                      className="form-control text-primary"
                      name="c6"
                      rows="3"
                         value={this.state.c6}
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
                      className="form-control text-primary"
                      name="c7"
                         value={this.state.c7}
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
                          <td></td>
                          <td>Reporting Authority</td>
                          <td>
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
                                className="form-control text-primary"
                                name="d1"
                                rows="1"
                                   value={this.state.d1}
                                onChange={this.changeD1Handler}
                              ></textarea>
                            </div>
                          </td>
                          <td>
                            <div className="form-group">
                              <textarea
                                className="form-control text-primary"
                                name="d2"
                                rows="1"
                                   value={this.state.d2}
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
                                className="form-control text-primary"
                                name="d3"
                                rows="1"
                                   value={this.state.d3}
                                onChange={this.changeD3Handler}
                              ></textarea>
                            </div>
                          </td>
                          <td>
                            <div className="form-group">
                              <textarea
                                className="form-control text-primary"
                                name="d4"
                                rows="1"
                                   value={this.state.d4}
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
                                className="form-control text-primary"
                                name="d5"
                                rows="1"
                                   value={this.state.d5}
                                onChange={this.changeD5Handler}
                              ></textarea>
                            </div>
                          </td>
                          <td>
                            <div className="form-group">
                              <textarea
                                className="form-control text-primary"
                                name="d6"
                                rows="1"
                                   value={this.state.d6}
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
                                className="form-control text-primary"
                                name="d7"
                                rows="1"
                                   value={this.state.d7}
                                onChange={this.changeD7Handler}
                              ></textarea>
                            </div>
                          </td>
                          <td>
                            <div className="form-group">
                              <textarea
                                className="form-control text-primary"
                                name="d8"
                                rows="1"
                                   value={this.state.d8}
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
                                className="form-control text-primary"
                                name="d9"
                                rows="1"
                                   value={this.state.d9}
                                onChange={this.changeD9Handler}
                              ></textarea>
                            </div>
                          </td>
                          <td>
                            <div className="form-group">
                              <textarea
                                className="form-control text-primary"
                                name="d10"
                                rows="1"
                                   value={this.state.d10}
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
                                  className="form-control text-primary"
                                  name="d11"
                                  rows="1"
                                     value={this.state.d11}
                                  onChange={this.changeD11Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control text-primary"
                                  name="d12"
                                  rows="1"
                                     value={this.state.d12}
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
                                  className="form-control text-primary"
                                  name="d13"
                                  rows="1"
                                     value={this.state.d13}
                                  onChange={this.changeD13Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control text-primary"
                                  name="d14"
                                  rows="1"
                                     value={this.state.d14}
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
                                  className="form-control text-primary"
                                  name="d15"
                                  rows="1"
                                     value={this.state.d15}
                                  onChange={this.changeD15Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control text-primary"
                                  name="d16"
                                  rows="1"
                                     value={this.state.d16}
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
                                  className="form-control text-primary"
                                  name="d17"
                                  rows="1"
                                     value={this.state.d17}
                                  onChange={this.changeD17Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control text-primary"
                                  name="d18"
                                  rows="1"
                                     value={this.state.d18}
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
                                  className="form-control text-primary"
                                  name="d19"
                                  rows="1"
                                     value={this.state.d19}
                                  onChange={this.changeD19Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control text-primary"
                                  name="d20"
                                  rows="1"
                                     value={this.state.d20}
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
                                  className="form-control text-primary"
                                  name="d21"
                                  rows="1"
                                     value={this.state.d21}
                                  onChange={this.changeD21Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control text-primary"
                                  name="d22"
                                  rows="1"
                                     value={this.state.d22}
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
                                  className="form-control text-primary"
                                  name="d23"
                                  rows="1"
                                     value={this.state.d23}
                                  onChange={this.changeD23Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control text-primary"
                                  name="d24"
                                  rows="1"
                                     value={this.state.d24}
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
                                  className="form-control text-primary"
                                  name="d25"
                                  rows="1"
                                     value={this.state.d25}
                                  onChange={this.changeD25Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control text-primary"
                                  name="d26"
                                  rows="1"
                                     value={this.state.d26}
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
                                  className="form-control text-primary"
                                  name="d27"
                                  rows="1"
                                     value={this.state.d27}
                                  onChange={this.changeD27Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control text-primary"
                                  name="d28"
                                  rows="1"
                                     value={this.state.d28}
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
                                  className="form-control text-primary"
                                  name="d29"
                                  rows="1"
                                     value={this.state.d29}
                                  onChange={this.changeD29Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control text-primary"
                                  name="d30"
                                  rows="1"
                                     value={this.state.d30}
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
                                  className="form-control text-primary"
                                  name="d31"
                                  rows="1"
                                     value={this.state.d31}
                                  onChange={this.changeD31Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control text-primary"
                                  name="d32"
                                  rows="1"
                                     value={this.state.d32}
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
                                  className="form-control text-primary"
                                  name="d33"
                                  rows="1"
                                     value={this.state.d33}
                                  onChange={this.changeD33Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control text-primary"
                                  name="d34"
                                  rows="1"
                                     value={this.state.d34}
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
                                  className="form-control text-primary"
                                  name="d35"
                                  rows="1"
                                     value={this.state.d35}
                                  onChange={this.changeD35Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control text-primary"
                                  name="d36"
                                  rows="1"
                                     value={this.state.d36}
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
                                  className="form-control text-primary"
                                  name="d37"
                                  rows="1"
                                     value={this.state.d37}
                                  onChange={this.changeD37Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control text-primary"
                                  name="d38"
                                  rows="1"
                                     value={this.state.d38}
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
                                  className="form-control text-primary"
                                  name="d39"
                                  rows="1"
                                     value={this.state.d39}
                                  onChange={this.changeD39Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control text-primary"
                                  name="d40"
                                  rows="1"
                                     value={this.state.d40}
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
                                  className="form-control text-primary"
                                  name="d41"
                                  rows="1"
                                     value={this.state.d41}
                                  onChange={this.changeD41Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control text-primary"
                                  name="d42"
                                  rows="1"
                                     value={this.state.d42}
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
                                  className="form-control text-primary"
                                  name="d43"
                                  rows="1"
                                     value={this.state.d43}
                                  onChange={this.changeD43Handler}
                                ></textarea>
                              </div>
                            </td>
                            <td>
                              <div className="form-group">
                                <textarea
                                  className="form-control text-primary"
                                  name="d44"
                                  rows="1"
                                     value={this.state.d44}
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
                          className="form-control text-primary"
                          name="d45"
                             value={this.state.d45}
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
                          className="form-control text-primary"
                          name="d46"
                             value={this.state.d46}
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
                      className="form-control text-primary"
                      name="e1"
                      rows="3"
                         value={this.state.e1}
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
                      className="form-control text-primary"
                      name="e2"
                      rows="1"
                         value={this.state.e2}
                      onChange={this.changeE2Handler}
                    ></textarea>
                  </div>

                  {/* {/<!-- Part -4 (part 3) -->/} */}
                  <p>3. State of health</p>
                  <div className="form-group">
                    <textarea
                      className="form-control text-primary"
                      name="e3"
                      rows="2"
                         value={this.state.e3}
                      onChange={this.changeE3Handler}
                    ></textarea>
                  </div>

                  {/* {/<!-- Part -4 (part 4) -->/} */}
                  <p>4. Integrity </p>
                  <p>(Please comment on the integrity of the Officer)</p>
                  <div className="form-group">
                    <textarea
                      className="form-control text-primary"
                      name="e4"
                      rows="2"
                         value={this.state.e4}
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
                      className="form-control text-primary"
                      name="e5"
                      rows="4"
                         value={this.state.e5}
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
                      className="form-control text-primary"
                      name="e6"
                      rows="1"
                         value={this.state.e6}
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
                        className="form-control text-primary"
                        name="e7"
                           value={this.state.e7}
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
                        className="form-control text-primary"
                        name="e8"
                           value={this.state.e8}
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
                        className="form-control text-primary"
                        name="e9"
                           value={this.state.e9}
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
                        className="form-control text-primary"
                        name="e10"
                           value={this.state.e10}
                        onChange={this.changeE10Handler}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Place : </label>
                    <div className="col-sm-4">
                      <input
                        type="text"
                        className="form-control text-primary"
                        name="e11"
                           value={this.state.e11}
                        onChange={this.changeE11Handler}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Date: </label>
                    <div className="col-sm-4">
                      <input
                        type="text"
                        className="form-control text-primary"
                        name="e12"
                           value={this.state.e12}
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
                      className="form-control text-primary"
                      name="f1"
                      rows="1"
                         value={this.state.f1}
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
                      className="form-control text-primary"
                      name="f2"
                      rows="1"
                         value={this.state.f2}
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
                      className="form-control text-primary"
                      name="f3"
                      rows="2"
                         value={this.state.f3}
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
                      className="form-control text-primary"
                      name="f4"
                      rows="2"
                         value={this.state.f4}
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
                      className="form-control text-primary"
                      name="f5"
                      rows="1"
                         value={this.state.f5}
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
                        className="form-control text-primary"
                        name="f6"
                           value={this.state.f6}
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
                        className="form-control text-primary"
                        name="f7"
                           value={this.state.f7}
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
                        className="form-control text-primary"
                        name="f8"
                           value={this.state.f8}
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
                        className="form-control text-primary"
                        name="f9"
                           value={this.state.f9}
                        onChange={this.changeF9Handler}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Place : </label>
                    <div className="col-sm-4">
                      <input
                        type="text"
                        className="form-control text-primary"
                        name="f10"
                           value={this.state.f10}
                        onChange={this.changeF10Handler}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Date: </label>
                    <div className="col-sm-4">
                      <input
                        type="date"
                        className="form-control text-primary"
                        name="f11"
                           value={this.state.f11}
                        onChange={this.changeF11Handler}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>

             <div className="py-4">
                <button  className="btn btn-success m-3" onClick={this.PrintFunction}>  Create PDF</button>
                <button className="btn btn-warning m-3" onClick={this.cancel}> Back</button>
             </div>

          </div>
        </div>
      </div>
    );
  }
}

export default ViewAppraisal;
