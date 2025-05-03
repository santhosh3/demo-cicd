import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState('');
  async function getData() {
    const url = "/api/";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setData(json.message);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getData();
  },[])

  if(data.length == 0) {
    return (
      <div>
        loading...
      </div>
    )
  } else {
    return (
      <div>
          {data}
      </div>
    )
  }

}

export default App
