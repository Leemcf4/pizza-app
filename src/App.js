import { useState } from "react"
import { createGlobalStyle } from "styled-components"
import "./App.css"
import { Banner } from "./Banner/Banner"
import { FoodDialog } from "./FoodDialog/FoodDialog"
import { useOpenFood } from "./Hooks/useOpenFood"
import { useOrders } from "./Hooks/useOrders"
import { useTitle } from "./Hooks/useTitle"
import Menu from "./Menu/Menu"
import Navbar from "./Navbar/Navbar"
import Order from "./Order/Order"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
   
  }

  h1, h2, h3{
    font-family: 'Roboto', sans-serif;
  }
`

function App() {
  const openFood = useOpenFood()
  const orders = useOrders()

  const isOpenFood = openFood !== null

  useTitle({ ...openFood, ...orders })
  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <Navbar />
      <Order {...orders} {...openFood} />
      <Banner />
      <Menu {...openFood} />
    </>
  )
}

export default App
