import React from "react"
import styled from "styled-components"
import { pizzaRed } from "../Styles/colors"
import { title } from "../Styles/title"

const QuantityInputStyled = styled.input`
  font-size: 18px;
  width: 20px;
  text-align: center;
  border: none;
  outline: none;
`

const IncrementContainer = styled(title)`
  display: flex;
  height: 24px;
  padding-bottom: 20px;
`

const IncrementButton = styled.div`
  width: 23px;
  color: ${pizzaRed};
  font-size: 20px;
  text-align: center;
  cursor: pointer;

  line-height: 23px;
  margin: 0px 5px;
  transition: all 450ms;
  /* 
  border: 1px solid ${pizzaRed}; */
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.5;
    pointer-events: none;
    `}
  &:hover {
    background-color: #ffe3e3;
  }
`

function QuantityInput({ quantity }) {
  console.log(quantity)
  return (
    <IncrementContainer>
      <div>Quantity: </div>
      <IncrementButton
        onClick={() => {
          quantity.setValue(quantity.value - 1)
        }}
        disabled={quantity.value === 1}
      >
        -
      </IncrementButton>
      <QuantityInputStyled {...quantity} />
      <IncrementButton
        onClick={() => {
          quantity.setValue(quantity.value + 1)
        }}
      >
        +
      </IncrementButton>
    </IncrementContainer>
  )
}

export default QuantityInput
