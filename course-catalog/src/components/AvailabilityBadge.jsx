function AvailabilityBadge({ isAvailable }) {
    return (
        <span className={isAvailable ? 'status-active' : 'status-paused'}>
            {isAvailable ? "Доступен" : "Набор закрыт"}
        </span>
    );
}

export default AvailabilityBadge;