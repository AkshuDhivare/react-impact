import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      {/* top navbar section start  */}
      <section className="top-nav">
        {/* top bar section  */}
        <div className="container ">
          <div className="row justify-content-between py-2">
            <div className="col-lg-5 col-md-8 d-flex ">
              <a href="mailto:contact@example.com" className="d-flex">
                <i className="bi bi-envelope"></i>
                &nbsp;&nbsp;contact@example.com
              </a>
              &nbsp;
              <a href="tel:+155895548855" className="d-flex top-nav-number">
                <i className="bi bi-phone "></i>
                +1 5589 55488 55
              </a>
            </div>
            <div className="col-lg-2 col-md-4  text-end header-social">
              <a className="px-2" href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a className="px-2" href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a className="px-2" href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a className="px-2" href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* top bar section  */}

      {/* menu bar &navbar section  */}
      <section className="">
        {/* navbar start */}
        <div className="banner-bg">
          <div className="container">
            <nav className="row navbar navbar-expand-lg ">
              <div className="col-lg-6 d-flex justify-content-between">
                <a className="navbar-brand" href="#">
                  <h1 className="logo">
                    Impact<span className="orange">.</span>
                  </h1>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="col-lg-6">
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav  mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link nav-link1 mx-2 active"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-link1 mx-2" href="#">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-link1 mx-2" href="#">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-link1 mx-2" href="#">
                        Portfolio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-link1 mx-2" href="#">
                        Team
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-link1 mx-2" href="#">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link nav-link1 mx-2 dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action 1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Action 2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-link1 mx-2" href="#">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="banner-bg">
          <div className="container ">
            {/* navbar end */}
            {/* hero banner start  */}
            <div className="row py-5 ">
              <div
                className="col-lg-6 my-3"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="banner-left">
                  <h1>Welcome to Impact</h1>
                  <p className="py-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam harum quis dignissimos, aperiam facilis, laboriosam?
                  </p>
                  <div className="d-flex">
                    <a className="btn m-2 banner-btn" href="#content">
                      Get Started
                    </a>
                    &nbsp;
                    <a
                      className="btn m-2 banner-transparent-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      <i className="fa-regular fa-circle-play"></i> &nbsp;Watch
                      Video
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 my-3"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="">
                  <img
                    src="../../assert/images/hero-img.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="extra-background"></div>
            </div>
            {/* hero banner end  */}
          </div>
        </div>
      </section>
      {/* menu bar & Banner section end  */}

      {/* watch video modal  */}
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/zJSY8tbf_ys?si=E3ErFdaVStrNJpze"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* watch video modal  */}
    </>
  );
}

export default Header;
