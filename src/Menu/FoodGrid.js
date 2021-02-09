import styled from "styled-components"
import { title } from "../Styles/title"

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`
export const FoodLabel = styled(title)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  padding: 5px;
`

export const Food = styled.div`
  height: 100px;
  padding: 10px;
  font-size: 2rem;
  font-weight: 500;
  background-image: ${({ img }) => `url(${img});`};
  background-size: cover;
  background-position: center;
  border-radius: 7px;
  transition: all 450ms;

  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`
