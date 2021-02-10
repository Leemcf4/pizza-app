import React from "react"
import styled from "styled-components"
import { formatPrice } from "../Data/FoodData"
import { useChoice } from "../Hooks/useChoice"
import { UseQuantity } from "../Hooks/useQuanity"
import { useToppings } from "../Hooks/useToppings"
import { FoodLabel } from "../Menu/FoodGrid"
import { pizzaRed } from "../Styles/colors"
import { title } from "../Styles/title"
import Choices from "./Choices"
import QuantityInput from "./QuantityInput"
import Toppings from "./Toppings"

const DialogContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Dialog = styled.div`
  width: 100%;
  /* height: 500px; */
  background-color: white;
  position: fixed;

  z-index: 5;
  max-height: calc(100% - 100px);
  /* left: calc(50% - 239px); */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 100px 10px 0px 10px;
  z-index: 5;

  @media (min-width: 489px) {
    max-width: 500px;
  }
`

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0px 10px;

  padding-bottom: 80px;

  @media (min-width: 489px) {
    padding: 0px 40px;
  }
`

export const DialogFooter = styled.div`
  /* box-shadow: 0px -2px 20px 0px grey; */
  height: 60px;
  display: flex;
  justify-content: center;
`
export const ConfirmButton = styled(title)`
  margin: 10px;
  color: white;
  background-color: ${pizzaRed};
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.5;
    background-color: grey;
    pointer-events: none;
    `}
`

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`
const DialogBanner = styled.div`
  min-height: 50px;
  margin-bottom: 20px;
  /* ${({ img }) =>
    img ? `background-image: url(${img});` : `min-height: 75px;`} */
  background-position: center;
  background-size: cover;
  border-radius: 10px;
`

const DialogBannerName = styled(FoodLabel)`
  padding: 5px 40px;
  font-size: 30px;
  top: ${({ img }) => (img ? `100px` : `20px`)};
`
const toppingPrice = 0.5

export const getPrice = (order) => {
  return (
    order.quantity *
    (order.price +
      order.toppings.filter((t) => t.checked).length * toppingPrice)
  )
}

function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders }) {
  const quantity = UseQuantity(openFood && openFood.quantity)
  const toppings = useToppings(openFood.toppings)
  const choiceRadio = useChoice(openFood.choice)
  const isEditing = openFood.index > -1

  function close() {
    setOpenFood()
  }

  const order = {
    ...openFood,
    quantity: quantity.value,
    toppings: toppings.toppings,
    choice: choiceRadio.value,
  }

  const addToOrder = () => {
    setOrders([...orders, order])
    close()
  }

  const editOrder = () => {
    const newOrders = [...orders]
    newOrders[openFood.index] = order
    setOrders(newOrders)
    close()
  }

  return (
    <>
      <DialogShadow onClick={close} />
      <DialogContainer>
        <Dialog>
          <DialogBanner img={openFood.img}>
            <DialogBannerName>{openFood.name}</DialogBannerName>
          </DialogBanner>
          <DialogContent>
            <QuantityInput quantity={quantity} />
            {openFood.category === "Pizza" && (
              <>
                <h3>Toppings</h3>
                <Toppings {...toppings} />
              </>
            )}
            {openFood.choices && (
              <Choices openFood={openFood} choiceRadio={choiceRadio} />
            )}
          </DialogContent>

          <DialogFooter>
            <ConfirmButton
              onClick={isEditing ? editOrder : addToOrder}
              disabled={openFood.choices && !choiceRadio.value}
            >
              {isEditing ? `Update Order:` : `Add to Order:`}{" "}
              {formatPrice(getPrice(order))}
            </ConfirmButton>
          </DialogFooter>
        </Dialog>
      </DialogContainer>
    </>
  )
}

export function FoodDialog(props) {
  if (!props.openFood) return null

  return <FoodDialogContainer {...props} />
}
