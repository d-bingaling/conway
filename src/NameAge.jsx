export const NameAge = (props) => {
    const name = props.name ? props.name : "Idiot"
    return <p>Your name is {name} and your age is {props.age}.</p>
}