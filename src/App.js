import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage/MainPage';
import TopMain from './Top/TopMain';
import Body from './Body/Body';
import LoginBox2 from './Body/LoginBox2';
import Enter from './Body/Enter';
import Education from './Body/Education';
import Profile from './Body/Profile';
import MathTest from './Body/SubjectPages/MathTest';
import MathStudy from './Body/SubjectPages/MathStudy';
import EnglishStudy from './Body/SubjectPages/EnglishStudy';
import EnglishTest from './Body/SubjectPages/EnglishTest';
import MathTest1 from './Body/SubjectPages/MathTest1';
import MathTest2 from './Body/SubjectPages/MathTest2';
import EnglishTest1 from './Body/SubjectPages/EnglishTest1';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
function App() {
  return (
    <div>
      <TopMain></TopMain>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage/>} />
          <Route path="/enter" element={<Enter/>} />
          <Route path="/enter/test/math" element={<MathTest/>} />
          <Route path="/enter/study/math" element={<MathStudy/>} />
          <Route path="/enter/test/english" element={<EnglishTest/>} />
          <Route path="/enter/study/english" element={<EnglishStudy/>} />
          <Route path="/enter/test/math/sachick" element={<MathTest1/>} />
          <Route path="/enter/test/math/bang" element={<MathTest2/>} />
          <Route path="/enter/test/english/basicEnglishWord" element={<EnglishTest1/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
