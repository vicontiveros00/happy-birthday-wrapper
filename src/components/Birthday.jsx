import { useEffect, useState } from "react";
import JSConfetti from 'js-confetti';

import 'animate.css';
import './Birthday.css'

const Birthday = ({ cat, birthdayPerson, handleClick, useFinnish }) => {
    //const { birthdayPerson, handleClick, cat } = props;
    const confetti = new JSConfetti();
    const [cake, setCake] = useState(false);
    const [displayResetButton, setDisplayResetButton] = useState(false);

    const resetStates = () => {
        setDisplayResetButton(false);
        setCake(false);
    }

    useEffect(() => {
        confetti.addConfetti({
            confettiNumber: 350
        });
        setTimeout(() => {
            setCake(true);
            setTimeout(() => {
                setDisplayResetButton(true);
            }, 800)
        }, 2500)
    }, [])

    return (
        <>
            <p className="animate__animated animate__slow animate__tada">
                {`${useFinnish ? 'Hyvää syntymäpäivää ' : 'Happy Birthday '} ${birthdayPerson}!`}
            </p>
            <img src={cat} /><br />
            {cake && <p className="animate__animated animate__fadeInUp cake">🎂 ← {useFinnish ? 'Kakku sinulle' : 'Cake for you'}</p>}
            {displayResetButton && <button className="animate__animated animate__fadeInUp reset" onClick={() => {
                resetStates();
                handleClick();
            }} style={{
                marginTop: '1rem'
            }}>
                {useFinnish ? 'Uudestaan' : 'Reset'}    
            </button>}
        </>
    )
}

export default Birthday;