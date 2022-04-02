import React, { Component } from "react";
import Header from "./Header";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <div className="container card-body">
          <div class="row my-5">

            <div class="col-lg-8 mx-auto">

              <div class="bg-white p-5 rounded shadow">
                  <h4>Search here...</h4>
                <form action="">
                  <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <button
                          id="button-addon2"
                          type="submit"
                          class="btn btn-link text-warning"
                        >
                          <i class="fa fa-search"></i>
                        </button>
                      </div>
                      <input
                        type="search"
                        placeholder="What're you searching for?"
                        aria-describedby="button-addon2"
                        class="form-control border-0 bg-light"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Search;
