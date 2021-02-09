import React from "react"
import styled from "styled-components"
import { formatPrice } from "../Data/FoodData"
import { UseQuantity } from "../Hooks/useQuanity"
import { useToppings } from "../Hooks/useToppings"
import { FoodLabel } from "../Menu/FoodGrid"
import { pizzaRed } from "../Styles/colors"
import { title } from "../Styles/title"
import QuantityInput from "./QuantityInput"
import Toppings from "./Toppings"

const Dialog = styled.div`
  width: 500px;
  /* height: 500px; */
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0px 40px;
  padding-bottom: 80px;
`

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 20px 0px grey;
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
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img});`}
  background-position: center;
  background-size: cover;
  border-radius: 10px;
`

const DialogBannerName = styled(FoodLabel)`
  top: 100px;
  font-size: 30px;
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

  function close() {
    setOpenFood()
  }

  const order = {
    ...openFood,
    quantity: quantity.value,
    toppings: toppings.toppings,
  }

  const addToOrder = () => {
    setOrders([...orders, order])
    close()
  }

  return (
    <>
      <DialogShadow onClick={close} />
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
        </DialogContent>

        <DialogFooter>
          <ConfirmButton onClick={addToOrder}>
            Add to Order : {formatPrice(getPrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export function FoodDialog(props) {
  if (!props.openFood) return null

  return <FoodDialogContainer {...props} />
}
