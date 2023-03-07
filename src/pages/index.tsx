import { Navigate, Route, Routes } from 'react-router';
import { RouteNames } from 'shared/config';
import { MainPage } from './main';

const publicRoutes = [{ path: RouteNames.main, component: MainPage }];

export const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.main} />} />
    </Routes>
  );
};
