import StatsCard from '../components/StatsCard';
import './JourneyPage.css';
import TimelineEvent from '../components/TimelineEvent';
import { useState } from 'react';

const timelineEvents = [
  {
    icon: "🌱",
    date: "2 Aug",
    time: "09:14",
    title: "You started your Kaizen journey.",
    description: "Every great journey begins with a single step.",
    xp: "+100 XP",
  },

  {
    icon: "🔥",
    date: "5 Aug",
    time: "21:33",
    title: "Reached a 3 day streak.",
    description: "Consistency is quietly becoming your superpower.",
    xp: "+50 XP",
  },

  {
    icon: "📚",
    date: "8 Aug",
    time: "18:10",
    title: "Finished reading Atomic Habits.",
    description: "Small habits. Big change.",
    xp: "+150 XP",
  },
];

function JourneyPage() {
    const [activeTab, setActiveTab] = useState("timeline");
    const [timeFilter, setTimefilter] = useState("All Time");
  return (
<main className ="dashboard journey-page">

    <section className ="journey-hero">
        <div className="journey-heading">
            <h1>Journey 🌱</h1>
            <p>Track your path. Celebrate progress. Become 1% better each day.</p>
            </div>

        <div className="journey-landscape">
            <span className ="journey-planet">🪐</span>
            <span className ="journey-traveller">🚶</span>
            </div>
        </section>

    <section className="journey-stats">
        <StatsCard
            icon="📅"
            title="Days on Journey"
            value="23"
            subtitle="Started 2 Aug 2025"
            />
        
        <StatsCard
            icon="🏁"
            title="Milestones"
            value="14"
            subtitle="Unlocked"
            />

        <StatsCard
            icon="🎯"
            title="Challenges"
            value="7"
            subtitle="Completed"
            />

        <StatsCard
            icon="🔥"
            title="Longest Streak"
            value="17"
            subtitle="days"
            />
    </section>

    <div className="timeline-topbar">
    <section className="journey-tabs">

<button onClick={() => setActiveTab("timeline")}
  className={activeTab === "timeline" 
  ? "journey-tab active-tab" 
  : "journey-tab"
  }
  >
    🏠 Home
    </button>

<button onClick={() => setActiveTab("milestones")}
  className={activeTab === "milestones" 
  ? "journey-tab active-tab" 
  : "journey-tab"
  }
  >
    📈 Journey
    </button>

<button onClick={() => setActiveTab("challenges")}
  className={activeTab === "challenges" 
  ? "journey-tab active-tab" 
  : "journey-tab"
  }
  >
    🕒 Habits
    </button>

<button onClick={() => setActiveTab("stats")}
  className={activeTab  === "stats" 
  ? "journey-tab active-tab" 
  : "journey-tab"
  }
  >
    🎯 Quests
    </button>
        </section>
        
    <select
    className="timeline-filter"
    value={timeFilter}
    onChange={(e) => setTimefilter(e.target.value)}
    >
        <option value="All Time">All Time</option>
        <option value="Last 30 Days">This Month</option>
        <option value="Last 7 Days">This Week</option>
    </select>
    </div>   

    <section className="journey-timeline">
        <div className="timeline-month-row">
  <div></div>

  <h4 className="timeline-month">
    August 2026
  </h4>
</div>

    {timelineEvents.map((event) => (
        <TimelineEvent
        key={`${event.date}-${event.time}-${event.title}`}
            icon={event.icon}
            date={event.date}
            time={event.time}
            title={event.title}
            description={event.description}
            xp={event.xp}
        />
    ))}
        </section>


{activeTab === "milestones" && (
  <section>
    <h2>Milestones</h2>
    <p>Your unlocked milestones will appear here.</p>
  </section>
)}

{activeTab === "challenges" && (
  <section>
    <h2>Challenges</h2>
    <p>Your completed challenges will appear here.</p>
  </section>
)}

{activeTab === "stats" && (
  <section>
    <h2>Stats</h2>
    <p>Your Journey statistics will appear here.</p>
  </section>
)}

<p className="journey-footer-message">
    keep going, Pharrell. Your future self is watching.
</p>
    </main>
);


}

export default JourneyPage;