import './App.css'

function App() {

  return (
 <div className="app">
  <aside className="sidebar">
    <h2>🌱 Kaizen</h2>

    <nav>
      <button>🏠 Home</button>
      <button>📈 Journey</button>
      <button>✅ Habits</button>
      <button>🎯 Quests</button>
      <button>✉️ Letters</button>
      <button>🏆 Leaderboard</button>
      <button>📖 Reflections</button>
    </nav>
  </aside>

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
      <div className="card">
        <span>🔥 Day Streak</span>
        <h2>17</h2>
        <p>days</p>
      </div>

      <div className="card">
        <span>📈 Progress</span>
        <h2>Level 12</h2>
        <p>1,250 / 2,000 XP</p>
      </div>

      <div className="card focus-card">
        <span>🎯 Today's Focus</span>
        <p>✅ Gym</p>
        <p>✅ Read 20 pages</p>
        <p>✅ Coding</p>
        <p>○ Journal</p>
        <p>○ Call a friend</p>
      </div>
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
</div>
)
}

export default App
