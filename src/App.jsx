import { useState } from 'react';
import './App.css'
import 'animate.css';
import Birthday from './components/Birthday';
import PulseLoader from "react-spinners/PulseLoader";
import Cat from './media/dance-party-cat.gif';
import PartyHorn from './media/party-horn.mp3';

const App = () => {
  const birthdayPerson = 'John Doe';
  //person whose birthday it is
  const [buttonIsPressed, setButtonIsPressed] = useState(false);
  const [loading, setLoading] = useState(false);
  const horn = new Audio(PartyHorn);
  const finnish = false;
  //change to true if you want finnish

  document.title = finnish ? 'Hyvää syntymäpäivää!' : 'Happy Birthday!';

  const handleClick = () => {
    setButtonIsPressed(buttonIsPressed ? false : true);
  }

  return (
   <>
    {buttonIsPressed ? 
      <Birthday cat={Cat} birthdayPerson={birthdayPerson} handleClick={handleClick} horn={horn} finnish={finnish} />
      : 
      (!loading ?
        <button className='animate__animated animate__zoomIn animate__fast' onClick={() => {
          setLoading(true);
          setTimeout(() => {
            horn.play();
            handleClick();
            setLoading(false);
          }, 1000);
        }}>
          {finnish ? 'Paina tästä' : 'Tap Here'}
        </button>
        :
        <PulseLoader color='rgba(255, 255, 255, 0.87)' /> 
      )
    }
   </>
  )
}

export default App;
