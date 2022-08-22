import { Outlet } from 'react-router-dom';
import { Dashboard } from 'components';
import { Suspense } from 'react';

export const Phonebook = () => {
  return (
    <>
      <Dashboard />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
