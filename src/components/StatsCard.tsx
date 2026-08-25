interface StatsCardProps {
    title: string;
    value: string;
    icon: string;
    subtitle?: string;
}
function StatsCard(props: StatsCardProps) {
    return (
     <div className="card">
    <span>{props.icon} {props.title}</span>
      <h2>{props.value}</h2>
      {props.subtitle && <p>{props.subtitle}</p>}
    </div>   
    );
}

export default StatsCard;