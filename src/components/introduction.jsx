import React, { Component } from "react";

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li
                style={{
                  backgroundImage: "url(images/img_bg.jpg)",
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>
                            Hi! <br />
                            I'm Pål Oskar
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://www.dropbox.com/s/9094gbfu1x6bdw6/CV_shared.pdf?dl=0"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View my consultant CV{" "}
                              <i className="icon-download4" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                style={{
                  backgroundImage: "url(images/img_bg.jpg)",
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            I love building
                            <br />
                            software!
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://github.com/poengen"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Projects <i className="icon-briefcase3" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                style={{
                  backgroundImage: "url(images/img_bg.jpg)",
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            I sometimes <br />
                            write...{" "}
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://medium.com/@ploskarengen"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Blog <i className="icon-book" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
