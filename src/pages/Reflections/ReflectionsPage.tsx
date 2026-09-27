import "./ReflectionsPage.css";

const reflections = [
  {
    date: "18 Sep 2026",
    title: "Grateful for the people around me",
    category: "Grateful",
    text: "Today I realised how lucky I am to have people who genuinely support me.",
    mood: "🙂",
  },
  {
    date: "14 Sep 2026",
    title: "Pushed through a tough day",
    category: "Challenges",
    text: "Wasn't feeling motivated today but I still got my workout done.",
    mood: "💪",
  },
  {
    date: "10 Sep 2026",
    title: "Progress feels real",
    category: "Growth",
    text: "Looking back at where I was a few months ago, I can actually see the difference.",
    mood: "🌱",
  },
];

function ReflectionsPage() {
    return (
        <main className="dashboard reflections-page">
            
            <section className="reflections-hero">
                <span>PAUSE. REFLECT. GROW.</span>
                <h1>Reflections</h1>
                <p>
                  A space to check in with yourself. Celebrate progress,
                  learn from challenges, and stay aligned with who you
                  want to become.
                </p>
                </section>

                <section className="reflections-top">
                    <div className="new-reflection">
                       <h2>🖊️ Write a New Reflection</h2>
                        <p>How are you feeling today? What's on your mind?</p>
                    <textarea placeholder="Start writing..."></textarea>
                    
                    <div className="mood-options">
                        <button>🙂 Grateful</button>
                        <button>💪 Motivated</button>
                        <button>🌱 Tranquil</button>
                        <button>☁️ Stressed</button>
                        <button>⚡ Challenged</button>
                    </div>

                    <button className="save-reflection">Save Reflection</button>
                  </div>

                  <div className="mood-tracker">
                    <h2>📊 Mood Tracker</h2>
                    <p>This Week</p>
                    <strong>Mostly positive</strong>
                    </div>
                    </section>

                    <section className="reflection-controls">
                        <div className="reflection-tabs">
                            <button className="active">All</button>
                            <button>Grateful</button>
                            <button>Challenges</button>
                            <button>Growth</button>
                            <button>Goals</button>
                            <button>Personal</button>
                        </div>

                        <input
                        className="reflection-search"
                        placeholder="Search reflections..."
                        />
                    </section>

                    <section className="reflections-main">
                        <div className="reflection-list">
                            {reflections.map((reflection) => (
                                <div className="reflection-card" key={reflection.title}>
                                    <span>{reflection.date}</span>

                                    <div>
                                        <h3>{reflection.title}</h3>
                                        <small>{reflection.category}</small>
                                        <p>{reflection.text}</p>
                                    </div>

                                    <span>{reflection.mood}</span>
                                </div>
                            ))}
                            </div>

                        <div className="reflection-side">
                            <div className="reflection-stats">
                                <h3>📊Reflection Stats</h3>
                                <p>24</p>
                                <p>Total Reflections</p>
                            </div>

                            <div className="reflection-motivation">
                                <h2>🌿 Keep Going</h2>
                                <p>
                                Reflection isn't about having all the answers.
                                Its about being honest with yourself and learning from your experiences.
                                </p>
                                </div>
                        </div>
                        </section>
            </main>
    );
}
export default ReflectionsPage;