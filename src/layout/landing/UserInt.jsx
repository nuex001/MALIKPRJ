import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function UserInt() {
  const userint = useRef(null);
  let { scrollYProgress } = useScroll({
    target: userint,
    offset: ["end end", "end start"],
  });
  let x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  let x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <section className="userint" ref={userint}>
      <div className="title">
        <div className="t">
          <p className="no">003</p>
          <motion.h1 style={{ x: x1, transition: "2s ease-in-out" }}>
            User
          </motion.h1>
          <motion.h1 style={{ x, transition: "2s ease-in-out" }}>
            interface
          </motion.h1>
          <motion.h1 style={{ x: x1, transition: "2s ease-in-out" }}>
            Designs.
          </motion.h1>
        </div>
      </div>
      <p className="intro">
        more than a logo,your user interface <br /> gives your customer/user a
        taste of how <br /> they be treated if they choose you
      </p>
      <a href="#" className="view">
        VIEW
      </a>
    </section>
  );
}

export default UserInt;
