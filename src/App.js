import './App.css';
import HomePageComponent from './components/HomePageComponent';
import LoginComponent from './components/LoginComponent';
import SignUpComponent from './components/SignUpComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePageComponent />} />
          <Route path="/login" element={<LoginComponent fullname="Deva" email="test@gmail.com" />} />
          <Route path="/signup" element={<SignUpComponent details={{ fullname: "Deva", email: "test@gmail.com" }} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
