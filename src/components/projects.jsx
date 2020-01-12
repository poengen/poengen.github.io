import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section
          className="colorlib-work"
          data-section="projects"
        >
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">
                  My Work
                </span>
                <h2 className="colorlib-heading animate-box">
                  Recent Projects
                </h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{
                    backgroundImage:
                      'url(images/mapboxandreact_icon.jpg)',
                  }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://poengen.github.io/mapboxAndReact/">
                          MapBox and React
                        </a>
                      </h3>
                      <span>Website</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div
                  className="project"
                  style={{
                    backgroundImage:
                      'url(images/tictactoe_icon.jpg)',
                  }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://poengen.github.io/tic-tac-toe/">
                          Tic Tac Toe
                        </a>
                      </h3>
                      <span>Game</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInBottom"
              >
                <div
                  className="project"
                  style={{
                    backgroundImage:
                      'url(images/img-1.jpg)',
                  }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://poengen.github.io/jsx/">
                          JSX
                        </a>
                      </h3>
                      <span>Form</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInBottom"
              >
                <div
                  className="project"
                  style={{
                    backgroundImage:
                      'url(images/img-2.jpg)',
                  }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://poengen.github.io/seasons/">
                          Seasons
                        </a>
                      </h3>
                      <span>Weather</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
