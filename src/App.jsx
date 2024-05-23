
import Card from './components/Card';
import Practice1 from './components/Practice1';
import {Route, Routes} from "react-router-dom";
import Table from './components/Table';
import Navbar from './components/Navbar';
import axios from "axios";
import { useMemo, useState, useEffect } from "react";

function App() {
  const columns = useMemo(
    () => [
      {
        Header: "TV Show",
        columns: [
          {
            Header: "Name",
            accessor: "show.name",
          },
          {
            Header: "Type",
            accessor: "show.type",
          },
          // {
          //   Header: "URL",
          //   accessor: "show.url",
          // },
          // {
          //   Header: "Weight",
          //   accessor: "show.weight",
          // },
        ],
      },
      {
        Header: "Details",
        columns: [
          {
            Header: "Language",
            accessor: "show.language",
          },
          {
            Header: "Genre(s)",
            accessor: "show.genres",
          },
          {
            Header: "Runtime",
            accessor: "show.runtime",
          },
          {
            Header: "Status",
            accessor: "show.status",
          },
          {
            Header: "URL",
            accessor: "show.url",
          },
          {
            Header: "Weight",
            accessor: "show.weight",
          },
        ],
      },
    ],
    []
  );
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      console.log("ress", result?.data);
      setData(result?.data)
    })();
  }, [])
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Card />}/>
      <Route path='/practice' element={<Practice1 /> }/>
      <Route path='/table' element={<Table columns={columns} data={data} /> }/>
    </Routes>
    </>
  )
}

export default App
