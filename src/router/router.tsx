import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import PhantomDetail from "../views/PhantomDetail";
import { NotFound } from "../views/NotFound/NotFound";
import path from "./path";

export const Router = () => {
  return (
    <Routes>
      <Route path={path.root} element={<Navigate to={path.dashboard} />} />
      <Route path={path.dashboard} element={<Dashboard />} />
      <Route path={path.phantom} element={<PhantomDetail />} />
      <Route path={path.notFound} element={<NotFound />} /> {/* Route 404 */}
    </Routes>
  );
};

export default Router;
