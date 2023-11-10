import './App.css'
import RPS from './components/RPS/RPS'
import Greeting from './components/Greeting/Greeting'
import { useState } from 'react';


function App() {
  const [userName, setUserName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSetUserName = (name) => {
    setUserName(name);
  };

  const handleSubmittedChange = (status) => {
    setSubmitted(status);
  };

  return (
    <>
    <div>
      <Greeting onSetUserName={handleSetUserName} userName={userName} submitted={submitted} onSubmitStatusChange={handleSubmittedChange}/>
    </div>
    {submitted && <RPS userName={userName}/>} 
    </>
  );
}

export default App
