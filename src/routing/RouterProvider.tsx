import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

export function RouterProvider() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <Routes>
        {routes.map((route) => {
          const RouteComponent = route.element;
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<RouteComponent />}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
} 