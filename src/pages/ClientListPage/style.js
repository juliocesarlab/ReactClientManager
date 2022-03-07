import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 100%;
  gap: 1rem;
  display: grid;
  place-content: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-bottom: 4rem;
`

export const ListHeading = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    width: 100%;
    max-width: 20rem;
    height: 2rem;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    padding-left: .5rem;
    font-size: 0.9rem;
    font-weight: 400;
  }
`