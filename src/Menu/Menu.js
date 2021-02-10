import React from "react"
import styled from "styled-components"
import { foods, formatPrice } from "../Data/FoodData"
import { pizzaRed } from "../Styles/colors"
import { Food, FoodGrid, FoodLabel } from "./FoodGrid"

const MenuStyled = styled.div`
  display: flex;
  flex-direction: column;

  height: 1000px;
  max-width: 800px;
  color: #fff;

  background-color: ${pizzaRed};
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  margin: 50px auto 0 auto;
`

function Menu({ setOpenFood }) {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([categoryName, foods]) => (
        <>
          <h1>{categoryName}</h1>
          <FoodGrid>
            {foods.map((food) => (
              <Food img={food.img} onClick={() => setOpenFood(food)}>
                <FoodLabel>
                  <div>{food.name}</div>
                  <div>{formatPrice(food.price)}</div>
                </FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </>
      ))}
    </MenuStyled>
  )
}

export default Menu
