import Countdown from 'react-countdown';
import { useEffect } from 'react';
import './App.css';

function App() {

  
  useEffect(() => {
    document.title = "Niklas Linnanen yöjäynään";
  }, []);


  return (
    <div className='container'>
        <div className='text'>Wappuun aikaa</div>
        <Countdown className='time' date={'2023-05-01T00:00:00'} />
    </div>
  )
}

export default App;
