import StatsCard from "../../components/Cards/StatsCard";
import FocusCard from "../../components/Cards/FocusCard";
import { useEffect, useState } from "react";

type User = {
  name: string;
  level: number;
  xp: number;
  streak: number;
};

type HomePageProps = {
  user: User | null;
};

function HomePage({ user }: HomePageProps) {
  const [backendMessage, setBackendMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/health")
      .then((response) => response.json())
      .then((data) => {
        setBackendMessage(data.message);
      });
  }, []);

  return (
    <main className="dashboard">

      <section className="hero">
        <div>
          <h1>
            Good evening,{" "}
            <span className="name">
              {user ? user.name : "Loading..."}
            </span>
          </h1>

          <p>{backendMessage}</p>

          <p>
            You've got this.{" "}
            <strong>1% better today.</strong>
          </p>
        </div>

        <div className="quote">
          “Sometimes ambition moves the finish line so often that you forget how far you've already travelled.”
        </div>
      </section>

      <section className="stats">
        <StatsCard
          icon="🔥"
          title="Day Streak"
          value={String(user?.streak ?? 0)}
          subtitle="days"
        />

        <StatsCard
          icon="📈"
          title="Progress"
          value={`Level ${user?.level ?? 1}`}
          subtitle={`${user?.xp ?? 0} XP`}
        />

        <FocusCard
          icon="🌿"
          title="Kaizen"
          task={[
            "Keep showing up.",
            "Small progress still counts.",
            "1% better today."
          ]}
        />
      </section>

      <section className="lower-grid">

        <div className="card">
          <span>🌿 Daily Quest</span>
          <h3>Coming soon.</h3>
          <p>Small courage compounds.</p>
        </div>

        <div className="card tree-card">
          <span>🌳 Habit Tree</span>
          <div className="tree">🌳</div>
          <p>
            Nurture your habits. Watch yourself grow.
          </p>
        </div>

        <div className="card">
          <span>✉️ Letter to Future You</span>
          <h3>Coming soon.</h3>
          <p>
            A future version of you will have something to read.
          </p>
        </div>

      </section>

    </main>
  );
}

export default HomePage;