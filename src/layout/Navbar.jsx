import React, { useRef } from "react";
// import {arr}
import { FaChevronDown, FaLightbulb } from "react-icons/fa";

function Navbar() {
  const myRef = useRef();
  const myRef1 = useRef();
  const myRef2 = useRef();
  const toggleMenu = (e) => {
    e.target.parentNode.classList.toggle("active");
    myRef.current.classList.toggle("active");
  };

  const toggleDrop = () => {
    myRef1.current.classList.toggle("active");
  };
  const toggleDropDown = () => {
    myRef2.current.classList.toggle("active");
  };

  return (
    <nav>
      <a href="" className="logo">
        Meshach Nsude
      </a>
      <ul>
        <li ref={myRef2}>
          <span onClick={toggleDropDown}>
            {" "}
            Work <FaChevronDown className="icon" />
          </span>
          <div className="cont">
            <li>
              {" "}
              <a href="#">Swiss designs</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Ux case studies</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Ui designs</a>{" "}
            </li>
          </div>
        </li>
        <li>
          {" "}
          <a href="#">About me</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Blog</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Contacts</a>{" "}
        </li>
      </ul>
      <div className="menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="mobile" ref={myRef}>
        <li className="drop" ref={myRef1}>
          <span onClick={toggleDrop}>
            Work <FaChevronDown className="icon1" />
          </span>
          <div className="Mobilecont">
            <li>
              {" "}
              <a href="#">Swiss designs</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Ux case studies</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Ui designs</a>{" "}
            </li>
          </div>
        </li>
        <li>
          {" "}
          <a href="#">About me</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Blog</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Contacts</a>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
