interface HabitItemProps {
    icon: string;
    name: string;
    streak: number;
    completed: boolean;
    onToggle: () => void;
  onDelete?: () => void;
  };

  function HabitItem({icon,name,streak,completed,onToggle,onDelete,}: HabitItemProps) {
    return (
  <div className="habit-item">
    <div className="habit-icon">{icon}</div>

    <div className="habit-info">
      <strong>{name}</strong>
      <span>🔥 {streak} day streak</span>
    </div>

    <button
    className={
        completed
            ? "habit-toggle completed"
            : "habit-toggle"
    }
    onClick={onToggle}
>
    {completed ? "✓" : ""}
</button>

    {onDelete &&(
    <button className="delete-button" onClick={onDelete}>
      🗑️
    </button>
    )}
  </div>
);
  }

  export default HabitItem;