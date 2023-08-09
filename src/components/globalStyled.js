import 'modern-normalize';
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle =  createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }  

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
    padding: 0;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
  }

  h2 {
    margin-top: 20px;
    margin-bottom: 10px;
    color: red;
  }

  p{
    font-family: Oxygen;
    font-size: 20px;
    color: rgb(5 85 63);
  }
`