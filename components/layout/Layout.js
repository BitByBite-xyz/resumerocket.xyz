import { Home } from "../../pages/home.js";
import { Pricing } from "../../pages/pricing.js";
import { Box } from "./Box.js";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
    }}
  >
    {children}
    <Pricing />
  </Box>
);
