import "./LettersPage.css";
import LetterCard from "../../components/Cards/LetterCard";
import { useEffect, useState } from "react";


function LettersPage() {

const [showForm, setShowForm] = useState(false);
const [title, setTitle] = useState("");
const [message, setMessage] = useState("");
const [openLater, setOpenLater] = useState(false);
const [openAt, setOpenAt] = useState("");
const [letters, setLetters] = useState<any[]>([]);
const [selectedLetter, setSelectedLetter] = useState<any | null>(null);
const [showKaizenMessage, setShowKaizenMessage] = useState(false);
const [filter, setFilter] = useState("all");
const [sortOrder, setSortOrder] = useState("newest");
useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) return;

  fetch("http://localhost:3000/api/letters", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setLetters(data);
    });
}, []);

const displayedLetters = [...letters]
.filter(letter => {

    const locked =
        letter.open_at &&
        new Date(letter.open_at) > new Date();

    if(filter === "locked")
        return locked;

    if(filter === "opened")
        return !locked;

    return true;
})
.sort((a,b)=>{

    const aDate =
        new Date(a.created_at).getTime();

    const bDate =
        new Date(b.created_at).getTime();

    return sortOrder === "newest"
        ? bDate - aDate
        : aDate - bDate;
});

async function handleCreateLetter(event: React.FormEvent) {
  event.preventDefault();

  const token = localStorage.getItem("token");

  if (!token || !title.trim() || !message.trim()) {
    return;
  }

  const response = await fetch(
    "http://localhost:3000/api/letters",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        message,
        openAt: openLater && openAt ? openAt : null,
      }),
    }
  );

  const createdLetter = await response.json();

  if (!response.ok) {
    return;
  }

  setLetters((currentLetters) => [
    createdLetter,
    ...currentLetters,
  ]);

  setTitle("");
  setMessage("");
  setOpenAt("");
  setOpenLater(false);
  setShowForm(false);
}
    return (
        <main className="letters-page">
            <section className="letters-hero">
                <div className="letters-heading">
                    <span>LETTERS TO THE FUTURE</span>

                    <h1>Letters ✉️</h1>

                    <p>Write something today for the person you're becoming.
                       Your future self awaits!
                       </p>

                    </div>

                </section>

                <div
  className="kaizen-notification"
  onClick={() => setShowKaizenMessage(true)}
>
  <div className="kaizen-notification-icon">
    🌱
  </div>

  <div className="kaizen-notification-content">
    <strong>Kaizen Team</strong>
    <p>You have 1 new message.</p>
  </div>

  <span className="kaizen-notification-arrow">
    ›
  </span>
</div>

                <section className="write-letter-card">
                    <div>
                        <h2>Write a Letter</h2>
                        <p>Capture your thoughts, establish your goals or leave a 
                            message for your future self.
                         </p>
                        </div>

                        <button
                            className="save-letter-button"
                            onClick={() => setShowForm(true)}
                        >
                        ✍️ Write a Letter
                        </button>

                        
                    </section>

                    {showForm && (
  <form
    onSubmit={handleCreateLetter}
    className="letter-form"
  >
    <div className="letter-form-group">
      <label>Letter title</label>

      <input
        className="letter-title-input"
        type="text"
        placeholder="Where do you want to be in a year?"
        maxLength={120}
        value={title}
        onChange={(event) =>
          setTitle(event.target.value)
        }
      />
    </div>

    <div className="letter-form-group">
      <label>Your message</label>

      <textarea
        className="letter-message-input"
        placeholder="Write something to your future self..."
        maxLength={500}
        value={message}
        onChange={(event) =>
          setMessage(event.target.value)
        }
      />

      <span className="character-count">
        {message.length}/500
      </span>
    </div>

    <div className="letter-unlock-row">
      <label className="future-toggle">
        <input
          type="checkbox"
          checked={openLater}
          onChange={(event) =>
            setOpenLater(event.target.checked)
          }
        />

        <span>Open on a future date</span>
      </label>

      {openLater && (
        <input
          className="letter-date-input"
          type="datetime-local"
          value={openAt}
          onChange={(event) =>
            setOpenAt(event.target.value)
          }
        />
      )}
    </div>

    <div className="letter-form-actions">
      <button
        type="submit"
        className="save-letter-button"
      >
        Save Letter
      </button>

      <button
        type="button"
        className="cancel-letter-button"
        onClick={() => setShowForm(false)}
      >
        Cancel
      </button>
    </div>
  </form>
)}

    <section className="letters-controls">
        <div className="letter-tabs">
            <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
            >
            All Letters
        </button>

        <button
            className={filter === "locked" ? "active" : ""}
            onClick={() => setFilter("locked")}
            >
            Locked
            </button>

        <button
         className={filter === "opened" ? "active" : ""}
             onClick={() => setFilter("opened")}
        >
        Opened
            </button>
    </div>

    <select
        className="letter-sort"
        value={sortOrder}
        onChange={(e) =>
        setSortOrder(e.target.value)
    }
>
    <option value="newest">
        Newest First
    </option>

    <option value="oldest">
        Oldest First
    </option>
</select>
    </section>

<section className="letters-grid">
    {displayedLetters.map((letter) => {
  const isLocked =
    letter.open_at &&
    new Date(letter.open_at).getTime() > Date.now();

  const displayDate = letter.open_at
    ? new Date(letter.open_at).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : new Date(letter.created_at).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });

  return (
    <LetterCard
      key={letter.id}
      title={letter.title}
      date={displayDate}
      locked={Boolean(isLocked)}
      preview={
        isLocked
          ? "This letter is locked until its chosen date."
          : letter.message
      }
      onRead={() => setSelectedLetter(letter)}
    />
  );
})}
                        </section>

                        {showKaizenMessage && (
  <div className="letter-modal-overlay">
    <div className="kaizen-team-note">

      <button
        className="letter-modal-close"
        onClick={() => setShowKaizenMessage(false)}
      >
        ✕
      </button>

      <div className="kaizen-note-brand">
        🌱 Kaizen
      </div>

      <span className="letter-modal-label">
        A MESSAGE FROM THE KAIZEN TEAM
      </span>

      <h2>Welcome to Kaizen.</h2>

      <p>
        A massive welcome to the platform from me.
      </p>

      <p>
        Kaizen began with a simple idea:
        becoming better shouldn't require becoming disappointed
        with who you are today. I was reading a book on the soft
        sandy beach of lanzarote and I suddenly came across this 
        concept. It stuck with me... this japanese philosophy
        describes the process of incremental growth. An ideology 
        stemming from progression in smaller steps. The accumulation
        of 1% efforts shaping you into somebody completely different
        at the end of the year. Solving one leet code problem doesnt make
        you a software engineer. Not event twenty. But by the end
        of the year thats 365 problems. Sounds simple right? because it is!
        now compare that version of you who trembled at the sight of two sets
        to the person you are now. Suddenly you forget when you changed.
        When did I stop becoming anxious. When did the script flip and all
        of a sudden im confident in my abilities. Well that feeling
        is kaizen.
      </p>

      <p>
        This project was created to make self-improvement feel
        encouraging, intentional and personal — one small step at
        a time.
      </p>

      <p>
        You're currently using an early version of Kaizen.
        New features such as quests, deeper progress tracking,
        reflections, community features and richer time capsules
        are planned for future releases.
      </p>

      <p className="kaizen-note-ending">
        For now, keep showing up.
        <br />
        1% better every day. 🌱
      </p>

      <div className="kaizen-note-signature">
        — Pharrell Duncan
        <span>Creator of Kaizen</span>
      </div>

    </div>
  </div>
)}

    {selectedLetter && (
  <div className="letter-modal-overlay">
    <div className="letter-modal">

      <button
        className="letter-modal-close"
        onClick={() => setSelectedLetter(null)}
      >
        ✕
      </button>

      <span className="letter-modal-label">
        LETTER TO YOURSELF
      </span>

      <h2>{selectedLetter.title}</h2>

      <p className="letter-modal-message">
        {selectedLetter.message}
      </p>

      <p className="letter-modal-date">
        Written{" "}
        {new Date(
          selectedLetter.created_at
        ).toLocaleDateString("en-GB")}
      </p>

    </div>
  </div>
)}

     <p className="letters-footer">
        The best time to plant a tree was 20 years ago
        -The second best time is today.
        -</p>
    </main>

    )
}
export default LettersPage;