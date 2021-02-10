import React from "react"
import styled from "styled-components"
import { pizzaRed } from "../Styles/colors"
import { title } from "../Styles/title"

const NavbarStyled = styled.div`
  background-color: #fff;
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  padding-right: 10px;
`

const Logo = styled(title)`
  font-size: 20px;
  color: #111;
`

function Navbar() {
  return (
    <NavbarStyled>
      <Logo>Pizzeria</Logo>
      <div>Cart</div>
    </NavbarStyled>
  )
}

export default Navbar
