import './App.scss'
import Landing from './pages/Landing/Landing';
import Question1 from './components/Question1/Question1';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/Question1' element={<Question1 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
