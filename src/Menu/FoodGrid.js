import styled from "styled-components"
import { title } from "../Styles/title"

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* gap: 20px; */
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  /* @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  } */
`

export const FoodLabel = styled(title)`
  position: absolute;
  /* background-color: rgba(255, 255, 255, 0.3); */
  border-radius: 5px;
  padding: 5px;
  transition: all 450ms;

  &:hover {
    /* opacity: 0.7; */
    background-color: rgba(255, 255, 255, 0.1);
  }
`

export const Food = styled.div`
  height: 50px;
  padding: 10px;
  font-size: 1rem;
  font-weight: 500;
  /* background-image: ${({ img }) => `url(${img});`}; */
  background-size: cover;
  background-position: center;
  border-radius: 7px;
  transition: all 450ms;

  cursor: pointer;
`
