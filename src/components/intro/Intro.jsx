import "./intro.scss";
import { init } from "ityped";
import React,{ useEffect, useRef, useState } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer", "Mobile Developer"],
    });
  }, []);




  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I'm</h2>
          <h1>Mostafa Jad</h1>
          <h3>
            Full Stack <span ref={textRef}></span>
          </h3>
          <button>
          <a className= 'cv' href='https://mostafacvreactapp.s3.us-east-2.amazonaws.com/mostafajad.pdf' download="Mostafa Jad CV.pdf" target='_blank'>
              Download CV
            </a>
          </button>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
