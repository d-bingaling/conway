import {useState} from 'react'
export const ClickyButton = (props) => {
    const [counter, setCounter] = useState(0)
    const handleClick = () => {
        setCounter(counter+1)
        console.log("I have been clicked!")
    }

    function whenClicked(){
        console.log("Click!")
    }
    return <div>
        <button onClick={handleClick}>Click me</button>
        <button onClick={whenClicked}>Click me</button>
        <p>You have clicked the button {counter} times.</p>
    </div>
}