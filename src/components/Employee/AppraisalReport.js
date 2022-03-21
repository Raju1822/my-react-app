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


          <div className="p-5">
            <form onSubmit={this.SubmitForm}>
              {/*<!-- Different id names for naming in database table columns -->
              <!-- a1-a2 -->
              <!-- b1-b7 -->
              <!-- c1-c7 -->
              <!-- d1-d46 -->
              <!-- e1-e12 -->
              <!-- f1-f11 -->*/}
              <div >
                <div class="d-flex justify-content-center">
                <p><h3>Annual Performance Appraisal Report</h3></p>
                </div>
                <div class="d-flex justify-content-center">
                    <p><h3>for</h3></p>
                </div>
                <div class="d-flex justify-content-center">
                    <p><h3>Officers (Technical) </h3></p>
                </div>
                <div class="d-flex justify-content-center">
                    <p><h3>of National Institute of Technology, Raipur</h3></p>
                </div>
                <br/>
                <br/>
                <div class="d-flex justify-content-center">
                    <p><h3>Officers (Technical)</h3></p>
                </div>
                {/* {/<!-- a1-a2 -->/} */}

                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Name of Officer:</label>
                    <div class="col-sm-4">
                        <input type="text" class="form-control" name="a1" />
                    </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Report for the year / period ending:</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control" name="a2" />
                  </div>
                </div>
              </div>
              <hr color="black"/>
              {/*<!-- Part 1 -->
              <!-- b1-b7 -->*/}
              <div>

                <p>Part-1</p>
                <div class="d-flex justify-content-center">
                    <h4>PERSONAL DATA</h4>
                </div>
                <br/>
                <div class="d-flex justify-content-center">
                    <p>(To be filled by Concerned Section/Department of the Institute)</p>

                </div>


                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">1.   Name of Officer </label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="b1" />
                        </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-2 col-form-label">2.   Date of Birth (DD/MM/YY)</label>
                      <div class="col-sm-4">
                        <input type="text" class="form-control" name="b2" />
                      </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">3.   Date of continuous appointment
                            To the present grade  </label>
                        <label class="col-sm-2 col-form-label">Date</label>
                        <div class="col-sm-2">
                          <input type="text" class="form-control" name="b3" />
                        </div>
                        <label class="col-sm-2 col-form-label">Grade</label>
                        <div class="col-sm-2">
                          <input type="text" class="form-control" name="b4" />
                        </div>
                    </div>
                    <div class="form-group row">4. Present post and date of appointment
                        thereto
                        <label class="col-sm-2 col-form-label">Post</label>
                        <div class="col-sm-2">
                          <input type="text" class="form-control" name="b5" />
                        </div>
                        <label class="col-sm-2 col-form-label">Date</label>
                        <div class="col-sm-2">
                          <input type="text" class="form-control" name="b6" />
                        </div>

                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">5.   Period of absence from duty (on training
                            leave etc.) during the year. If he has under
                            gone training, specify</label>
                        <div class="col-sm-4">
                          <input type="text" class="form-control" name="b7"/>
                        </div>
                    </div>
              </div>
              <hr color="black"/>
              {/*<!-- Part - 2 -->
              <!-- c1-c7 -->*/}
              <div>

                <p>Part-2</p>
                <div class="d-flex justify-content-center">
                    <p><h4>To be filled in by the Officer reported upon</h4></p>
                </div>
                <br/>
                <div class="d-flex justify-content-center">
                    <p>(Please read carefully the instructions before filing the entries)</p>
                </div>
                {/* {/<!-- Part -2 ( part - 1) -->/} */}
                  <div class="form-group">
                      <label for="c1">1.   Brief description of duties</label>
                      <textarea class="form-control" name="c1" rows="3"></textarea>
                  </div>

