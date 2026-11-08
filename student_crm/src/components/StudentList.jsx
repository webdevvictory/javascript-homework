import StudentCard from './StudentCard';

function StudentList(props){
    return (
        <>
            <p>Всего студентов: {props.students.length}</p>
            {props.students.length > 0 ? (
                props.students.map((student) => (
                    <StudentCard key={student.id} student={student} />
                ))
            ) : (
                <p>Список еще не заполнен</p>
            )}
        </>
    );
}

export default StudentList;