import StatsCard from '../components/StatsCard';
import './JourneyPage.css';
import TimelineEvent from '../components/TimelineEvent';

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
        <button className="journey-tab active-tab">Timeline</button>
        <button className="journey-tab">Milestones</button>
        <button className="journey-tab">Challenges</button>
        <button className="journey-tab">Stats</button>
        </section>

         <button className="timeline-filter">📅 All Time</button>
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

    </main>
);
}

export default JourneyPage;