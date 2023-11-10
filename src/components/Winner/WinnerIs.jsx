
const Winner = (props) => {
    
    const RPSMatrix = {
    Rock: {
        Rock: "draw",
        Paper: "lose",
        Scissors: "win"
    },
    Paper: {
        Rock: "win",
        Paper: "draw",
        Scissors: "lose"
    },
    Scissors: {
        Rock: "lose",
        Paper: "win",
        Scissors: "draw"
    }
};
const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === "" || computerChoice === "") {
        return "";
    }
            const result = RPSMatrix[playerChoice][computerChoice];

            if (result === "win") {
                return  `${props.userName}, you are the winner!`;
            } else if (result === "lose") {
                return "Computer wins!";
            } else if (result === "draw") {
                return "It's a draw!";
            } else { 
                return ""
            }
    };

    return (
        <p><strong>{determineWinner(props.playerChoice, props.computerChoice)}</strong></p>
    )
}

export default Winner;
