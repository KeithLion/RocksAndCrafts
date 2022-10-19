import './App.css';
import Main from './views/Main.js'
import LoginForm  from './components/Login.js'
import Register from './components/register';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
<Routes>
<Route element={<Main />} path='/' />
<Route element={<LoginForm />} path='/login' />
<Route element={<Register />} path='/register' />
</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
