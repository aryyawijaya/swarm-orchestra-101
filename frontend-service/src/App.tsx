import { useEffect, useState } from 'react';
import './App.css'

const API = import.meta.env.VITE_API || '';

function App() {
  // const [addCounterResponse, setAddCounterResponse] = useState<string | null>(null);
  const [counter, setCounter] = useState<string | null>(null);

  const fetchCounter = async () => {
    try {
      const response = await fetch(`${API}/counter`);
      console.log(response)
      if (!response.ok) {
        setCounter('Error fetching data from the API');
      } else {
        const data = await response.json();
        setCounter(JSON.stringify(data, null, 2));
      }
    } catch (error) {
      console.log(error);
      setCounter('An error occurred while fetching data');
    }
  }

  const handleAPIAddCounter = async () => {
    try {
      const response = await fetch(`${API}/counter`, {
        method: 'POST',
      });
      if (!response.ok) {
        setCounter('Error fetching data from the API');
      } else {
        const data = await response.json();
        // setAddCounterResponse(JSON.stringify(data, null, 2)); // Display the response as a formatted JSON string
        // fetchCounter();
        setCounter(JSON.stringify(data, null, 2))
      }
    } catch (error) {
      console.log(error);
      setCounter('An error occurred while fetching data');
    }
  };

  useEffect(() => {
    fetchCounter();    
  }, [])

  return (
    <div>
      <div>
        {counter && (
          <pre>{counter}</pre>
        )}
      </div>
      <div>
        <button onClick={handleAPIAddCounter}>Add Counter</button>
        {/* {addCounterResponse && (
          <pre>{addCounterResponse}</pre>
        )} */}
      </div>
    </div>
  );
}

export default App
