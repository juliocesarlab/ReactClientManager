import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 100%;
  gap: 1rem;
  display: grid;
  justify-items: start;
  grid-template-columns: repeat(auto-fit, minmax(280px, 0.35fr));
  margin: 4rem 0rem;

  .noClients {
    width: 1200px;
    font-weight: 300;
    font-size: 1.8rem;
    color: var(--light-orange);
  }

  .noClients span {
    cursor: pointer;
    font-weight: 600;

    transition: color 0.3s;
  }

  .noClients span:hover {
    color: var(--dark-orange);
  }
`

export const ListHeading = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  

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
    margin-bottom: 2rem;
  }

  
`