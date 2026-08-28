interface TimelineEventProps {
    icon: string;
    date: string;
    time: string;
    title: string;
    description: string;
    xp: string;
}

function TimelineEvent(props: TimelineEventProps) {
    return (
        <div className="timeline-event">

        <div className="timeline-icon">
            {props.icon}
        </div>

        <div className="timeline-date">
            <strong>{props.date}</strong>
            <span>{props.time}</span>
        </div>

        <div className="timeline-content">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>

        <div className="timeline-xp">
            {props.xp} 
        </div>

        </div>
    );
}

    export default TimelineEvent;