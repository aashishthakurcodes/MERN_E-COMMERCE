import {Routes,Route} from 'react-router-dom'
import HomePage from "./Pages/Homepage"
import Register from './Pages/Register';


function App() {
  return (
    <Routes>
      <Route  path='/'  element={<HomePage/>}/>
      <Route  path='/register'  element={<Register/>}/>
      <Route  path='/login'  element={<Register/>}/>
    </Routes>
  );
}

export default App;
