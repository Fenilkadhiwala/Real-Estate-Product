import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";

const AppRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
          ></Route>
        ))}
      </Routes>
    </>
  );
};

export default AppRoutes;
