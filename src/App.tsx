import React from 'react';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import Login from './Auth/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyLib from "./Pages/MyLib/MyLib";
import EntrepreneurShip from './Pages/EntrepreneurShip/EntrepreneurShip'
import BookDetailsPage from "./Pages/BookDetails/BookDetails";
import { makeStyles } from "@mui/styles";

let useStyles = makeStyles({
  main: {
    height: '100%',
   overflow: 'hidden',

  }
})

function App() {
  let styles = useStyles()
  const { loginWithRedirect } = useAuth0();
  return (
    
    <div className={styles.main}>
      <Router>
        <Routes>
        <Route path='/' element={<Login/>} />
          <Route path="/mylib" element={<MyLib />} />
          <Route path="/entrepreneurShip" element={<EntrepreneurShip />} />
          <Route path="/bookdetails/:id" element={<BookDetailsPage /> } />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;