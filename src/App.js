import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from 'react-router';
import Test from './folder/Test';
import Demo from './dasdas/Demo';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/test' element={<Demo/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
