import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function ImageDisplay({ row }) {
  const row1 = useRef(null);
  let { scrollYProgress } = useScroll({
    target: row1,
    offset: ["end end", "end start"],
  });
  let x1 = useTransform(scrollYProgress, [0, 1], ["100%", "115%"]);
  console.log(row);
  return (
    <div className="row" ref={row1}>
      <div className="box">
        <motion.img
          src={row.Img1}
          alt=""
          style={{ scale: x1, transition: "2s ease-in-out" }}
        />
      </div>
      <div className="box">
        <motion.img
          src={row.Img2}
          alt=""
          style={{ scale: x1, transition: "2s ease-in-out" }}
        />
      </div>
    </div>
  );
}

export default ImageDisplay;
