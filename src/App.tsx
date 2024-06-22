import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Layout } from "./Layout";
import {
    Homepage,
    DashboardPage,
    Skills,
    Projects,
    Contact
} from './page'
import { NotFoundPage } from './components/404';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<NotFoundPage />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
