import React from 'react'
import Header from '../layout/landing/Header'
import TypographySec from '../layout/landing/TypographySec'
import UserExp from '../layout/landing/UserExp';
import UserInt from '../layout/landing/UserInt';
import "../home.css";
function Home() {
  return (
    <>
    <Header/>
    <TypographySec/>
    <UserExp/>
    <UserInt/>
    </>
  )
}

export default Home