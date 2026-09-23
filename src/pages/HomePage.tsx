import StatsCard from "../components/StatsCard";
import FocusCard from "../components/FocusCard";

function HomePage() {
    return (
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
    )
}

export default HomePage;