const root = ReactDOM.createRoot(document.getElementById('root'));

const studentName = "Daniel Cohen";
const studentAge = 24;
const studentCity = "Haifa";
const studentCourse = "FullStack Development";

const allLessons = 110;
const completedLessons = 37;
const remainingLessons = allLessons - completedLessons;

const Student = ({
                     studentName,
                     studentAge,
                     studentCity,
                     studentCourse,
                     completedLessons,
                     remainingLessons
                 }) => {
    return (
        <div>
            <img className="logo" src="./Img/tr_logo_3x.avif" alt="Tel-Ran"/>
            <hr/>
            <div className="profile-container">
                <div className="student-card">
                    <h1>Мой учебный профиль</h1>

                    <p>
                        <span className="label">Имя студента: </span>
                        <span className="value">{studentName}</span>
                    </p>

                    <p>
                        <span className="label">Возраст: </span>
                        <span className="value">{studentAge}</span>
                    </p>

                    <p>
                        <span className="label">Город: </span>
                        <span className="value">{studentCity}</span>
                    </p>

                    <p>
                        <span className="label">Изучаемый курс: </span>
                        <span className="value">{studentCourse}</span>
                    </p>

                    <p>
                        <span className="label">Количество пройденных занятий: </span>
                        <span className="value">{completedLessons}</span>
                    </p>

                    <p>
                        <span className="label">Количество оставшихся занятий: </span>
                        <span className="value">{remainingLessons}</span>
                    </p>
                </div>
            </div>

        </div>
    );
};


root.render(
    <Student
        studentName={studentName}
        studentAge={studentAge}
        studentCity={studentCity}
        studentCourse={studentCourse}
        completedLessons={completedLessons}
        remainingLessons={remainingLessons}
    />
);