import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';

export default function App() {
  return (
    <Router>
    <Routes>
        <Route exact path="/" element={<HomePage />} />
    </Routes>
</Router >
  )
}
