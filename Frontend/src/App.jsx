import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Events from "./pages/Events";
import HomePage from "./pages/HomePage";
import LeaderBoard from "./pages/LeaderBoard";
import Cricket from "./components/Flow/Cricket";
import Thug from "./components/Flow/Thug";
import Football from "./components/Flow/Football";
import Volley from "./components/Flow/Volley";
import Futsal from "./components/Flow/Futsal";
import Kabbadi from "./components/Flow/Kabbadi";
import Chess from "./components/Flow/Chess";
import AboutMain from "./pages/AboutMain";
import AboutTimeLineFirstDay from "./pages/AboutTimeLineFirstDay";
import AboutTimeLineSecondDay from "./pages/AboutTimeLineSecondDay";
import AboutTimeLineThirdDay from "./pages/AboutTimeLineThirdDay";

function App() {

  return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/leaderBoard" element={<LeaderBoard />} />
          <Route path="/about" element={<AboutMain />} />
          <Route path="/event/cricket" element={<Cricket />} />
          <Route path="/event/thugOfWar" element={<Thug />} />
          <Route path="/event/football" element={<Football />} />
          <Route path="/event/volleyBall" element={<Volley />} />
          <Route path="/event/chess" element={<Chess />} />
          <Route path="/event/futSal" element={<Futsal />} />
          <Route path="/event/kabAdi" element={<Kabbadi />} />

          {/* timeline Technotsav */}
          <Route path="/AboutTimeLineFirstDay" element={<AboutTimeLineFirstDay />} />
          <Route path="/AboutTimeLineSecondDay" element={<AboutTimeLineSecondDay />} />
          <Route path="/AboutTimeLineThirdDay" element={<AboutTimeLineThirdDay />} />
        </Routes>
      </>
  );
}

export default App;
