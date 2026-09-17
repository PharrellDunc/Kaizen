import './LeaderboardPage.css';

const users = [
  { rank: 1, name: "Franca", level: 28, xp: 12450, streak: 62 },
  { rank: 2, name: "JordanBH", level: 25, xp: 11200, streak: 48 },
  { rank: 3, name: "David_m", level: 22, xp: 9870, streak: 37 },
  { rank: 4, name: "JackTaylor", level: 20, xp: 8410, streak: 29 },
  { rank: 5, name: "UgoChuckwu", level: 19, xp: 7995, streak: 28 },
  { rank: 6, name: "tavienGyms", level: 18, xp: 7430, streak: 24 },
  { rank: 7, name: "iScxnarity", level: 17, xp: 6980, streak: 21 },
  { rank: 8, name: "RelluAesthetics", level: 16, xp: 6210, streak: 19 },
  { rank: 9, name: "Serenity", level: 15, xp: 5880, streak: 17 },
  { rank: 10, name: "Pharrell (You)", level: 12, xp: 4360, streak: 17 },
];

function LeaderboardPage() {
    return (
        <main className="dashboard leaderboard-page">
            <section className="leaderboard-hero">
                <span>TOGETHER WE GROW</span>

                <h1>Leaderboard</h1>

                <p>Discipline is contagious. Surround yourself
                    with those who inspire you to be better.
                </p>
                </section>

                <section className="leaderboard-controls">
                    <div className="leaderboard-tabs">
                        <button className="active">Global</button>
                        <button>Friends</button>
                        <button>This Month</button>
                        <button>All Time</button>
                    </div>

                <select className="leaderboard-sort">
                    <option>XP (Highest First)</option>
                    <option>Streak</option>
                    <option>Level</option>
                    </select>
                </section>

                <section className="leaderboard-main">
                    <div className="leaderboard-table">
                        <div className="leaderboard-row leaderboard-header">
                            <span>#</span>
                            <span>Name</span>
                            <span>Level</span>
                            <span>XP</span>
                            <span>Streak</span>
                        </div>

                        {users.map((user) => (
                            <div 
                            key={user.name} 
                            className={
                                user.name ==="Pharrell"
                                ? "leaderboard-row current-user"
                                : "leaderboard-row"
                            }
                            >
                                <span>🎖️{user.rank}</span>
                                <span>{user.name}</span>
                                <span>{user.level}</span>
                                <span>{user.xp}</span>
                                <span>🔥{user.streak}</span>
                            </div>
                        ))}
                        </div>

                        <div className="leaderboard-side">
                            <div className="rank-card">
                                <h2>Your Rank</h2>
                                <strong>#10</strong>
                                <p>Out of 1,284 Kaizen users</p>

                                <div className="rank-stats">
                                    <div>
                                        <span>Level</span>
                                        <strong>12</strong>
                                        </div>

                                    <div>
                                        <span>XP</span>
                                        <strong>4,360</strong>
                                    </div>

                                    <div>
                                        <span>Streak</span>
                                        <strong>🔥 17</strong>
                                    </div>
                                </div>
                            </div>

                            <div className="keep-going-card">
                                <h2>🎯 Keep Going</h2>
                                <p>You're in the <strong>top 10%</strong>!</p>
                                <p>Stay consistent and climb higher.</p>
                            </div>

                            <div className="leaderboard-quote">
                                <p>
                                    "Comparison can be a tool for inspiration, not insecrurity.
                                    Let others' progress motivate your own.""
                                </p>
                            </div>
                        </div>
                    </section>

                    <p className="leaderboard-footer">
                        Better habitts. Brighter futures. Together.
                    </p>
            </main>
    );
}
export default LeaderboardPage;