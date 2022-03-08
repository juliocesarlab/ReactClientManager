import styled from "styled-components"

export const CardWrapper = styled.div`
    width: 100%;
    min-width: 280px;
    height: 120px;
    padding: 1rem;
    
    
    background: rgb(245,134,52);
    background: linear-gradient(200deg, rgba(245,134,52,1) 15%, rgba(245,134,52,1) 0%, rgba(235,50,55,1) 100%);
    
    display: flex;
    justify-content: center;
    flex-direction: column;

    border-radius: 16px;

    .heading {
      display: flex;
      justify-content: space-between;
      color: var(--black);

      h2 {
        margin-bottom: 0.5rem;
        font-weight: 900;
      }

      span {
        font-size: 1.5rem;
        cursor: pointer;
        transition: 0.3s cubic-bezier(0.23, 1, 0.320, 1);
        color: var(--black);
        
        &:hover {
          color: #fff
        }
      }
    }

    p{
      font-size: 1rem;
      display: flex;
      gap: 0.5rem;
      font-weight: 400;
      filter: brightness(1.5);
      font-size: 0.90rem;
    }

    span {
      font-weight: 500;
      font-size: 0.95rem;
    }

    
`