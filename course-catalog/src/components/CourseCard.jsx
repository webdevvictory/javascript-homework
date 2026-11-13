import AvailabilityBadge from './AvailabilityBadge.jsx';

function CourseCard({ course }) {
    return (
        <article className={`course-card ${course.isAvailable ? '' : 'course-unavailable'}`}>
            <h2>Название курса: {course.title}</h2>
            <p>Преподаватель: {course.teacher}</p>
            <p>Продолжительность: {course.duration}</p>
            <p>Стоимость: {course.price}</p>
            {course.price > 400 && <p className="premium-badge">Премиальный курс</p>}
            <p>Статус: <AvailabilityBadge isAvailable={course.isAvailable} /></p>
        </article>
    );
}

export default CourseCard;