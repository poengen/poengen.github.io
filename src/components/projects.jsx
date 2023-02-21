import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">
                  Recent Side Projects
                </h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInBottom"
              >
                <div
                  className="project"
                  style={{
                    backgroundImage:
                      "url(images/side-projects/Shipment-List.png)",
                  }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://www.fraitforwarding.com">Frait</a>
                      </h3>
                      <span>A digital freight forwarding platform.</span>
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
                      "url(images/side-projects/FDB-Square-Marine-Logo.png)",
                  }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://main.d1rz7o3vemoq9w.amplifyapp.com/">
                          Fjelldatabasen
                        </a>
                      </h3>
                      <span>
                        An app for strava and mountain enthusiasts, like me :)
                      </span>
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
