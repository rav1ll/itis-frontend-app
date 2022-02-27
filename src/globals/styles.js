import reset from "styled-reset";
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  ${reset}
  @import url("https://fonts.googleapis.com/css2?family=ZCOOL+QingKe+HuangYou&display=swap");
  * {
    font-family: 'ZCOOL QingKe HuangYou', cursive !important;
  }
`
