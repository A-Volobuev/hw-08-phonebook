import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import {User, Feedback, Phonebook, PrivateRoute}from './page/AccessUser';
import { LoginPage, RegisterPage, PublicRoute} from './page/Authentication'
import { authOperations } from './redux/auth';

// НЕ понимаю почему залогиненый может попасть на авторизацию

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="feedback" element={<PrivateRoute component={Feedback} />}/>
        <Route path="phonebook" element={<PrivateRoute component={Phonebook}/>}/>
        <Route path="user" element={<PrivateRoute component={User}/>}/>


        <Route path="authorization" element={<PublicRoute component={LoginPage}/>}/>
        <Route path="registration" element={<PublicRoute component={RegisterPage}/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
