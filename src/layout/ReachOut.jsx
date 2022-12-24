import React from "react";
import { useInView } from "react-intersection-observer";
function ReachOut() {
  const { ref: ref, inView: inView } = useInView();
  return (
    <div ref={ref} className={inView ? "slideShow play" : "slideShow"}>
      <h2>Reach Out </h2>
      <h2>Reach Out </h2>
    </div>
  );
}

export default ReachOut;
