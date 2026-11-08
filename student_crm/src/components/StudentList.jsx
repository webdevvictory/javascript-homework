import StudentCard from './StudentCard';

function StudentList(props){
    return (
        <>
            <div className="list-header">
                <h2>Наши студенты</h2>
                <p>Всего студентов: {props.students.length}</p>
            </div>
            {props.students.length > 0 ? (
                <div className="students-grid">
                    {props.students.map((student) => (
                        <StudentCard key={student.id} student={student} />
                    ))}
                </div>
            ) : (
                <p>Список еще не заполнен</p>
            )}
        </>
    );
}

export default StudentList;