import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './components/users';
import HomePage from './components/homePage';
import Layout from './components/layout';
import Photos from './components/photos';
import Albums from './components/albums';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}> 
          <Route index element={<HomePage/>}/>
          <Route path="users" element={<Users/>}/>
          <Route path="albums/:userId" element={<Albums/>}/>
          <Route path="photos/:albumId" element={<Photos/>}/>
        </Route> 
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
