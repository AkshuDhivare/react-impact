import React from "react";
import "./Body.css";
import Content_box from "./Content_box";

function Body() {
  const content_data = [
    {
      className: "bi bi-command text-white h1",
      text: "Lorem, ipsum",
    },
    {
      className: "bi bi-geo-alt text-white h1",
      text: "Lorem, ipsum",
    },
    {
      className: "bi bi-gem text-white h1",
      text: "Lorem, ipsum",
    },
    {
      className: "bi bi-easel text-white h1",
      text: "Lorem, ipsum",
    },
  ];
  return (
    <>
      {/* content section  */}
      <section id="content">
        <div className="container">
          <div className="row content">
            <Content_box content_data={content_data} />
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
