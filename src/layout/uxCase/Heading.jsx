import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Heading() {
  const headerRef = useRef(null);
  let { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });
  let x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  let x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <header className="uxCaseHeader" ref={headerRef}>
      <div className="title">
        <div className="t">
          <p className="no">002</p>
          <motion.h1 style={{ x, transition: "2s ease-in-out" }}>
            User
          </motion.h1>
          <motion.h1 style={{ x: x1, transition: "2s ease-in-out" }}>
            experience
          </motion.h1>
          <motion.h1 style={{ x, transition: "2s ease-in-out" }}>
            case studies.
          </motion.h1>
          <p className="date">03.10.2022</p>
        </div>
      </div>
      <img src="/assets/UX.png" alt="" />
      <a href="#" className="view">
        Back
      </a>
      <h4>
        My job as a Ux designer spans beyound pixels,it is to
        <br /> take into account how the end user could relate to all <br />{" "}
        details of a proucts,including the sales copies. One <br /> could say we
        study the Psychology of Design.
        <span>
          Read my article on <a href="#">USER EXPERIENCE DESIGN</a>.
        </span>
      </h4>
    </header>
  );
}

export default Heading;
