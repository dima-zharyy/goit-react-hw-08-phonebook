import { Outlet } from 'react-router-dom';

export const AppBar = () => {
  return (
    <>
      <div>App Bar</div>
      <Outlet />
    </>
  );
};
