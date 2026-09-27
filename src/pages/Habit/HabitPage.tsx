import "./HabitPage.css";
import HabitItem from "../../components/HabitItem";
import { useEffect, useState } from "react";

function HabitPage() {
  const [habits, setHabits] = useState<any[]>([]);
  const [newHabit, setNewHabit] = useState("");

  useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    return;
  }

  fetch("http://localhost:3000/api/habits", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setHabits(data);
    });
}, []);

async function handleAddHabit(event: React.FormEvent) {
  event.preventDefault();

  const token = localStorage.getItem("token");

  if (!token || !newHabit.trim()) {
    return;
  }

  const response = await fetch(
    "http://localhost:3000/api/habits",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: newHabit,
      }),
    }
  );

  const createdHabit = await response.json();

  if (!response.ok) {
    return;
  }

  setHabits((currentHabits) => [
    ...currentHabits,
    createdHabit,
  ]);

  setNewHabit("");
}
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

  <form onSubmit={handleAddHabit} className="add-habit-form">
    <input
      type="text"
      placeholder="Add a new habit..."
      value={newHabit}
      onChange={(event) => setNewHabit(event.target.value)}
    />

    <button type="submit">
      + Add Habit
    </button>
  </form>

  <div className="habits-list">
    {habits.map((habit) => (
      <HabitItem
        key={habit.id}
        icon="🌱"
        name={habit.name}
        streak={0}
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

                <div className="habit-panel longest-streaks">
                  <h2>Longest Streaks</h2>

                    <p>
                      🏋️ Go to the Gym
                      <span>1028 days</span>
                    </p>

                    <p>
                      🔥 Reading
                      <span>19 days</span>
                    </p>

                    <p>
                      🌱 Meditation
                      <span>3 days</span>
                    </p>

                    <p>
                      👨🏾‍🎓 Duolingo
                      <span>8 days</span>
                    </p>
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