import './App.css';
import Main from './views/Main.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
<Routes>
<Route element={<Main />} path='/' />
{/* <Route element={< />} path='/' /> */}
</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
