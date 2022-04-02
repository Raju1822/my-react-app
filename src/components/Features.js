import React, { Component } from "react";
import Header from "./Header";

class Feature extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Header />

        <div
          id="intro"
          class="bg-info p-5 text-center bg-image shadow-1-strong mt-5"
        >
          <div class="mask">
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="text-white px-4">
                <h1 class="mb-3">Coming Soon!</h1>

                <h3 id="time-counter" class="border border-light my-4 p-4">
                  {new Date().toLocaleString() + ""}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Feature;
