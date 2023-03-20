import React, {Link}from 'react'

function Header () {
  return (
    <nav>
      <h1>Pavan kumar</h1>
      <main>
        <Link to={"/"}>Home</Link>
        <Link to={"/contact"}>contact</Link>
        <Link to={"/about"}>about</Link>
        <Link to={"/brands"}>brands</Link>
        <Link to={"/services"}>serivces</Link>
      </main>
    </nav>
  )
}

export default Header
