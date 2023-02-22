import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I am a Software Developer at Elhub. <br /> I have
                        created this page to share my learnings and doings in
                        software development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Fullstack Development</h3>
                    <p>
                      I have enjoyed working on multiple web app projects, and I
                      really like to be able to learn a lot of everything. Some
                      of the things I've done includes design work, front-end
                      development, back-end development and API's, as well as
                      database development, pipeline work and cloud hosting.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Quality and Devops Engineering</h3>
                    <p>
                      Working with quality assurance like automated testing and
                      CI/CD is one of my specialities. I believe that a strong
                      test strategy combined with the right tooling can give
                      benefits in both quality and development speed. Being a
                      good developer is all about integrating quality in your
                      workflow!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Project Management</h3>
                    <p>
                      I try being inclusive and goal-oriented when working with
                      teams. I've been project and squad lead in a team of 5-10
                      people. I have strong knowledge of agile methodologies and
                      project managemenet related tools such as Jira and
                      Confluence. I am PRINCE2® and Scrum Master™ certified.
                    </p>
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
