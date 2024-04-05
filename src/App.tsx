import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import SignupForm from './components/userComponents/SignupForm';
import SigninForm from './components/userComponents/SigninForm';
import LindingPage from './pages/LandingPage';
import UpdateBook from './components/BookComponents/UpdateBook';
function App() {
  return(
    <Router>
      <Header/>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LindingPage/>} />
        <Route path="/signup" element={<SignupForm/>} />
        <Route path="/login" element={<SigninForm/>} />
        <Route path="/addBook/:id" element={<UpdateBook/>} />
      </Routes>
    </Router>
  )
}

export default App
