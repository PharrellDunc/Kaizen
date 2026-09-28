import StatsCard from "../../components/Cards/StatsCard";
import TimelineEvent from "../../components/TimelineEvent";
import "./JourneyPage.css";

type User = {
  id: number;
  name: string;
  email: string;
  level: number;
  xp: number;
  streak: number;
  created_at: string;
  last_login_date: string | null;
};

type JourneyPageProps = {
  user: User | null;
};

function JourneyPage({ user }: JourneyPageProps) {
  if (!user) {
    return (
      <main className="dashboard journey-page">
        <p>Loading journey...</p>
      </main>
    );
  }

  const lastLogin = user.last_login_date
  ? new Date(user.last_login_date)
  : null;

const daysSinceLogin = lastLogin
  ? Math.floor(
      (Date.now() - lastLogin.getTime()) /
        (1000 * 60 * 60 * 24)
    )
  : 999;

const isActive = daysSinceLogin < 4;

  const createdAt = new Date(user.created_at);

  const daysOnJourney =
    Math.floor(
      (Date.now() - createdAt.getTime()) /
        (1000 * 60 * 60 * 24)
    ) + 1;

  const joinedDate = createdAt.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const joinedTime = createdAt.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <main className="dashboard journey-page">

      <section className="journey-hero">
        <div className="journey-heading">
          <h1>Journey 🌱</h1>

          <p>
            Track your path. Celebrate progress. Become 1% better each day.
          </p>
        </div>

        <div className="journey-landscape">
          <span className="journey-planet">🪐</span>
          <span className="journey-traveller">🚶</span>
        </div>
      </section>

      <section className="journey-stats">

        <StatsCard
          icon="📅"
          title="Days on Journey"
          value={String(daysOnJourney)}
          subtitle={`Started ${joinedDate}`}
        />

        <StatsCard
          icon="🔥"
          title="Current Streak"
          value={String(user.streak)}
          subtitle="days"
        />

        <StatsCard
          icon="💎"
          title="Progress"
          value={`Level ${user.level}`}
          subtitle={`${user.xp} XP`}
        />

        <StatsCard
  icon={isActive ? "🌱" : "🌙"}
  title="Journey Status"
  value={isActive ? "Active" : "Inactive"}
  subtitle={
    isActive
      ? "Keep showing up"
      : "Come back and keep growing"
  }
/>

      </section>

      <section className="journey-timeline">

        <div className="timeline-month-row">
          <div></div>

          <h4 className="timeline-month">
            {createdAt.toLocaleDateString("en-GB", {
              month: "long",
              year: "numeric",
            })}
          </h4>
        </div>

        <TimelineEvent
          icon="🌱"
          date={createdAt.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
          })}
          time={joinedTime}
          title="You started your Kaizen journey."
          description="Every great journey begins with a single step."
          xp=""
        />

      </section>

      <p className="journey-footer-message">
        Keep going, {user.name}. Your future self is watching.
      </p>

    </main>
  );
}

export default JourneyPage;