// import './App.css'
import Header from './components/Header';
import StudentList from './components/StudentList';
import { students } from './data/students';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <StudentList students={students} />
      <Footer />

      <section id="spacer"></section>
    </>
  )
}

export default App
