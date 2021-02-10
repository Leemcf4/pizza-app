import { useState } from "react"

export const useOpenFood = () => {
  const [openFood, setOpenFood] = useState()
  return {
    openFood,
    setOpenFood,
  }
}

export const useIsOpenFood = () => {
  const [isOpenFood, setIsOpenFood] = useState(false)
  return {
    isOpenFood,
    setIsOpenFood,
  }
}
