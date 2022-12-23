import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Heading() {
  const headerRef = useRef(null);
  let { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["end end", "end start"],
  });
  let x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  let x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <header className="uxCaseHeader">
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
      <img src="/assets/homeUser.png" alt="" />
      <a href="#" className="view">
        Back
      </a>
    </header>
  );
}

export default Heading;
