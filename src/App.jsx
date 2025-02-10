import "./App.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Posts from "./pages/Posts.jsx"
import Nav from "./components/Nav.jsx"
import Users from "./pages/Users.jsx"
import User from "./components/User.jsx"

function App() {
  
  return (
    <Router>
      {/* to get this nav bar to show on every page, we need to put this outside of the <Route></Route> element */}
      <Nav />
      <Routes>
        {/* //define each and every route */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/users/:username" element={<Users />}></Route>
        {/* anything after the semicolon tells React that it will be dynamic */}
      </Routes>
      <div></div>
    </Router>
    
  )
}

export default App
