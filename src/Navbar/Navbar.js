import React from "react"
import styled from "styled-components"
import { pizzaRed } from "../Styles/colors"
import { title } from "../Styles/title"

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 10;
`

const Logo = styled(title)`
  font-size: 20px;
  color: white;
`

function Navbar() {
  return (
    <NavbarStyled>
      <Logo>Pizzeria</Logo>
    </NavbarStyled>
  )
}

export default Navbar
