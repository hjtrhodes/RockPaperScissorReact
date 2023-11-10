export const RPSButton = (props) => {
    
    const updateCompEmoji = () => {
        const randomIndex = Math.floor(Math.random() * props.RPSArray.length);
        let currentEmoji = props.RPSArray[randomIndex].emoji;
        let currentType = props.RPSArray[randomIndex].type;
        props.setCompEmoji(currentEmoji);
        props.setCompType(currentType);
    };    


    const updateUserEmoji = () => {
        props.setEmoji(props.emoji);
        props.setType(props.type);
        updateCompEmoji()
    };

    return <button onClick={updateUserEmoji} style={{ outline: '2px solid orange', marginRight: '8px' }}>{props.type}</button>
};