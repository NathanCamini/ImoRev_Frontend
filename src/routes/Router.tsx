import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { includeProperty } from "@/pages/Properties/includeProperty";

export function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route Component={Home} path="/" />
      <Route Component={includeProperty} path="/property" />
    </Routes>
    </BrowserRouter>
  );
}
