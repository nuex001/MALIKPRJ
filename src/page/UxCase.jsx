import React from "react";
import "../../src/uxcase.css";
import Heading from "../layout/uxCase/Heading";
import CampLogs from "../layout/uxCase/CampLogs";
import UserInt from '../layout/landing/UserInt';
import Ascent from "../layout/uxCase/Ascent";
function UxCase() {
  return (
    <>
    <Heading/>
    <CampLogs/>
    <Ascent/>
    <UserInt/>
    </>
  );
}

export default UxCase;
