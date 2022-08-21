import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSignStatus } from 'redux/auth/authSlice';

export const PublicRoute = ({
  children,
  redirectPath = '/phonebook/contacts',
}) => {
  const isSignedIn = useSelector(getSignStatus);

  return isSignedIn ? <Navigate to={redirectPath} replace /> : children;
};
