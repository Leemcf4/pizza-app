import { useState } from "react"

export const useIsOpenFood = () => {
  const [isOpenFood, setIsOpenFood] = useState()
  return {
    isOpenFood,
    setIsOpenFood,
  }
}
