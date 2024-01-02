import {Navigate} from 'react-router-dom';
import { AuthStatus } from '../const/const';

type Props = {
  children: JSX.Element;
  authStatus: AuthStatus;
};

function PrivateRoute({children, authStatus}: Props): JSX.Element {
  return authStatus === AuthStatus.Auth ? children : <Navigate to={'/login'} />;
}

export default PrivateRoute;
