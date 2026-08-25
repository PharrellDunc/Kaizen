interface FocusCardProps {
    title: string;
    icon: string;
    task: string[];
}

function FocusCard(props: FocusCardProps) {
  return (
    <div className="card focus-card">
      <span>{props.icon} {props.title}</span>
      {props.task.map(task => 
        (<p>✅ {task}</p>    
        ))}
    </div>
  );
}

export default FocusCard;