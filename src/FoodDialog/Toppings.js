import React from "react"
import styled from "styled-components"

const ToppingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px 10px 5px 5px;

  @media (min-width: 442px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ToppingCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`

const CheckboxLabel = styled.label`
  cursor: pointer;
  padding-right: 2px;
`

function Toppings({ toppings, checkTopping }) {
  return (
    <ToppingGrid>
      {toppings.map((topping, i) => (
        <CheckboxLabel>
          <ToppingCheckbox
            type="checkbox"
            checked={topping.checked}
            onClick={() => checkTopping(i)}
          />
          {topping.name}
        </CheckboxLabel>
      ))}
    </ToppingGrid>
  )
}

export default Toppings
