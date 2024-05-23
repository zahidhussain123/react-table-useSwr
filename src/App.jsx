
import Card from './components/Card';
import Practice1 from './components/Practice1';
import {Route, Routes} from "react-router-dom";
import Table from './components/Table';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Card />}/>
      <Route path='/practice' element={<Practice1 /> }/>
      <Route path='/table' element={<Table /> }/>
    </Routes>
    </>
  )
}

export default App
