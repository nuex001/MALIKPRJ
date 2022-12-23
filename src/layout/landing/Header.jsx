import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
function Header() {
  const headerRef = useRef(null);
  let { scrollYProgress } = useScroll({
    target: headerRef,
    offset:["end end","end start"],
  });
  let x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  let x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <header ref={headerRef}>
      <div className="title">
        <h1 className="t">C &</h1>
        <div>
          <motion.h1 style={{ x, transition: "2s ease-in-out" }} className="t1">
            Swiss Graphic &
          </motion.h1>
          <motion.h1
            className="t2"
            style={{ x: x1, transition: "2s ease-in-out" }}
          >
            UX Designer
          </motion.h1>
        </div>
      </div>
      <div className="info">
        <div>
          <h4>Beyound</h4>
          <h4>pixels.</h4>
        </div>
        <h4 className="intro">
          <span>
            Hello and <br /> welcome to my <br /> humble abode, <br />
          </span>
          I’m Meshach <br /> Nsude, I design <br /> experiences.
        </h4>
      </div>
      <div className="scroll">SCROLL</div>
    </header>
  );
}

export default Header;
