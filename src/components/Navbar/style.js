import styled from 'styled-components'

export const StyledNav = styled.nav`
  height: 80px;
  width: 100%;
  max-width: 1100px;
  padding: 0 2rem ;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4.5rem;

  img {
    width: 50px;
  }

  .links {
    display: flex;
    gap: 1rem;

    .link {
      text-decoration: none;
      color: var(--light-orange);

      transition: 0.3s;

      &:hover {
        color: var(--dark-orange)
      }
    }
  }
`