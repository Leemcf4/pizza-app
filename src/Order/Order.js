import React from "react"
import styled from "styled-components"
import { formatPrice, deliveryPrice } from "../Data/FoodData"
import {
  ConfirmButton,
  DialogContent,
  DialogFooter,
  getPrice,
} from "../FoodDialog/FoodDialog"

const OrderStyled = styled.div`
  position: fixed;
  right: 0;
  top: 40px;
  width: 340px;
  background-color: white;
  z-index: 9;
  height: calc(100% - 55px);
  box-shadow: 4px 0px 5px 5px grey;
  display: flex;
  flex-direction: column;
  padding: 20px;
  display: none;
`

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`
const OrderFooter = styled(DialogFooter)`
  box-shadow: none !important;
`

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid #e8e8e8;
  ${({ editable }) =>
    editable
      ? `

    &:hover {
      cursor: pointer;
      background-color: #e4e4e4; 
    }
  `
      : `pointer-events: none;`}
`

const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`

const DetailItem = styled.div`
  color: gray;
  font-size: 10px;
`

function Order({ orders, setOrders, setOpenFood }) {
  console.log(orders)

  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order)
  }, 0)

  const deleteItem = (index) => {
    const newOrders = [...orders]
    newOrders.splice(index, 1)
    setOrders(newOrders)
  }

  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>Add some items to your order</OrderContent>
      ) : (
        <>
          <OrderContent>
            {" "}
            <OrderContainer>Your order: {orders.length} items</OrderContainer>
            {orders.map((order, index) => (
              <OrderContainer editable>
                <OrderItem onClick={() => setOpenFood({ ...order, index })}>
                  <div>{order.quantity}</div>
                  <div>{order.name}</div>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteItem(index)
                    }}
                  >
                    X
                  </div>
                  <div>{formatPrice(getPrice(order))}</div>
                </OrderItem>
                <DetailItem>
                  {order.toppings
                    .filter((t) => t.checked)
                    .map((topping) => topping.name)
                    .join(", ")}
                </DetailItem>
                {order.choice && <DetailItem>{order.choice}</DetailItem>}
              </OrderContainer>
            ))}
            <OrderContainer>
              <OrderItem>
                <div />
                <div>Subtotal: </div>
                {formatPrice(subtotal)}
              </OrderItem>
              <OrderItem>
                <div />
                <div>Delivery: </div>
                {formatPrice(deliveryPrice)}
              </OrderItem>
              <OrderItem>
                <div />
                <div>Total: </div>
                {formatPrice(subtotal + deliveryPrice)}
              </OrderItem>
            </OrderContainer>
          </OrderContent>
        </>
      )}

      <OrderFooter>
        <ConfirmButton>Place Order</ConfirmButton>
      </OrderFooter>
    </OrderStyled>
  )
}

export default Order
