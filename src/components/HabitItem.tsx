interface HabitItemProps {
    icon: string;
    name: string;
    streak: number;
    completed: boolean;
  };

  function HabitItem(props:HabitItemProps) {
    return (
        <div className="habit-item">
            <div className="habit-info">
                <span className="habit-icon">{props.icon}</span>

                <div>
                <h3>{props.name}</h3>
                <p>🔥 {props.streak} day streak </p>

            </div>
                </div>

            <button className="habit-check">
                {props.completed ?"✅" : "⬜"}
                </button>
            </div>
    );
  }

  export default HabitItem;