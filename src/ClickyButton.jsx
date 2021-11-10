import {useState} from 'react'
import {NameAge} from './NameAge';


export const ClickyButton = (props) => {
    const [counter, setCounter] = useState(props.initCount ? props.initCount : 0)
    // checks to see if the number has a remainder, if yes then the number is odd.
    const isEven = (counter % 2 === 0)
    const handleClick = () => {
        setCounter(counter+1)
        console.log("I have been clicked!")
    }
    return <div>
        <button onClick={handleClick}>Click me</button>
        <p>You have clicked the button {counter} times.</p>
        <p>{isEven ? "that's and even number" : null}</p>
        <NameAge/>
        <NameAge name="Dan" age="26"/>
    </div>
}