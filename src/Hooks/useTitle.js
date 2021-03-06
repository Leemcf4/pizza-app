import { useEffect } from "react"

export const useTitle = ({ openFood, orders }) => {
  useEffect(() => {
    if (openFood) {
      document.title = openFood.name
    } else {
      document.title =
        orders.length === 0
          ? "Pizza Shop"
          : `[${orders.length}] ${
              orders.length === 1 ? " item" : "items"
            } in order!`
    }
  })
}
