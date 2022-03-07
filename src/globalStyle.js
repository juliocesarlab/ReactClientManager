import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root{
    --light-orange: #f58634;
    --dark-orange:  #eb3237;
    --black: #121214;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
  }

  body{
    background: var(--black);
    overflow-x: hidden;
  }

  .container {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  h1 {
    font-size: 2.5rem;
    color: #fff;

    margin-bottom: 2rem;
  }

  p {
	  width: clamp(45ch, 50%, 75ch)
  }

  button {
    outline: none;
  }
`