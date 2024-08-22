import { useState,useEffect } from 'react'
import Navbar from './components/Navbar';
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
    <Navbar/>
      <div className='container'>
      {data.map(item => (
        <div className="card" key={item.id}>
          <div className='title'>{item.title}</div>
          <div className='body'>{item.body}</div>
        </div>
        
      ))}
    </div>
    </>
  )
}

export default App
