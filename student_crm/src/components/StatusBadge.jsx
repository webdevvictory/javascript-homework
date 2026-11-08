function StatusBadge(props) {
    return (
        <span className={props.isActive ? 'status-active' : 'status-paused'}>
            {props.isActive ? "Активен" : "На паузе"}
        </span>
    );
}

export default StatusBadge;