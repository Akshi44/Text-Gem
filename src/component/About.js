import React from "react";
// import { useState }  from 'react';

function About(props) {  
  return (
    <div className="container"style={{background: props.mode ==="dark" ? "black":"light"}}>
      <h1 className={`my-3 text-${props.mode ==="light" ? "dark":"light"}`}>About Us</h1>
      <div className="accordion" id="accordionExample"style={{background: props.mode ==="dark" ? "black":"light"}} >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button text-${props.mode ==="light" ? "dark":"light"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{background: props.mode ==="dark" ? "black":"light" }}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body text-${props.mode ==="light" ? "dark":"light"}`} style={{background: props.mode ==="dark" ? "black":"light"}}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed text-${props.mode ==="light" ? "dark":"light"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              // style={{background: props.mode ==="dark" ? "black":"light"}}
              style={{background: props.mode ==="light" ? "light":"black"}}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body text-${props.mode ==="light" ? "dark":"light"}`} style={{background: props.mode ==="dark" ? "black":"light"}}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed text-${props.mode ==="light" ? "dark":"light"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{background: props.mode ==="dark" ? "black":"light"}}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body text-${props.mode ==="light" ? "dark":"light"}`} style={{background: props.mode ==="dark" ? "black":"light"}}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
