import "./HabitPage.css";
import HabitItem from "../components/HabitItem";

const habits = [
  {
    icon: "🌱",
    name: "Morning Meditation",
    streak: 3,
    completed: true,
  },

  {
    icon: "🔥",
    name: "Reading 30 minutes",
    streak: 19,
    completed: true,
  },

  {
    icon: "⛹🏽",
    name: "Basketball Practice",
    streak: 1,
    completed: false,
  },

  {
    icon: "🏋🏽‍♂️",
    name: "Go to the Gym",
    streak: 1028,
    completed: true,
  },

  {
    icon: "👨🏾‍🎓",
    name: "Duolingo Spanish",
    streak: 8,
    completed: false,
  },

  {
    icon: "👨🏾‍💻",
    name: "Practice coding",
    streak: 0,
    completed: false,
  },
];


function HabitPage() {
    return (
        <main className="dashboard habits-page">

        <section className="habits-hero">
          <div className="habits-heading">
            <h1>Habits 🌿</h1>
            <p>
            Small actions repeated daily become extraordinary results.
            </p>
          </div>

        </section>

        <section className="daily-progress">

            <div className="progress-ring">
                <strong>4/6</strong>
                <span>Habits Completed</span>
                </div>

            </section>

            <section className="today-habits">

            <div className="habits-header">
                <h2>Today's Habits</h2>

                <button>Edit ✏️</button>
            </div>

            <div className="habits-list">
             {habits.map((habit) => (
                <HabitItem
                    key={habit.name}
                    icon={habit.icon}
                    name={habit.name}
                    streak={habit.streak}
                    completed={habit.completed}
                />
            ))}
            </div>

            </section>

            <section className="habits-bottom-grid">
              <div className="habit-panel weekly-overview">
                <h2>Weekly Overview</h2>

                <div className="week-bars">
                   <div className="day-bar"><span>Mon</span><div style={{ height: "55%" }}></div></div>
                    <div className="day-bar"><span>Tue</span><div style={{ height: "70%" }}></div></div>
                    <div className="day-bar"><span>Wed</span><div style={{ height: "45%" }}></div></div>
                    <div className="day-bar"><span>Thu</span><div style={{ height: "80%" }}></div></div>
                    <div className="day-bar"><span>Fri</span><div style={{ height: "75%" }}></div></div>
                    <div className="day-bar"><span>Sat</span><div style={{ height: "90%" }}></div></div>
                    <div className="day-bar"><span>Sun</span><div style={{ height: "100%" }}></div></div>
                  </div>
                </div>

                <div className="habit-panel suggestions">
                  <h2>Today's Suggestions</h2>
                  <p>🧘‍♀️ Take a 10 minute break to stretch and breathe.</p>
                  <p>📖 Read 10 pages of your current book.</p>
                  <p>☎️ Call someone you haven't spoken to in a while.</p>
                  <p>🚶 Go for a 20 minute walk without your phone.</p>
                </div>
              </section>

              <section className="recent-completions">
                <h2>Recent Completions</h2>

                <div className="recent-list">
                  <p>🏋️ Workout — 2h ago</p>
                  <p>💻 Code — 4h ago</p>
                  <p>📚 Read — 6h ago</p>
                  <p>🧘 Meditate — 8h ago</p>
                </div>
                </section>
        </main>
    );
}
export default HabitPage;