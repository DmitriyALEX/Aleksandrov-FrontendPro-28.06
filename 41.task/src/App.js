import './App.css';
import Header from './components/header';
import Aside from './components/aside';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header_cont">
          <Header />
        </div>
        <div className="aside_cont">
          <Aside />
        </div>
        <div className="main_cont">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
