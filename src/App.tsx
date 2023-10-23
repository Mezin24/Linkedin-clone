import Sidebar from 'components/Sidebar/Sidebar';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app_body'>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
