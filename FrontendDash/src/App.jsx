import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Container/Dashboard";
import Insert from "./Container/Insert";
import Update from "./Container/Update";

function App() {
  return (
    <>
      <div>
        <Dashboard />
      </div>

      <Routes>
        <Route path="/" element={<Insert />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
