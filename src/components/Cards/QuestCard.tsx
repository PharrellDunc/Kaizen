interface QuestCardProps {
    title: string;
    progress: string;
    xp: number;
    completed: boolean;
}

function QuestCard(props: QuestCardProps) {
    return (
        <div className="quest-card">
            <div className="quest-complete">
                {props.completed ? "✅" : "⬜"}   
                </div>

                <h3>{props.title}</h3>

                <p>{props.progress}</p>
                
                <div className="quest-progress-bar">
                    <div className="quest-progress-fill"></div>  
                    </div>

                    <strong>💎 +{props.xp} XP</strong>  
                 </div>
    );
}
export default QuestCard;