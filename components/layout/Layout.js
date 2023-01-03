import { Home } from "../../pages/Home.js";
import { Pricing } from "../../pages/Pricing.js";
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
