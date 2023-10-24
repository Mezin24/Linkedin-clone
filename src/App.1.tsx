import Sidebar from 'components/Sidebar/Sidebar';
import Header from './components/Header/Header';

export function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app_body'>
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}
