import './intro.scss'
import {init} from 'ityped';
import {useEffect, useRef} from 'react'

export default function Intro() {

  const textRef = useRef();
  console.log(textRef)

  useEffect(()=> {
    init(textRef.current , {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer", "Mobile Developer"]
    })

  }, [])
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
          <h3>Full Stack <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
