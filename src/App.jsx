
import Card from './components/Card';
import Practice1 from './components/Practice1';
import {Route, Routes} from "react-router-dom";
import Table from './components/Table';
import {NestedRoute} from './router/index';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<NestedRoute />} >
      <Route index element={<Card />} />
      <Route path='practice' element={<Practice1 /> }/>
      <Route path='table' element={<Table /> }/>
      </Route>
    </Routes>
    </>
  )
}

export default App
