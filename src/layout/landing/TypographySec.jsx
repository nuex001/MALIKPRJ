import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function TypographySec() {
  const typoRef = useRef(null);
  let { scrollYProgress } = useScroll({
    target: typoRef,
    offset: ["end end", "end start"],
  });
  let x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  let x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <section
      ref={typoRef}
      className="typo"
      style={{ backgroundImage: `url("/assets/typo.png")` }}
    >
      <div className="title">
        <div className="t">
          <p className="no">001</p>
          <motion.h1 style={{ x, transition: "2s ease-in-out" }}>
            Swiss/
          </motion.h1>
          <motion.h1 style={{ x: x1, transition: "2s ease-in-out" }}>
            typography
          </motion.h1>
          <motion.h1 style={{ x, transition: "2s ease-in-out" }}>
            Designs.
          </motion.h1>
          <p className="date">01.01.2022</p>
        </div>
      </div>
      <a href="/typodesing" className="view">
        VIEW
      </a>
    </section>
  );
}

export default TypographySec;
