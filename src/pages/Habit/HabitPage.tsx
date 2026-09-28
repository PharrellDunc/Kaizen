import "./HabitPage.css";
import HabitItem from "../../components/HabitItem";
import { useEffect, useState } from "react";
import API_URL from "../../config";

const suggestionPool = [
  "🧘‍♀️ Take a 10 minute break to stretch and breathe.",
  "📖 Read 10 pages of your current book.",
  "☎️ Call someone you haven't spoken to in a while.",
  "🚶 Go for a 20 minute walk without your phone.",
  "💧 Drink a full glass of water when you wake up.",
  "📝 Write down three things you're grateful for.",
  "🌤️ Spend 10 minutes outside without your phone.",
  "🧹 Tidy one small area you've been ignoring.",
  "🤝 Compliment someone genuinely today.",
  "🧠 Learn one new thing and write it down.",
  "😴 Get ready for bed 30 minutes earlier tonight.",
  "🍎 Eat one meal without scrolling on your phone.",
  "💬 Send someone a message you've been putting off.",
  "🎯 Do one task you've been avoiding for at least 10 minutes.",
  "🎧 Take a short walk while listening to something that inspires you.",
  "🫶 Do something kind for someone without telling anyone.",
];

function HabitPage() {

  const today = new Date();

const dayNumber = Math.floor(
  today.getTime() / (1000 * 60 * 60 * 24)
);

const todaysSuggestions = [
  suggestionPool[dayNumber % suggestionPool.length],
  suggestionPool[(dayNumber + 1) % suggestionPool.length],
  suggestionPool[(dayNumber + 2) % suggestionPool.length],
  suggestionPool[(dayNumber + 3) % suggestionPool.length],
];

  const [habits, setHabits] = useState<any[]>([]);
  const [newHabit, setNewHabit] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    fetch(`${API_URL}/api/habits`, {
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

    const response = await fetch(`${API_URL}/api/habits`,
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

  async function handleToggleHabit(
    id: number,
    completed: boolean
  ) {
    const token = localStorage.getItem("token");

    if (!token) return;

    const response = await fetch(
      `${API_URL}/api/habits/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          completed: !completed,
        }),
      }
    );

    const updatedHabit = await response.json();

    if (!response.ok) {
      return;
    }

    setHabits((currentHabits) =>
      currentHabits.map((habit) =>
        habit.id === id ? updatedHabit : habit
      )
    );
  }

  async function handleDeleteHabit(id: number) {
    const token = localStorage.getItem("token");

    if (!token) return;

    const response = await fetch(
      `${API_URL}/api/habits/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) return;

    setHabits((currentHabits) =>
      currentHabits.filter((habit) => habit.id !== id)
    );
  }

  const completedHabits = habits.filter(
    (habit) => habit.completed
  ).length;

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
          <strong>
            {completedHabits}/{habits.length}
          </strong>
          <span>Habits Completed</span>
        </div>
      </section>

      <section className="today-habits">

        <div className="habits-header">
          <h2>Today's Habits</h2>

          <button
          className="edit-habits-button"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Done ✅" : "Edit ✏️"}
          </button>
        </div>

        <form
          onSubmit={handleAddHabit}
          className="add-habit-form"
        >
          <input
            type="text"
            placeholder="Add a new habit..."
            value={newHabit}
            onChange={(event) =>
              setNewHabit(event.target.value)
            }
          />

          <button type="submit" className="add-habit-button">
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
              onToggle={() =>
                handleToggleHabit(
                  habit.id,
                  habit.completed
                )
              }
              onDelete={
                isEditing
                  ? () =>
                      handleDeleteHabit(habit.id)
                  : undefined
              }
            />
          ))}
        </div>

      </section>

      <section className="habits-bottom-grid">

        <div className="habit-panel weekly-overview">
          <h2>Weekly Overview</h2>
          <p>
            Weekly tracking coming soon.
          </p>
        </div>

        <div className="habit-panel suggestions">
  <h2>Today's Suggestions</h2>

  {todaysSuggestions.map((suggestion) => (
    <p key={suggestion}>
      {suggestion}
    </p>
  ))}
</div>

        <div className="habit-panel longest-streaks">
          <h2>Habit Summary</h2>

          <p>
            Total habits:
            <span>{habits.length}</span>
          </p>

          <p>
            Completed today:
            <span>{completedHabits}</span>
          </p>
        </div>

      </section>

      <section className="recent-completions">
        <h2>Recent Activity</h2>

        <div className="recent-list">
          {completedHabits === 0 ? (
            <p>No habits completed yet today.</p>
          ) : (
            habits
              .filter((habit) => habit.completed)
              .map((habit) => (
                <p key={habit.id}>
                  ✅ {habit.name}
                </p>
              ))
          )}
        </div>
      </section>

    </main>
  );
}

export default HabitPage;