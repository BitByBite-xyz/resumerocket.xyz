import { NextUIProvider } from "@nextui-org/react";
import { Layout } from "./components/layout/Layout.js";
import { CustomNavBar } from "./components/navbar/CustomNavBar.js";

export default function App() {
  return (
    <NextUIProvider>
      <Layout>
        <CustomNavBar />
      </Layout>
    </NextUIProvider>
  );
}
