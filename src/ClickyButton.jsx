import {useState} from 'react'
export const ClickyButton = (props) => {
    const [counter, setCounter] = useState(props.initCount ? props.initCount : 0)
    const handleClick = () => {
        setCounter(counter+1)
        console.log("I have been clicked!")
    }
    return <div>
        <button onClick={handleClick}>Click me</button>
        <p>You have clicked the button {counter} times.</p>
    </div>
}