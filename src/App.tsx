import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { Setting } from './pages/Setting'

function App() {


  return (
    <>
      <Router basename='/vite-react-app-deploy-lab'>
        <div>
          <h1>Menu</h1>
          <Link to="/">Home</Link>
          <Link to="/setting">Setting</Link>
        </div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/setting" Component={Setting} />
        </Routes>
      </Router>
    </>
  )
}

export default App
