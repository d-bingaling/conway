export const NameAge = (props) => {
    const name = props.name ? props.name : <strong>idiot</strong>
    const age = props.age ? props.age : <strong>98</strong>
    return <p>Your name is {name} and your age is {age}.</p>
}