{/*    {/<!-- Part -2 ( part - 2) -->/} */}
                <div>
                    <p>2.   Please specify targets/objectives/goals(in quantitative or other terms) of work you
                        set for yourself or that were set for you, eight to ten items of work in the order of
                        priority and your achievement against each target .(Example : Annual Action Plan
                        for your Division).
                    </p>
                    <table class="table table-bordered">
                        <tr>
                            <td>Targets/Objectives/Goals</td>
                            <td>Achievements</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-group">
                                    <textarea class="form-control" name="c2" rows="3"></textarea>
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <textarea class="form-control" name="c3" rows="3"></textarea>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>

                {/* {/<!-- Part -2 ( part - 3 ) -->/} */}
                  <div>
                      <p>3.   Assessment by Reporting Authority and Reviewing Authority</p>
                      <p>(A)   Please state briefly, the shortfalls with reference to the targets/objectives/goals
                          referred to in item 2. Please specify constraints, if any, in achieving the targets.
                      </p>
                      <div class="form-group">
                          <textarea class="form-control" name="c4" rows="3"></textarea>
                      </div>
                      <p>(B)   Please also indicate items in which there have been significantly higher
                          achievements and your contribution thereto.
                      </p>
                      <div class="form-group">
                          <textarea class="form-control" name="c5" rows="3"></textarea>
                      </div>

                  </div>

                  {/* {/<!-- Part -2 ( part - 4) -->/} */}
                  <div>
                      <p>4.   Please state whether the annual return on immovable property for the preceding
                          calendar year was filed within the prescribed date i.e. 31st January of the year
                          following the calendar year. If not , the date of filing the return should be given.

                      </p>
                      <div class="form-group">
                          <textarea class="form-control" name="c6" rows="3"></textarea>
                      </div>
                  </div>
                  <div class="form-group row">
                      <label class="col-sm-3 col-form-label">
                          Signature of officer reported upon </label>
                      <div class="col-sm-4">
                          <input type="text" class="form-control" name="c7" />
                      </div>
                  </div>

              </div>

              <hr color="black"/>
              {/*<!-- Part - 3 -->
              <!-- d1-d46 -->*/}
              <div>
                  <p>Part-3</p>
                  <div class="d-flex justify-content-center">
                      <p>
                          <h5>Numerical grading is to be awarded by reporting and reviewing authority which should be on a scale of 1-10,
                          where 1 refers to the lowest grade and 10 to the highest.
                          </h5>
                      </p>
                  </div>

                  <br/>
                  <div class="d-flex justify-content-center">
                      <p>(Please read carefully the guidelines before filing the entries)</p>
                  </div>

                  <ol>
                      <li>The columns in the APAR should be filled with due care and attention and after devoting adequate time.</li>
                      <li>
                          It is expected that any grading of 1 or 2 (against work output or attributes or overall grade) would be adequately
                          justified in the pen-picture by way of specific failures and similarly, any grade of 9 or 10 would be justified with
                          respect to specific accomplishment. Grades of 1-2 or 9-10 are expected to be rare occurrences and hence the need to
                          justify them. In awarding a numerical grade the reporting and reviewing authorities should rate the officer against a
                          larger population of his/her peers that may be currently working under them.
                      </li>
                      <li>
                          APARs graded between 8 and 10 will be rated as 'outstanding' and will be given a score of 9 for the purpose of
                          calculating average scores for empanelment/promotion.
                      </li>
                      <li>APARs graded between 6 and short of 8 will be rated as 'very good' and will be given a score of 7.</li>
                      <li>APARs graded between 4 and 6 short of 6 will be rated as 'good' and will be given a score of 5.</li>
                      <li>APARs graded below 4 will be given a score of zero.</li>
                  </ol>

                  {/* {/<!-- Part - 3 (A) -->/} */}
                  <div>

                          <div>
                              <p>(A) Assessment of work output (weightage to this section would be 40%)</p>
                              <table class="table table-bordered">
                                  <tr>
                                      <td class="col"></td>
                                      <td class="col">Reporting Authority</td>
                                      <td class="col">Reviewing Authority(Refer Para 2 of part-5)</td>
                                  </tr>
                                  <tr>
                                      <td>
                                          i) Accomplishment of planned work/work
                                          allotted as per subjects allotted
                                      </td>
                                      <td>
                                          <div class="form-group">
                                              <textarea class="form-control" name="d1" rows="1"></textarea>
                                          </div>
                                      </td>
                                      <td>
                                          <div class="form-group">
                                              <textarea class="form-control" name="d2" rows="1"></textarea>
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          ii) Quality of output
                                      </td>
                                      <td>
                                          <div class="form-group">
                                              <textarea class="form-control" name="d3" rows="1"></textarea>
                                          </div>
                                      </td>
                                      <td>
                                          <div class="form-group">
                                              <textarea class="form-control" name="d4" rows="1"></textarea>
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          iii) Analytical ability
                                      </td>
                                      <td>
                                          <div class="form-group">
                                              <textarea class="form-control" name="d5" rows="1"></textarea>
                                          </div>
                                      </td>
                                      <td>
                                          <div class="form-group">
                                              <textarea class="form-control" name="d6" rows="1"></textarea>
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          iv) Accomplishment of exceptional
                                          work/unforeseen tasks performed
                                      </td>
                                      <td>
                                          <div class="form-group">
                                              <textarea class="form-control" name="d7" rows="1"></textarea>
                                          </div>
                                      </td>
                                      <td>
                                          <div class="form-group">
                                              <textarea class="form-control" name="d8" rows="1"></textarea>
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          Overall Grading on 'Work Output'
                                      </td>
                                      <td>
                                          <div class="form-group">
                                              <textarea class="form-control" name="d9" rows="1"></textarea>
                                          </div>
                                      </td>
                                      <td>
                                          <div class="form-group">
                                              <textarea class="form-control" name="d10" rows="1"></textarea>
                                          </div>
                                      </td>
                                  </tr>

                              </table>
                          </div>


                      {/* {/<!-- Part - 3(B) -->/} */}
                      <div>

                              <div>
                                  <p>(B)  Assessment of personal attributes (weightage to this would be 30%)</p>
                                  <table class="table table-bordered">
                                      <tr>
                                          <td class="col"></td>
                                          <td class="col">Reporting Authority</td>
                                          <td class="col">Reviewing Authority(Refer Para 2 of part-5)</td>
                                      </tr>
                                      <tr>
                                          <td>
                                              i) Attitude to work
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d11" rows="1"></textarea>
                                              </div>
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d12" rows="1"></textarea>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              ii) Sense of responsibility
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d13" rows="1"></textarea>
                                              </div>
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d14" rows="1"></textarea>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              iii) Maintenance of Discipline
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d15" rows="1"></textarea>
                                              </div>
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d16" rows="1"></textarea>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              iv) Communication skills
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d17" rows="1"></textarea>
                                              </div>
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d18" rows="1"></textarea>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              v) Leadership qualities
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d19" rows="1"></textarea>
                                              </div>
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d20" rows="1"></textarea>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              vi) Capacity to work in team spirit
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d21" rows="1"></textarea>
                                              </div>
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d22" rows="1"></textarea>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              vii) Capacity to adhere to time-schedule
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d23" rows="1"></textarea>
                                              </div>
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d24" rows="1"></textarea>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              viii) Inter-personal relations
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d25" rows="1"></textarea>
                                              </div>
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d26" rows="1"></textarea>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              ix) Overall bearing and personality
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d27" rows="1"></textarea>
                                              </div>
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d28" rows="1"></textarea>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              Overall Grading on 'Personal Attributes'
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d29" rows="1"></textarea>
                                              </div>
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d30" rows="1"></textarea>
                                              </div>
                                          </td>
                                      </tr>

                                  </table>
                              </div>

                      </div>

                     {/* {/<!-- Part -3 (C) -->/} */}
                      <div>

                              <div>
                                  <p>(C) Assessment of functional competency (weightage to this section would be 30%)</p>
                                  <table class="table table-bordered">
                                      <tr>
                                          <td class="col"></td>
                                          <td class="col">Reporting Authority</td>
                                          <td class="col">Reviewing Authority(Refer Para 2 of part-5)</td>
                                      </tr>
                                      <tr>
                                          <td>
                                              i) Technical knowledge of Rules /procedures in
                                              the area of function and ability to apply the
                                              correctly
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d31" rows="1"></textarea>
                                              </div>
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d32" rows="1"></textarea>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              ii) Knowledge of
                                              Rules/Regulations/Procedures in the area of
                                              function
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d33" rows="1"></textarea>
                                              </div>
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d34" rows="1"></textarea>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              iii) Decision making ability
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d35" rows="1"></textarea>
                                              </div>
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d36" rows="1"></textarea>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              iv) Coordination Ability
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d37" rows="1"></textarea>
                                              </div>
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d38" rows="1"></textarea>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              v) Ability to motivate and develop subordinates
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d39" rows="1"></textarea>
                                              </div>
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d40" rows="1"></textarea>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              vi) Initiative
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d41" rows="1"></textarea>
                                              </div>
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d42" rows="1"></textarea>
                                              </div>
                                          </td>
                                      </tr>

                                      <tr>
                                          <td>
                                              Overall Grading on 'Functional Competency'
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d43" rows="1"></textarea>
                                              </div>
                                          </td>
                                          <td>
                                              <div class="form-group">
                                                  <textarea class="form-control" name="d44" rows="1"></textarea>
                                              </div>
                                          </td>
                                      </tr>

                                  </table>
                              </div>
                              <div class="form-group row">
                                  <label class="col-sm-3 col-form-label">
                                      Signature of Reporting officer </label>
                                  <div class="col-sm-4">
                                      <input type="text" class="form-control" name="d45" />
                                  </div>
                              </div>
                              <div class="form-group row">
                                  <label class="col-sm-3 col-form-label">
                                      Signature of the Reviewing Officer</label>
                                  <div class="col-sm-4">
                                      <input type="text" class="form-control" name="d46" />
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
                  <br/>
                  <div class="d-flex justify-content-center">
                      <p><h4>GENERAL</h4></p>
                  </div>
                  <br/>

                      <div>

                          {/* {/<!-- Part -4 (part 1) -->/} */}
                          <p>1.   Relations with the public (wherever applicable)</p>
                          <p>(Please comment on the Officer’s accessibility to the public and responsiveness to their needs)</p>
                          <div class="form-group">
                              <textarea class="form-control" name="e1" rows="3"></textarea>
                          </div>

                          {/* {/<!-- Part -4 (part 2) -->/} */}
                          <p>2.   Training</p>
                          <p>(Please give recommendations for training with a view to further improving the effectiveness and capabilities of the Officer)</p>
                          <div class="form-group">
                              <textarea class="form-control" name="e2" rows="1"></textarea>
                          </div>

                          {/* {/<!-- Part -4 (part 3) -->/} */}
                          <p>3.   State of health</p>
                          <div class="form-group">
                              <textarea class="form-control" name="e3" rows="2"></textarea>
                          </div>

                          {/* {/<!-- Part -4 (part 4) -->/} */}
                          <p>4.   Integrity </p>
                          <p>(Please comment on the integrity of the Officer)</p>
                          <div class="form-group">
                              <textarea class="form-control" name="e4" rows="2"></textarea>
                          </div>

                          {/* {/<!-- Part -4 (part 5) -->/} */}
                          <p>
                              5.   Pen picture by Reporting Officer (in about 100 words) on the overall qualities of the official
                              including area of strengths and lesser strengths, extraordinary achievements, significant
                              failures (ref: 3(A) and 3(B)of Part-2) and attitude towards weaker sections.
                          </p>
                          <div class="form-group">
                              <textarea class="form-control" name="e5" rows="4"></textarea>
                          </div>

                          {/* {/<!-- Part -4 (part 6) -->/} */}
                          <p>6.   Overall numerical grading on the basis of weightage given in section A,B and C in part-3 of the report</p>
                          <div class="form-group">
                              <textarea class="form-control" name="e6" rows="1"></textarea>
                          </div>

                          <div class="form-group row">
                              <label class="col-sm-3 col-form-label">
                                  Signature of the Reporting Officer </label>
                              <div class="col-sm-4">
                                  <input type="text" class="form-control" name="e7" />
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-sm-3 col-form-label">
                                  Name in Block Letters: </label>
                              <div class="col-sm-4">
                                  <input type="text" class="form-control" name="e8" />
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-sm-3 col-form-label">
                                  Designation: </label>
                              <div class="col-sm-4">
                                  <input type="text" class="form-control" name="e9" />
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-sm-3 col-form-label">
                                  During the period of Report: </label>
                              <div class="col-sm-4">
                                  <input type="text" class="form-control" name="e10" />
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-sm-3 col-form-label">
                                  Place : </label>
                              <div class="col-sm-4">
                                  <input type="text" class="form-control" name="e11" />
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-sm-3 col-form-label">
                                  Date: </label>
                              <div class="col-sm-4">
                                  <input type="text" class="form-control" name="e12" />
                              </div>
                          </div>
                      </div>

              </div>
              <hr color="black"/>
              {/*<!-- Part - 5 -->
              <!-- f1-f11 -->*/}
              <div>

                      <div>
                          <p>Part-5</p>

                          {/* {/<!-- Part - 5(part 1) -->/} */}
                          <p>1.   REMARKS OF THE REVIEWING OFFICER</p>
                          <p>Length of service under the Reviewing Officer</p>
                          <div class="form-group">
                              <textarea class="form-control" name="f1" rows="1"></textarea>
                          </div>

                          {/* {/<!-- Part - 5(part 2) -->/} */}
                          <p>2.   Do you agree with the assessment made by the reporting officer with respect to the work output and the
                              various attributes in Part-3 and Part-4? Do you agree with the assessment of reporting officer in respect of
                              extraordinary achievements /significant failures of the officer reported upon ?(Ref: Part- 3(A)(iv) and
                              Part-4(5))

                              (In case you do not agree with any of the numerical assessments of attributes please record your assessment in the
                              column provided for you in that section and initials your entries.)
                          </p>
                          <div class="form-group">
                              <textarea class="form-control" name="f2" rows="1"></textarea>
                          </div>

                          {/* {/<!-- Part - 5(part 3) -->/} */}
                          <p>3.   In case of disagreement, please specify the reasons. Is there anything you wish to modify or add? </p>
                          <div class="form-group">
                              <textarea class="form-control" name="f3" rows="2"></textarea>
                          </div>

                          {/* {/<!-- Part -5 (part 4) -->/} */}
                          <p>4.   Pen picture by Reviewing Officer. Please comment (in about 100 words) on the overall qualities
                              of the Officer including area of strengths and lesser strength and his attitude towards weaker
                              sections.
                          </p>
                          <div class="form-group">
                              <textarea class="form-control" name="f4" rows="2"></textarea>
                          </div>

                          {/* {/<!-- Part -5 (part 5) -->/} */}
                          <p>5.   Overall numerical grading on the basis of weightage given in section- A, section- B and
                              section- C in part-3 of the report</p>
                          <div class="form-group">
                              <textarea class="form-control" name="f5" rows="1"></textarea>
                          </div>

                          <div class="form-group row">
                              <label class="col-sm-3 col-form-label">
                                  Signature of the Reviewing Officer </label>
                              <div class="col-sm-4">
                                  <input type="text" class="form-control" name="f6" />
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-sm-3 col-form-label">
                                  Name in Block Letters: </label>
                              <div class="col-sm-4">
                                  <input type="text" class="form-control" name="f7" />
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-sm-3 col-form-label">
                                  Designation: </label>
                              <div class="col-sm-4">
                                  <input type="text" class="form-control" name="f8" />
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-sm-3 col-form-label">
                                  During the period of Report: </label>
                              <div class="col-sm-4">
                                  <input type="text" class="form-control" name="f9" />
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-sm-3 col-form-label">
                                  Place : </label>
                              <div class="col-sm-4">
                                  <input type="text" class="form-control" name="f10" />
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-sm-3 col-form-label">
                                  Date: </label>
                              <div class="col-sm-4">
                                  <input type="text" class="form-control" name="f11" />
                              </div>
                          </div>



                      </div>

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