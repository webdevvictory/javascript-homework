import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CourseList from './components/CourseList.jsx'
import {courses} from './data/courses.js'
import './App.css';


function App() {
    return (
        <>
            <Header/>

            <main className="main-content">
                <div className="page-heading">
                    <h1>Каталог курсов</h1>
                    <p>Всего курсов: {courses.length}</p>
                </div>

                <CourseList courses={courses} />
            </main>

            <Footer/>

        </>
    )
}

export default App;