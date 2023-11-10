const Greeting = (props) => {

  // Function to handle form submission
    const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user has entered anything
    if (!props.userName.trim()) {
    alert('Please enter your name.');
    return;
    }

    // Escape HTML from the user's input
    const escapedName = props.userName.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    props.onSetUserName(escapedName);
    
    props.onSubmitStatusChange(true);
};

    return (
    <div>
      {/* Display a form if the user hasn't submitted their name */}
        {!props.submitted ? (
        <form onSubmit={handleSubmit}>
        <label htmlFor="UserNameInput"><strong>
            Enter your name:
            <br></br>
            {/* Input field to capture the user's name */}
            <input
                type="text"
                id="UserNameInput"
                value={props.userName}
                onChange={(e) => props.onSetUserName(e.target.value)}
            /></strong>
        </label>
        <br></br>
        <br></br>
            {/* Submit button */}
            <button type="submit" style={{ backgroundColor: 'orange', color: 'white' }}>Submit</button>
        </form>
        ) : (
        // Display a greeting if the user has submitted their name
        <div>
            <h2>Hello, {props.userName}!</h2>
            <p>Please make your choice:</p>
        </div>
        )}
    </div>
    );
};

export default Greeting;
