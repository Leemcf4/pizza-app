import { useState } from "react"

export const useToppings = (defaultTopping) => {
  const [toppings, setToppings] = useState(
    defaultTopping || getDefaultToppings()
  )
  const checkTopping = (index) => {
    const newToppings = [...toppings]
    newToppings[index].checked = !newToppings[index].checked
    setToppings(newToppings)
  }

  return {
    checkTopping,
    toppings,
  }
}

const toppingsList = [
  "Extra Cheese",
  "Pepperoni",
  "Chicken",
  "Bacon",
  "Garlic Sausage",
  "Salami",
  "Spicy Beef",
  "Chorizo",
  "Mushrooms",
  "Black Olives",
  "Fresh Garlic",
  "Rocket",
  "Red Onion",
]

const getDefaultToppings = () => {
  return toppingsList.map((topping) => ({
    name: topping,
    checked: false,
  }))
}
