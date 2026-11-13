import CourseCard from './CourseCard.jsx';

function CourseList({courses}) {

    return (

        <div className="course-list">
            {courses.length === 0 && <p>Курсы не найдены.</p>}
            {courses.map(course => (
                <CourseCard key={course.id} course={course}/>
            ))}

        </div>

    );
}

export default CourseList;