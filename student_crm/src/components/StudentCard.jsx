import StatusBadge from './StatusBadge';

function StudentCard(props){
    return (
        <article className={`student-card ${props.student.isActive ? 'active' : 'paused'}`}>
            <p>ID: {props.student.id}</p>
            <p>Имя: {props.student.name}</p>
            <p>Возраст: {props.student.age}</p>
            <p>Группа: {props.student.group}</p>
            <p>Статус: <StatusBadge isActive={props.student.isActive} /></p>
        </article>
    );
}

export default StudentCard;