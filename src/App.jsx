import { Outlet, ScrollRestoration } from "react-router-dom";

import { Root } from "./routes";

export default function App() {
  return (
    <Root>
      <ScrollRestoration />
      <Outlet />
    </Root>
  );
}
