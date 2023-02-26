import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/index" element={<SignIn/>}/>
        <Route path="/*" element={<SignIn/>}/>
      </Routes>
    </Router>
  );
}

export default App;
