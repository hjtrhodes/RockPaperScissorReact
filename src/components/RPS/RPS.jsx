import { useState } from "react";
import { RPSButton } from "./RPSButton";
import Winner from "../Winner/WinnerIs";

const RPS = (props) => {
    const [emojitype, setEmoji] = useState('');
    const [type, setType] = useState('')
    const [compemojitype, setCompEmoji] = useState('')
    const [comptype, setCompType] = useState('')
    const [isContentVisible, setIsContentVisible] = useState(false);


    const RPSArray = [
        {type: "Rock", emoji: <div>🪨</div>},             
        {type: "Paper", emoji: <div>📄</div>}, 
        {type: "Scissors", emoji: <div>✂️</div>}
    ];

    const toggleContent = () => {
        setIsContentVisible(!isContentVisible);
    };

    return (
        <>
            <div className="User-Choice">
                <h1>{emojitype}</h1>
                {RPSArray.map((object, i) => (
                    <RPSButton 
                        key={`set-Emoji-${i}`}
                        RPSArray={RPSArray} 
                        type={object.type} 
                        emoji={object.emoji} 
                        setEmoji={setEmoji}
                        setType={setType}
                        setCompEmoji={setCompEmoji}
                        setCompType={setCompType} 
                    />
                ))}
            </div>
            <div className="hidecompchoice">
                <button onClick={() => setIsContentVisible(!isContentVisible)}>
                    {isContentVisible ? 'Hide Comments' : 'Show Comments'}
                </button>
                {isContentVisible && (
                    <>
                        <div className="Comp-Choice">
                            <h1>{compemojitype}</h1>
                        </div>
                        <div className="Winner-is">
                            <Winner playerChoice={type} computerChoice={comptype} userName={props.userName}/>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
    

export default RPS;