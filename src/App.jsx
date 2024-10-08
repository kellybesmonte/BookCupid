
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Landing from './pages/Landing/Landing';
import Question1 from './components/Question1/Question1';
import QuotesQuestion from './components/QuotesQuestion/QuotesQuestion';
import BookProfiles from './pages/BookProfiles/BookProfiles';
import BookMatch from './pages/BookMatch/BookMatch';
import MoreBookRecs from './pages/MoreBookRecs/MoreBookRecs';

function App() {



  return (
    <Router>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/question1" element={<Question1 />} />
          <Route path="/quotes/:genres" element={<QuotesQuestion />} />
          <Route path="/book-profiles/:genre" element={<BookProfiles />} />
          <Route path="/book-match/:bookId" element={<BookMatch />} />
          <Route path="/more-book-recs/:genre" element={<MoreBookRecs />} />
        </Routes>
  
    </Router>
  );
}

export default App;

