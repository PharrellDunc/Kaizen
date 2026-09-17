import "./LettersPage.css";
import LetterCard from "../components/LetterCard";
const letters = [
  {
    title: "For the version of me finishing university",
    date: "1 Sep 2026",
    locked: true,
    preview: "Keep going. You're closer than you think.",
  },
  {
    title: "A reminder when things get hard",
    date: "15 Jan 2027",
    locked: true,
    preview: "You've overcome difficult things before.",
  },
  {
    title: "Where I see myself in 5 years",
    date: "1 Jan 2030",
    locked: true,
    preview: "Big dreams start with small steps.",
  },
  {
    title: "A note to my current self",
    date: "10 Aug 2026",
    locked: false,
    preview: "Progress over perfection.",
  },
  {
    title: "Grateful for today",
    date: "2 Aug 2026",
    locked: false,
    preview: "Don't forget to appreciate how far you've come.",
  },
  {
    title: "Why I started",
    date: "15 Jul 2026",
    locked: false,
    preview: "Discipline now, freedom later.",
  },
];

function LettersPage() {
    return (
        <main className="letters-page">
            <section className="letters-hero">
                <div className="letters-heading">
                    <span>LETTERS TO THE FUTURE</span>

                    <h1>Letters ✉️</h1>

                    <p>Write something today for the person you're become.
                       Your future self awaits!
                       </p>

                    </div>

                </section>

                <section className="write-letter-card">
                    <div>
                        <h2>Write a Letter</h2>
                        <p>Capture your thoughts, establish your goals or leave a 
                            message for your future self.
                         </p>
                        </div>

                        <button>Write Letter</button>
                    </section>

                    <section className="letters-controls">
                        <div className="letter-tabs">
                            <button className="active">All Letters</button>
                            <button>Locked</button>
                            <button>Opened</button>
                            </div>

                        <select className="letter-sort">
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                        </select>
                        </section>

                        <section className="letters-grid">
                            {letters.map((letter) => (
                                <LetterCard
                                    key={letter.title}
                                    title={letter.title}
                                    date={letter.date}
                                    locked={letter.locked}
                                    preview={letter.preview}
                                />
                            ))}
                        </section>

                        <p className="letters-footer">
                            The best time to plant a tree was 20 years ago
                            The second best time is now
                            </p>

            </main>

    )
}
export default LettersPage;