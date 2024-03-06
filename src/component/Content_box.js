import React from "react";
import "./Content_box.css";

function Content_box({ content_data }) {
  return (
    <>
      {content_data.map((item, index) => {
        console.log(item);
        return (
          <div
            className="col-lg-3 col-md-6 my-3"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1000"
            key={index}
          >
            <div className="content-box">
              <i className={item.className}></i>
              <br />
              <br />
              <h5>{item.text}</h5>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Content_box;
