import {Navigate} from 'react-router-dom';
import { AuthStatus } from '../const/const';
import { useAppSelector } from '../hooks/useAppSelector';

type Props = {
  children: JSX.Element;
};

function PrivateRoute({children, }: Props): JSX.Element {
  const authStatus = useAppSelector((state) => state.authStatus);

  return authStatus === AuthStatus.Auth ? children : <Navigate to={'/login'} />;
}

export default PrivateRoute;
