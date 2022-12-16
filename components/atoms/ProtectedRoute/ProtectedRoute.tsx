import Router from 'next/router';

const ProtectedRoute: React.FC<{children: any}> = props => {
  const {children} = props;

  const isAuth = 1; // localStorage.getItem('isAuth');

  if (!Number(isAuth)) {
    return Router.push('/');
  }

  return children ;
};

export default ProtectedRoute;
