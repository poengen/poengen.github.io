import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">
                  Professional Timeline
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Software Engineer at Elhub <span>2020 - present</span>
                        </h2>
                        <p>
                          I am currently working full time at Elhub as a full
                          stack developer. I have had other roles as well, like
                          squad lead and project lead.
                          <br />
                          <b>Skills: </b>Node.js, React, Kotlin, Gradle, Docker,
                          Ansible
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Senior Consultant at Netlight <span>2018 - 2020</span>
                        </h2>
                        <p>
                          I was working two years at Netlight as a quality
                          software consultant, helping clients develop their
                          quality testing initiatives.
                          <br />
                          <b>Skills: </b>Node.js, Test Automation Development,
                          Management Consulting
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Consultant at Capgemini Sogeti{" "}
                          <span>2016 - 2018</span>
                        </h2>
                        <p>
                          I spent my first two years as a professional quality
                          consultant at Capgemini Sogeti, working on projects in
                          the financial sector.
                          <br />
                          <b>Skills: </b>Quality Consulting
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Intern at VismoX (now Stages Flight) <span>2015</span>
                        </h2>
                        <p>
                          Developing the physics engine of VismoX, a software
                          product that enhances the indoor cycling experience.
                          The company was later sold to one of the world largest
                          manufacturers of indoor cycles, and the product was
                          re-branded as Stages Flight.
                          <br />
                          <b>Skills: </b>Web Development
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Primary and Higher Education <span>2010 - 2016</span>
                        </h2>
                        <p>
                          I am a civil engineer holding a Master of Sciende
                          (MSc) in Physics and Mathematics. I developed my
                          interest in solving complex problems involving high
                          theoretical and practical knowledge of programming,
                          mathematical modeling and numerical calculations.
                          <br />
                          <b>Skills: </b>Mathematical Modeling, Object Oriented
                          Programming, Problem Solving
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none" />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
