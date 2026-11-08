function StatusBadge(props) {
    return (
        <span>
            {props.isActive ? "Активен" : "На паузе"}
        </span>
    );
}

export default StatusBadge;