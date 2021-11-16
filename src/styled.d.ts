import "styled-components";
import { DefifarmsTheme } from "./theme";

declare module "styled-components" {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends DefifarmsTheme {}
}
