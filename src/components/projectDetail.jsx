import React from 'react';

const projectDetail = () => {
  return (
    <div
      className="col-md-4 animate-box"
      data-animate-effect="fadeInBottom"
    >
      <div
        className="project"
        style={{
          backgroundImage: 'url(images/img-1.jpg)',
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
  );
};

export default projectDetail;
