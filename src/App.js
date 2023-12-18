import './App.css';
import React from 'react';
import SwitchingPage from "./pages/SwitchingPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthForm from "./templates/AuthForm";
import SignInForm from "./templates/SignInForm";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <SwitchingPage /> } />
          {/*<Route path="logIn" element={<AuthForm />} />*/}
          {/*<Route path="signIn" element={<SignInForm />} />*/}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
