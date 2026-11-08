// import './App.css'
import Header from './components/Header';
import StudentList from './components/StudentList';
import { students } from './data/students';
import Footer from './components/Footer';

function App() {

  return (
    <>
        <Header />

        <main className="main-content">
            <StudentList students={students} />
        </main>

        <Footer />

    </>
  )
}

export default App
