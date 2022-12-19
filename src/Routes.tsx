import { useAuthState } from 'react-firebase-hooks/auth';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Map from './pages/MapPage/Map';
import { HomePage } from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import { firebaseAuth } from './util/firebase/firebaseConfig';
import NotFoundComponent from './components/NotFound/NotFound';

type ProtectedRouteType = {
  redirectPath?: string;
  children?: JSX.Element;
};

const AppRoutes = () => {
  const ProtectedRoute = ({
    redirectPath = '/login',
    children,
  }: ProtectedRouteType) => {
    const [user, loading] = useAuthState(firebaseAuth);
    if (!user && !loading) {
      return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
  };

  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/maps' element={<Map />} />
          <Route path='/' element={<HomePage />} />
        </Route>
        <Route path={'*'} element={<NotFoundComponent />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
