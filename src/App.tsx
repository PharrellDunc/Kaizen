import './App.css'
import StatsCard from './components/StatsCard';
import FocusCard from './components/FocusCard';
import JourneyPage from './pages/JourneyPage';
import HabitPage from './pages/HabitPage';
import QuestPage from './pages/QuestPage';
import LettersPage from './pages/LettersPage';
import LeaderboardPage from './pages/LeaderboardPage';
import ReflectionsPage from './pages/ReflectionsPage';
import { Routes, Route, NavLink} from 'react-router-dom';
import HomePage from './pages/HomePage';


function App() {
  return (
 <div className="app">
  <aside className="sidebar">
    <h2>🌱 Kaizen</h2>

    <nav>
      
<NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
  🏠 Home
</NavLink>

<NavLink
  to="/journey"
  className={({ isActive }) => isActive ? "active" : ""}>
  📈 Journey
</NavLink>

<NavLink
  to="/habits"
  className={({ isActive }) => isActive ? "active" : ""}>
  🕒 Habits
</NavLink>

<NavLink
  to="/quests"
  className={({ isActive }) => isActive ? "active" : ""}>
  🎯 Quests
</NavLink>

<NavLink
  to="/letters"
  className={({ isActive }) => isActive ? "active" : ""}>
  ✉️ Letters
</NavLink>

<NavLink
  to="/leaderboard"
  className={({ isActive }) => isActive ? "active" : ""}>
  🏆 Leaderboard
</NavLink>

<NavLink
  to="/reflections"
  className={({ isActive }) => isActive ? "active" : ""}>
  📖 Reflections
</NavLink>

    </nav>

    <div className="sidebar-bottom">

  <div className="sidebar-quote">
    <p>“Small steps every day lead to big change.”</p>
    <span>— Kaizen Philosophy</span>
  </div>

  <div className="sidebar-profile">
    <div className="profile-picture">P</div>

    <div className="profile-info">
      <strong>Pharrell</strong>
      <span>Level 12</span>

      <div className="level-bar">
        <div className="level-progress"></div>
      </div>
    </div>
  </div>

</div>
  </aside>
 <div className="app-main">
  <div className="global-status">
    <div className="global-status-item">
      <span>🔥</span>

    <div>
      <strong>17</strong>
      <small>Day Streak</small>
    </div>
  </div>

  <div className="global-status-item">
    <span>💎</span>

    <div>
      <strong>2,450</strong>
      <small>XP</small>
    </div>
  </div>

  <button className="global-profile">
    P
  </button>
</div>

<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/journey" element={<JourneyPage />} />
  <Route path="/habits" element={<HabitPage />} />
  <Route path="/quests" element={<QuestPage />} />
  <Route path="/letters" element={<LettersPage />} />
  <Route path="/leaderboard" element={<LeaderboardPage />} />
  <Route path="/reflections" element={<ReflectionsPage />} />
</Routes>

</div>
</div>
);
}

export default App;
