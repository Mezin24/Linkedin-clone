import Feed from 'components/Feed/Feed';
import Header from 'components/Header/Header';
import Login from 'components/Login/Login';
import Sidebar from 'components/Sidebar/Sidebar';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUser } from 'store/user/userSelectors';
import { userActions } from 'store/user/userSlice';
import { auth } from '../firebase.config';

function App() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          userActions.login({
            id: user.uid,
            name: user.displayName || '',
            email: user.email || '',
            photoURL: user.photoURL || '',
          })
        );
      } else {
        dispatch(userActions.logout());
      }
    });
  }, [dispatch]);

  return (
    <div className='app'>
      <Header />
      {user ? (
        <div className='app_body'>
          <Sidebar />
          <Feed />
        </div>
      ) : (
        <Login />
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
