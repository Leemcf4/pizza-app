export const formatPrice = (price) => {
  return price.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  })
}

export const deliveryPrice = 1.5

export const foodItems = [
  {
    name: "Cheese Pizza",
    img: "/img/pizza.jpg",
    category: "Pizza",
    price: 4.99,
  },
  {
    name: "Pepperoni Pizza",
    img: "/img/pizza.jpg",
    category: "Pizza",
    price: 5.99,
  },
  {
    name: "Deal 1",
    img: "/img/pizza.jpg",
    category: "Meal Deals",
    price: 9.99,
  },
  {
    name: "Deal 2",
    img: "/img/pizza.jpg",
    category: "Meal Deals",
    price: 12.99,
  },
  {
    name: "Fries",
    img: "/img/pizza.jpg",
    category: "Sides",
    price: 1.99,
  },
  {
    name: "Garlic Bread",
    img: "/img/pizza.jpg",
    category: "Sides",
    price: 2.99,
  },
  {
    name: "Coke",
    img: "/img/pizza.jpg",
    category: "Drinks",
    price: 0.99,
  },
  {
    name: "Fanta",
    img: "/img/pizza.jpg",
    category: "Drinks",
    price: 0.99,
  },
]

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.category]) {
    res[food.category] = []
  }
  res[food.category].push(food)
  return res
}, {})
