import Feed from 'components/Feed/Feed';
import Header from 'components/Header/Header';
import Login from 'components/Login/Login';
import Sidebar from 'components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import { getUser } from 'store/user/userSelectors';

function App() {
  const user = useSelector(getUser);

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
    </div>
  );
}

export default App;
