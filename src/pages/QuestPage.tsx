import "./QuestPage.css";
import QuestCard from "../components/QuestCard";

const dailyQuests = [
    {
        title: "Complete 3 habits",
        progress: "3/3",
        xp: 100,
        completed: true,
    },
    {
        title: "Read for 30 minutes",
        progress: "1/1",
        xp: 50,
        completed: true,
    },
    {
    title: "Drink 2L of water",
    progress: "1/2",
    xp: 50,
    completed: false,
  },
  {
    title: "Take a 10 minute mindfulness break",
    progress: "1/1",
    xp: 50,
    completed: true,
  },
];

const weeklyQuests = [
  {
    title: "Exercise 4 times this week",
    progress: "2/4",
    xp: 200,
    completed: false,
  },
  {
    title: "Read 5 days this week",
    progress: "5/5",
    xp: 200,
    completed: true,
  },
  {
    title: "Learn something new",
    progress: "1/3",
    xp: 200,
    completed: false,
  },
];

const milestoneQuests = [
  {
    title: "Reach a 30 day streak",
    progress: "19/30",
    xp: 1000,
    completed: false,
  },
  {
    title: "Complete 100 habits",
    progress: "46/100",
    xp: 1500,
    completed: false,
  },
  {
    title: "Try 5 new habits",
    progress: "2/5",
    xp: 1000,
    completed: false,
  },
];

function QuestPage() {
    return (
        <main className="dashboard quest-page">
           <section className="quest-hero">
            <h1>Quests</h1>
            <p>Complete challenges, Earn rewards. Become a better you</p>
            </section>

            <section className="quest-tabs">
                <button className="active">All Quests</button>
                <button>Daily</button>
                <button>Weekly</button>
                <button>Milestones</button>
                <button>Completed</button>
            </section>

            <section className="featured-quests">
             <div>
                <h2>⭐ Featured Quest</h2>
                <h3>7 Day Consistency</h3>
                <p>Complete all your habits for 7 days in a row.</p>
                <strong>3/7 days</strong>
             </div>

             <div className="featured-reward">
                <span>Reward</span>
                <strong>💎 +500 XP</strong>
                <button>View Details →</button>
             </div>
             </section>
             
            <section className="quest-group">
                <h2>Daily Quests</h2>
            
            <div className="quest-grid">
                {dailyQuests.map((quest) => (
                    <QuestCard
                    key={quest.title}
                    title={quest.title}
                    progress={quest.progress}
                    xp={quest.xp}
                    completed={quest.completed}
                />
            ))}
             </div>
             </section>

            <section className="quest-group">
                <h2>Weekly Quests</h2>
                
                <div className="quest-grid">
            {weeklyQuests.map((quest) => (
            <QuestCard
              key={quest.title}
              title={quest.title}
              progress={quest.progress}
              xp={quest.xp}
              completed={quest.completed}
            />
          ))}
        </div>
      </section>

       <section className="quest-group">
        <h2>Milestone Quests</h2>

        <div className="quest-grid">
          {milestoneQuests.map((quest) => (
            <QuestCard
              key={quest.title}
              title={quest.title}
              progress={quest.progress}
              xp={quest.xp}
              completed={quest.completed}
            />
          ))}
        </div>
      </section>

      <section className="recent-quest-activity">

        <div className="recent-quest-header">
          <h2>Recent Quest Activity</h2>
          <button>View All</button>
        </div>
        

        <div className="recent-quest-list">
          <p>✅ Complete 3 Habits — 20 mins ago</p>
          <p>🏆 Read for 30 Minutes — Yesterday</p>
          <p>💎 +200 XP earned — 2 days ago</p>
          <p>⭐ 7 Day Consistency unlocked — Last week</p>
          </div>
          
        </section>

            </main>
    );
}

export default QuestPage;