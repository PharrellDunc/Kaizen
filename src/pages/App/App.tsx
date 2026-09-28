import './App.css'
import JourneyPage from '../Journey/JourneyPage';
import HabitPage from '../Habit/HabitPage';
import QuestPage from '../Quest/QuestPage';
import LettersPage from '../Letters/LettersPage';
import LeaderboardPage from '../Leaderboard/LeaderboardPage';
import ReflectionsPage from '../Reflections/ReflectionsPage';
import { Routes, Route, NavLink, useNavigate} from 'react-router-dom';
import HomePage from '../Home/HomePage';
import LoginPage from '../Login/LoginPage';
import ProtectedRoute from '../../components/ProtectedRoute';
import RegisterPage from '../Register/RegisterPage';
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  level: number;
  xp: number;
  streak: number;
  created_at: string;
  last_login_date: string | null;
};

function App() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const [showAccountSettings, setShowAccountSettings] = useState(false);
  
  function handleLogout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  }

  async function handleDeleteAccount() {
  const confirmed = window.confirm(
    "Are you sure? This will permanently delete your account."
  );

  if (!confirmed) return;

  const token = localStorage.getItem("token");

  const response = await fetch(
    "http://localhost:3000/api/auth/account",
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    alert("Could not delete account.");
    return;
  }

  localStorage.removeItem("token");
  setUser(null);
  navigate("/register");
}

  useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    return;
  }

  fetch("http://localhost:3000/api/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        localStorage.removeItem("token");
        setUser(null);
        return null;
      }

      return response.json();
    })
    .then((data) => {
      if (data) {
        setUser(data);
      }
    });
}, []);

  return (
  <Routes>
    <Route path="/login" element={<LoginPage onLogin={setUser} />} />
    <Route path="/register" element={<RegisterPage />} />

    <Route
      path="/*"
      element={
        <ProtectedRoute>
          <div className="app">

            <aside className="sidebar">
              <h2>🌱 Kaizen</h2>

              <nav>
                <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
                  🏠 Home
                </NavLink>

                <NavLink to="/journey" className={({ isActive }) => isActive ? "active" : ""}>
                  📈 Journey
                </NavLink>

                <NavLink to="/habits" className={({ isActive }) => isActive ? "active" : ""}>
                  🕒 Habits
                </NavLink>

                <div className="locked-nav-item">
                  <span className="locked-nav-label">
                    🎯 Quests
                  </span>

                  <span className="locked-nav-badge">
                    🔒
                  </span>
                </div>

                <NavLink to="/letters" className={({ isActive }) => isActive ? "active" : ""}>
                  ✉️ Letters
                </NavLink>

                <NavLink to="/leaderboard" className={({ isActive }) => isActive ? "active" : ""}>
                  🏆 Leaderboard
                </NavLink>

                <div className="locked-nav-item">
                  <span className="locked-nav-label">
                    📖 Reflections
                  </span>

                   <span className="locked-nav-badge">
                    🔒
                    </span>
              </div>
              </nav>

              <div className="sidebar-bottom">

                <div className="sidebar-quote">
                  <p>“Small steps every day lead to big change.”</p>
                  <span>— Kaizen Philosophy</span>
                </div>

                <div className="sidebar-profile">
                  <div className="profile-picture">
                    {user?.name?.charAt(0) ?? "U"}
                  </div>

                  <div className="profile-info">
                    <strong>{user?.name ?? "User"}</strong>
                    <span>Level {user?.level ?? 1}</span>

                 
                  </div>
                </div>

                <button
                  className="logout-button"
                  onClick={handleLogout}
                >
                  Logout
                </button>

                <button
  className="account-settings-button"
  onClick={() => setShowAccountSettings(!showAccountSettings)}
>
  ⚙️ Account Settings
</button>

{showAccountSettings && (
  <div className="account-settings-panel">
    <button
      className="delete-account-button"
      onClick={handleDeleteAccount}
    >
      Delete Account
    </button>
  </div>
)}

              </div>
            </aside>

            <div className="app-main">

              <div className="global-status">
                <div className="global-status-item">
                  <span>🔥</span>

                  <div>
                    <strong>{user?.streak ?? 0}</strong>
                    <small>Day Streak</small>
                  </div>
                </div>

                <div className="global-status-item">
                  <span>💎</span>

                  <div>
                    <strong>{user?.xp ?? 0}</strong>
                    <small>XP</small>
                  </div>
                </div>

                <button className="global-profile">
                  {user?.name?.charAt(0) ?? "U"}
                </button>
              </div>

              <Routes>
                <Route path="/" element={<HomePage user={user}/>} />
                <Route path="/journey" element={<JourneyPage user={user}/>} />
                <Route path="/habits" element={<HabitPage />} />
                <Route path="/quests" element={<QuestPage />} />
                <Route path="/letters" element={<LettersPage />} />
                <Route path="/leaderboard" element={<LeaderboardPage currentUserId={user?.id}/>} />
                <Route path="/reflections" element={<ReflectionsPage />} />
              </Routes>

            </div>
          </div>
        </ProtectedRoute>
      }
    />
  </Routes>
);
}

export default App;
