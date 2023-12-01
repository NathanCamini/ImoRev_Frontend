import { Route, BrowserRouter, Routes, useParams } from "react-router-dom";

import { Home } from "../pages/Home";
import { includeProperty } from "@/pages/Properties/includeProperty";
import { propertyDetails } from "@/pages/Properties/propertyDetails";

export function Router() {
  let { detailsProperty } = useParams();

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={includeProperty} path="/property" />
        <Route Component={propertyDetails} path="/property/:detailsProperty" />
      </Routes>
    </BrowserRouter>
  );
}
