import { Outlet } from "react-router-dom";

import { Root } from "./routes";

export default function App() {
  return (
    <Root>
      <Outlet />
    </Root>
  );
}
