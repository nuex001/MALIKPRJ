import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageDisplay from "./ImageDisplay";
function viewSec() {
  const [rows, setRows] = useState([
    {
      Img1: "/assets/312-365 crazy 3.png",
      Img2: "/assets/340-365 1.png",
    },
    {
      Img1: "/assets/347-365.png",
      Img2: "/assets/062-365 3.png",
    },
    {
      Img1: "/assets/303-365 3.png",
      Img2: "/assets/068-365 3.png",
    },
    {
      Img1: "/assets/200-365 3.png",
      Img2: "/assets/220-365 3.png",
    },
    {
      Img1: "/assets/306-365 2.png",
      Img2: "/assets/335-365 1.png",
    },
    {
      Img1: "/assets/321-365 chaos 2.png",
      Img2: "/assets/257-365 3.png",
    },
  ]);
  const row = useRef(null);
  let { scrollYProgress } = useScroll({
    target: row,
    offset: ["end end", "end start"],
  });
  let x = useTransform(scrollYProgress, [0, 1], ["100%", "115%"]);
  return (
    <section className="viewSec">
      <div className="row" ref={row}>
        <div className="box">
          <motion.img
            src="/assets/2023 Euro Tour 2.png"
            alt=""
            style={{ scale: x, transition: "2s ease-in-out" }}
          />
        </div>
        <div className="box text">
          <h2>How it began.</h2>
          <p>
            <h3>
              Going into 2022, I decided to become the best designer Africa has
              ever birthed.{" "}
            </h3>
            <h3>
              To achieve this I knew I had to exceptionally do the kind of work
              no one wants to do.
            </h3>
            <h3>So I created a design for everyday of the year. </h3>
            <h3>
              I ended up creating the Campaign poster for Chris Do’s euro tour
              of 2023.
            </h3>
            <h3>
              Since then I’ve worked on a few prestigious projects, and these
              are some of my work.{" "}
            </h3>
            <h3>Enjoy the view !</h3>
          </p>
        </div>
      </div>
      {rows.map((row) => (
        <ImageDisplay row={row} />
      ))}
    </section>
  );
}

export default viewSec;
