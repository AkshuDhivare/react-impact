import React from "react";
import "./Body.css";

function Body() {
  return (
    <>
      {/* content section  */}
      <section id="content">
        <div className="container">
          <div className="row content">
            <div
              className="col-lg-3 col-md-6 my-3"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="content-box ">
                <i className="bi bi-easel text-white h1"></i>
                <br />
                <br />
                <h5>Lorem, ipsum.</h5>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 my-3"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="content-box ">
                <i className="bi bi-gem text-white h1"></i>
                <br />
                <br />
                <h5>Lorem, ipsum.</h5>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 my-3"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="content-box ">
                <i className="bi bi-geo-alt text-white h1"></i>
                <br />
                <br />
                <h5>Lorem, ipsum.</h5>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 my-3"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="content-box ">
                <i className="bi bi-command text-white h1"></i>
                <br />
                <br />
                <h5>Lorem, ipsum.</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* content section  */}

      {/* extended banner  */}
      <div className="py-5 my-5"></div>
      {/* extended banner  */}
    </>
  );
}

export default Body;
