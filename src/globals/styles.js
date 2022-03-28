import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
  * {
    font-family: 'Nunito', serif !important;
    box-sizing: border-box;
  }
`;
