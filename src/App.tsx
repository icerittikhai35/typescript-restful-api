import { useState, useEffect } from 'react';
import './App.css';



type resultProps = { //สร้าง Type มาเพื่อเก็บค่าจาก API Json
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

function App() {
  const [result, setResult] = useState<resultProps[]>([]); // ต้องการ Array จาก resultProps

  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/photos", { // Fetch Fn.
        method: "GET" // GET or POST
      });
      const jsonData = await data.json(); //Await JsonData
      setResult(jsonData); // RQ Object ที่มี Array อยู่ข้างใน
    };
    console.table(result[0])
    api();

  }, []);



  return (
    <div className="App">
      {result.map((value, index) => {
        return (
          <div className='info' key={index}>
             <img src={value.thumbnailUrl} alt={value.title} />
            <h3>{value.title}</h3>
            <h3>{value.url}</h3>
          </div>
        );
      })}

    </div>
  );

}

export default App;


