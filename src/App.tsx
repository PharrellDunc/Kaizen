import './App.css'
import { useState } from 'react';
import StatsCard from './components/StatsCard';
import FocusCard from './components/FocusCard';
import JourneyPage from './pages/JourneyPage';
import HabitPage from './pages/HabitPage';


function App() {
const [currentPage, setCurrentPage] = useState("home");
  return (
 <div className="app">
  <aside className="sidebar">
    <h2>🌱 Kaizen</h2>

    <nav>
      
<button onClick={() => setCurrentPage("home")}
  className={currentPage === "home" 
  ? "active" 
  : ""
  }
  >
    🏠 Home
    </button>

<button onClick={() => setCurrentPage("journey")}
  className={currentPage === "journey" 
  ? "active" 
  : ""
  }
  >
    📈 Journey
    </button>

<button onClick={() => setCurrentPage("habits")}
  className={currentPage === "habits" 
  ? "active" 
  : ""
  }
  >
    🕒 Habits
    </button>

<button onClick={() => setCurrentPage("quests")}
  className={currentPage === "quests" 
  ? "active" 
  : ""
  }
  >
    🎯 Quests
    </button>

<button onClick={() => setCurrentPage("letters")}
  className={currentPage === "letters" 
  ? "active" 
  : ""
  }
  >
    ✉️ Letters
    </button>
<button onClick={() => setCurrentPage("leaderboard")}
  className={currentPage === "leaderboard" 
  ? "active" 
  : ""
  }
  >
    🏆 Leaderboard
    </button>
<button onClick={() => setCurrentPage("reflections")}
  className={currentPage === "reflections" 
  ? "active" 
  : ""
  }
  >
    📖 Reflections
    </button>

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

{currentPage === "home" && (
  <main className="dashboard">
    <section className="hero">
      <div>
        <h1>Good evening, 
          <span className="name">Pharrell</span>
        </h1>
        <p>You've got this. <strong>1% better today.</strong></p>
      </div>

      <div className="quote">
        “Sometimes ambition moves the finish line so often that you forget how far you've already travelled.”
      </div>
    </section>

    <section className="stats">
      <StatsCard
      icon="🔥"
      title="Day Streak"
      value="17"
      subtitle="days"
/>

      <StatsCard
      icon="📈"
      title="Progress"
      value="Level 12"
      subtitle="1,250 / 2,000 XP"
/>

      <FocusCard
      icon="📈"
      title="Progress"
task={[
    "Gym",
    "Read 20 pages",
    "Coding"
]}/>
    </section>

    <section className="lower-grid">
      <div className="card">
        <span>🌿 Daily Quest</span>
        <h3>Do something uncomfortable.</h3>
        <p>Small courage compounds.</p>
        <button>View Quest</button>
      </div>

      <div className="card tree-card">
        <span>🌳 Habit Tree</span>
        <div className="tree">🌳</div>
        <p>Nurture your habits. Watch yourself grow.</p>
      </div>

      <div className="card">
        <span>✉️ Letter to Future You</span>
        <h3>Remember who you wanted to be?</h3>
        <p>Leave something for the person you're becoming.</p>
        <button>Write Letter</button>
      </div>
    </section>
  </main>
)}

{currentPage === "journey" && <JourneyPage/>}

{currentPage === "habits" && <HabitPage/>}

{currentPage === "quests" && (
  <main className="dashboard">
    <h1>Quests</h1>
  </main>
)}

{currentPage === "letters" && (
  <main className="dashboard">
    <h1>Letters</h1>
  </main>
)}

{currentPage === "leaderboard" && (
  <main className="dashboard">
    <h1>Leaderboard</h1>
  </main>
)}

{currentPage === "reflections" && (
  <main className="dashboard">
    <h1>Reflections</h1>
  </main>
)}

</div>
);
}

export default App;
