interface LetterCardProps {
title: string;
date: string;
locked: boolean;
preview: string;
}

function LetterCard(props: LetterCardProps) {
    return (
        <div className="letter-card">
            <div className="letter-icon">
                {props.locked ? "🔒" : "✉️"}
            </div>
            <h3>{props.title}</h3>

            <p className="letter-date">
                {props.locked ? "Opens on" : "Written on"}
                <br />
                {props.date}
                </p>

                <p className="letter-preview">
                    “{props.preview}”
                </p>

                {!props.locked && (
        <button>Read Letter</button>
      )}

            </div>
    );
}

export default LetterCard;