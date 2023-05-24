import logo from './logo.svg';
import './App.css';
import {Box, Button, TextField} from "@mui/material";
import {useState} from "react";
import axios from "axios";

import Leads from "./Leads";
import {Routes, Route, Router, BrowserRouter} from 'react-router-dom';
import Register from "./Register";

function App() {



  return (
      <main>
          <BrowserRouter>
              <Routes>
                  <Route path="/leads" element={<Leads />} />
                  <Route path="/" element={<Register />} />

              </Routes>
          </BrowserRouter>

      </main>
  );
}

export default App;
