import { useEffect, useState } from "react";
import "./LeaderboardPage.css";
import API_URL from "../../config";

type LeaderboardUser = {
  id: number;
  name: string;
  level: number;
  xp: number;
  streak: number;
};

type LeaderboardPageProps = {
  currentUserId?: number;
};

function LeaderboardPage({ currentUserId }: LeaderboardPageProps) {
  const [users, setUsers] = useState<LeaderboardUser[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/api/leaderboard`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const currentUserIndex = users.findIndex(
    (user) => user.id === currentUserId
  );

  const currentUser = currentUserIndex >= 0
    ? users[currentUserIndex]
    : null;

  return (
    <main className="dashboard leaderboard-page">

      <section className="leaderboard-hero">
        <h1>Leaderboard 🏆</h1>
        <p>
          Consistency compounds. See who's showing up and building momentum.
        </p>
      </section>

      <div className="leaderboard-controls">
        <div className="leaderboard-tabs">
          <button className="active">
            Global
          </button>

          <button disabled>
            Friends 🔒
          </button>
        </div>

        <button className="leaderboard-sort" disabled>
          Streak ↓
        </button>
      </div>

      <section className="leaderboard-main">

        <div className="leaderboard-table">

          <div className="leaderboard-row leaderboard-header">
            <span>Rank</span>
            <span>User</span>
            <span>Level</span>
            <span>Streak</span>
            <span>XP</span>
          </div>

          {users.map((user, index) => (
            <div
              key={user.id}
              className={
                user.id === currentUserId
                  ? "leaderboard-row current-user"
                  : "leaderboard-row"
              }
            >
              <span>#{index + 1}</span>

              <strong>
                {user.name}
              </strong>

              <span>
                Level {user.level}
              </span>

              <span>
                🔥 {user.streak}
              </span>

              <span>
                💎 {user.xp}
              </span>
            </div>
          ))}

        </div>

        <aside className="leaderboard-side">

          <div className="rank-card">
            <p>Your Rank</p>

            <strong>
              {currentUserIndex >= 0
                ? `#${currentUserIndex + 1}`
                : "—"}
            </strong>

            {currentUser && (
              <div className="rank-stats">

                <div>
                  <strong>{currentUser.streak}</strong>
                  <span>Streak</span>
                </div>

                <div>
                  <strong>{currentUser.level}</strong>
                  <span>Level</span>
                </div>

                <div>
                  <strong>{currentUser.xp}</strong>
                  <span>XP</span>
                </div>

              </div>
            )}
          </div>

          <div className="keep-going-card">
            <h3>Keep going 🌱</h3>
            <p>
              Your position isn't the goal.
              <br />
              <strong>Beating yesterday is.</strong>
            </p>
          </div>

          <div className="leaderboard-quote">
            “Comparison kills confidence. Progress builds it.”
          </div>

        </aside>

      </section>

      <p className="leaderboard-footer">
        Showing the top {users.length} members globally.
      </p>

    </main>
  );
}

export default LeaderboardPage;